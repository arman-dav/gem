import { ChangeEvent, FC, useEffect, useMemo, useState } from "react";

import { useMoralis, useMoralisWeb3Api } from "react-moralis";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  getDetailRout,
  getNFT,
  getNFTItem,
} from "../../redux/features/marketplace/marketplaceSlice";
import { getPriceData } from "../../redux/features/priceCalculate/priceCalculate";
import { useAppSelector } from "../../redux/hook";
import { handleSaleNFT } from "../../utils/buyNft";
import history from "../../utils/history";

import { ResultsSectionProps } from "./model";
import NFTCollectionCard from "./NFTCollectionCard";

enum FETCH_STATUS {
  INITIAL,
  LOADING,
  COMPLETE,
}

const ResultsSection: FC<ResultsSectionProps> = () => {
  const dispuch = useDispatch();
  const { isAuthenticated, Moralis } = useMoralis();
  const [errMassage, setErrMassage]: any = useState("");
  const { gemName, collectionName, margedItems, price } = useAppSelector(
    ({ dashboard, marketplaceData, CalculatePrice }) => ({
      CollectionFilteredData: dashboard.getCollectionGemToken,
      gemName: marketplaceData.filters.type,
      collectionName: marketplaceData.filters.collection,
      price: CalculatePrice.price,
      margedItems: marketplaceData.mergedFilters,
      getNft: marketplaceData.nftData,
      isFractionalized: marketplaceData.isFractionalized,
    })
  );

  const sortBy: number | null = useSelector(
    (state: any) => state.listingData.sortBy
  );

  const [allListings, setAllListings]: any = useState([]);

  const allListingData = [...allListings];

  const gemTextContent: string[] = [];
  const collectionContent: string[] = [];

  gemName.forEach((item) => {
    gemTextContent.push(item.textContent);
  });
  collectionName.forEach((item) => {
    collectionContent.push(item.textContent);
  });
  const [isCheck, setChecked] = useState(false);
  const [allListingsFetchStatus, setAllListingsFetchStatus] = useState(
    FETCH_STATUS.INITIAL
  );

  useMemo(() => {
    let filter: any = isCheck
      ? []
      : [
          {
            field: "listing.closed",
            operator: "!=",
            value: true,
          },
        ];

    if (collectionName.length !== 0) {
      filter.push({
        field: "collection.name",
        operator: "=",
        value: [...collectionContent],
      });
    }

    if (gemName.length !== 0) {
      filter.push({
        field: "type.name",
        operator: "=",
        value: [...gemTextContent],
      });
    }

    setAllListingsFetchStatus(FETCH_STATUS.LOADING);
    Moralis.Cloud.run("allTokens", { filter }).then((res) => {
      setAllListings(res);
      dispuch(getNFT(res));
      setAllListingsFetchStatus(FETCH_STATUS.COMPLETE);
    });
  }, [isCheck, margedItems]);

  const handleAuthenticated = (item: any) => {
    if (isAuthenticated) {
      handleSaleNFT(Moralis, item);
    }
  };
  const Web3 = useMoralisWeb3Api();
  const handleNFTDetail = async (
    e: ChangeEvent<HTMLInputElement>,
    pathname: any
  ) => {
    if (e.target.className !== "buyNow") {
      try {
        const itemPageRout =
          "/detail/" +
          pathname.listing.address +
          "/" +
          pathname.listing.tokenId;

        await dispuch(getDetailRout(itemPageRout));
        dispuch(getNFTItem(pathname));

        const query = new Moralis.Query("Sales");
        query.equalTo("tokenId", pathname.listing.tokenId);
        query
          .find()
          .then((res) => localStorage.setItem("sales", JSON.stringify(res)));

        Web3.account
          .getNFTTransfers({
            address: pathname.address,
          })
          .then((res) => {
            localStorage.setItem("transfer", JSON.stringify(res.result));
          });

        localStorage.setItem("transfer", JSON.stringify([]));
        localStorage.setItem("trades", JSON.stringify([]));
        localStorage.setItem("itemDetail", JSON.stringify(pathname));

        history.push({ pathname: itemPageRout });
      } catch (err) {
        throw new Error(`${err}`);
      }
    }
  };
  useEffect(() => {
    dispuch(getPriceData());
  }, [dispuch]);

  const originPath: string = window.location.origin.toString();

  const onClickShare = ({ listing }: any) => {
    try {
      const itempageRoute =
        "/detail/" + listing.address + "/" + listing.tokenId;
      const mainRoute = `${originPath}${itempageRoute}`;
      navigator.clipboard.writeText(mainRoute);
      toast("Copied to clipboard!");
    } catch (err) {
      throw new Error(`${err}`);
    }
  };
  useEffect(() => {
    switch (sortBy) {
      case 0:
        allListingData.sort((a: any, b: any) => {
          return parseFloat(a.data.price) - parseFloat(b.data.price);
        });
        break;
      case 1:
        allListingData.sort((a: any, b: any) => {
          return parseFloat(b.data.price) - parseFloat(a.data.price);
        });
        break;
      case 2:
        allListingData.sort((a: any, b: any) => {
          var dateA: any = new Date(a.token.createdAt),
            dateB: any = new Date(b.token.createdAt);
          return dateA - dateB;
        });
        break;
      case 3:
        allListingData.sort((a: any, b: any) => {
          var dateA: any = new Date(a.token.createdAt),
            dateB: any = new Date(b.token.createdAt);
          return dateB - dateA;
        });
        break;
      case 4:
        allListingData.sort((a: any, b: any) => {
          return a.data.carat - b.data.carat;
        });
        break;
      case 5:
        allListingData.sort((a: any, b: any) => {
          return b.data.carat - a.data.carat;
        });
        break;
      default:
        break;
    }
    setAllListings(allListingData)
  }, [sortBy]);

  const filterData = useMemo(
    () => allListingData.filter((fil) => fil.listing),
    [allListingData]
  );

  return (
    <>
      <div style={{ maxWidth: "115rem", width: "90%", margin: "0 auto" }}>
        <div className="allItems" onClick={() => setChecked(!isCheck)}>
          <div
            className="allItems__check"
            style={{ background: isCheck ? "#B1DFF7" : "" }}
          ></div>
          <div className="allItems__title">Show closed items</div>
        </div>
      </div>
      {allListingData?.length === 0 &&
        allListingsFetchStatus === FETCH_STATUS.COMPLETE && (
          <h3 className="searchResult__openCollection__header">
            More Coming Soon!
          </h3>
        )}
      {filterData.length ? (
        <div className="searchResult__openCollection__results">
          {filterData.map((item: any, index) => (
            <NFTCollectionCard
              key={index || Math.random().toString()}
              onClockDetail={(e: ChangeEvent<HTMLInputElement>) =>
                handleNFTDetail(e, {
                  listing: item.listing,
                  data: item.data,
                  image: item.token.imageUrl || item?.data?.imageUrl || "",
                  giaNumber: item.token.giaNumber,
                  address: item.token.address,
                  tokenId: item?.token.tokenId || "",
                })
              }
              onClickToken={() => handleAuthenticated(item)}
              id={item.data.token.objectId}
              {...item.listing}
              image={item.token.imageUrl || item?.data?.imageUrl || ""}
              category={item.category}
              listing={item.listing}
              data={item.data}
              usdPrice={price}
              onClickShare={() =>
                onClickShare({
                  listing: item.listing,
                  data: item.data,
                })
              }
              isAuthenticated={isAuthenticated}
            />
          ))}
        </div>
      ) : (
        isCheck && (
          <div className="searchResult--err">Something went wrong!</div>
        )
      )}
    </>
  );
};

export default ResultsSection;
