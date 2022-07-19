import { useEffect, useState } from "react";

import { useMoralisQuery } from "react-moralis";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import { v4 as uuid_v4 } from "uuid";

import Img from "../../assets/home/noImgIcon.svg";
import {
  fetchFractions,
  setFractionDetailRecord,
} from "../../redux/features/fraction/fractionSlice";
import {
  addTypeCollectionFilter,
  addTypeCollectionFilterTextContent,
} from "../../redux/features/marketplace/marketplaceSlice";
import { calculateTotalFractionCount } from "../../utils/calculateTotalFractionProcent";
import history from "../../utils/history";
import TotalFractionSold from "../ReusableComponents/TotalFractionSold";

const CollectionItems = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const collectionAllData = useMoralisQuery("Collection");
  const [name, setName] = useState("Collection");

  const handleCollectionGemToken = (attributes: any, index: number) => {
    const id: number = index + 1;

    dispatch(
      addTypeCollectionFilter({
        className: "filterByCollection",
        textContent: attributes.name,
        id: id.toString(),
      })
    );
    dispatch(addTypeCollectionFilterTextContent(attributes.name as string));

    history.push("/marketplace");
  };

  useEffect(() => {
    setName(pathname);
  }, [pathname]);

  const handleClickFractionItem = async (
    fractionalized: any,
    index: number
  ) => {
    const route =
      "/fraction-detail/" +
      fractionalized.tokenAddress +
      "/" +
      fractionalized.tokenId;
    dispatch(setFractionDetailRecord(fractionalized));
    history.push({
      pathname: route,
    });
  };

  //fixme: need to refactor to remove references to specific applications
  if (name === "/fractions") {
    dispatch(fetchFractions(null));
  }

  const fractions: any = useSelector((state: any) => {
    return state.fractionData.fractionList;
  });

  return (
    <div className="collection_items">
      {name !== "/Collection"
        ? fractions?.map((fraction: { attributes: any }, index: number) => {
            let attributes = fraction.attributes;

            const [sold] = calculateTotalFractionCount(
              attributes.fractionsSold,
              attributes.fractionalizedQuantity
            );

            const {
              imageUrl,
              fractionsSold,
              fractionalizedQuantity,
              description,
              name,
            } = attributes;

            return (
              <div
                key={uuid_v4()}
                className="collection_items--items"
                onClick={() => handleClickFractionItem(attributes, index)}
              >
                <div className={`collection_items--items--img ${
                    !imageUrl ? 'noImg' : ""
                  }`}>
                  <img
                    src={imageUrl ? imageUrl : Img}
                    alt="#"
                    className="imgUrl"
                  />
                </div>
                <div className="collection_items--items--description">
                  <div className="collection_items--items--description--title">
                    <style>
                      {`.collection_items--items--description--title::after {width:${sold}%}`}
                    </style>
                    <TotalFractionSold
                      fractionSold={fractionsSold}
                      totalFraction={fractionalizedQuantity}
                    />{" "}
                    {fractionalizedQuantity - fractionsSold} out of{" "}
                    {fractionalizedQuantity} remaining
                  </div>
                  <div className="collection_items--items--description--text">
                    <h2>{name}</h2>
                    {description}
                  </div>
                </div>
              </div>
            );
          })
        : collectionAllData.data.map(({ attributes }, i: number) => {
            const { imageUrl, name, description } = attributes;
            return (
              <div
                key={uuid_v4()}
                className="collection_items--items"
                onClick={() => handleCollectionGemToken(attributes, i)}
              >
                <div
                  className={`collection_items--items--img ${
                    !imageUrl  && "noImg"
                  }`}
                >
                  {imageUrl  ? (
                    <img
                      src={imageUrl}
                      alt={`${imageUrl}`}
                      style={{
                        borderRadius: "2rem",
                        width: !imageUrl  ? "50%" : "100%",
                      }}
                      className="imgUrl"
                    />
                  ) : (
                    <img src={Img} alt="#" />
                  )}
                </div>
                <div className="collection_items--items--description">
                  <div className="collection_items--items--description--title_collections">
                    {name}
                  </div>
                  <div className="collection_items--items--description--text_collections">
                    {description}
                  </div>
                </div>
              </div>
            );
          })}
    </div>
  );
};

export default CollectionItems;
