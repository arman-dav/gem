import { ChangeEvent, useState } from "react";

import { useMoralis } from "react-moralis";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

import { ReactComponent as ImageIcon } from "../../assets/create/imgIcon.svg";
import { ReactComponent as ShareIcon } from "../../assets/searchResult/shareIcon.svg";
import "react-toastify/dist/ReactToastify.css";
import { setModal } from "../../redux/features/create/createSlice";
import {
  getDetailRout,
  getNFTItem,
} from "../../redux/features/marketplace/marketplaceSlice";
import GiaDataUtils from "../../utils/GiaDataUtils";
import history from "../../utils/history";

const CreatorSliderCard = (itemData: any) => {
  const { listing, data, token } = itemData;
  const { isAuthenticated } = useMoralis();
  const dispatch = useDispatch();
  const [isPending, setPending] = useState(false);

  const onClickShare = () => {
    const originPath: string = window.location.origin.toString();
    const itemPageRoute = "/detail/" + listing.address + "/" + listing.tokenId;
    const mainRoute = `${originPath}${itemPageRoute}`;
    navigator.clipboard.writeText(mainRoute);
    toast("Copied to clipboard!");
  };

  const handleNFTDetail = (e: ChangeEvent<HTMLInputElement>, pathname: any) => {
    const itemPageRoute =
      "/detail/" + pathname.listing.address + "/" + pathname.listing.tokenId;
    if (e.target.className !== "creatorSliderCard__headingSection--buy") {
      dispatch(getDetailRout(itemPageRoute));
      dispatch(getNFTItem(pathname));
      localStorage.setItem("itemDetail", JSON.stringify(pathname));
      history.push(itemPageRoute);
    } else if (pathname.listing.sold) {
      setPending(true);
      setTimeout(() => {
        dispatch(setModal(true));
        setPending(false);
      }, 2000);
    }
  };

  const imageUrl = token?.imageUrl || data?.imageUrl; // prioritize token image over data image
  const itemName =
    GiaDataUtils.getListingName(data) || data?.title.length > 20
      ? data?.title.slice(0, 20) + "..."
      : data?.title || "";


      
  return (
    <div
      className="creatorSliderCard"
      onClick={(e: any) =>
        handleNFTDetail(e, {
          listing: listing,
          data: data,
          image: token?.imageUrl,
        })
      }
    >
      <div className="creatorSliderCard__headingSection">
        <div className="creatorSliderCard__headingSection--settings">
          <ShareIcon onClick={() => onClickShare()} />
        </div>
      </div>
      <div className="creatorSliderCard__imageSection">
        {isAuthenticated && (
          <div
            className="creatorSliderCard__headingSection--buy"
            // onClick={handleAuthenticated}
          >
            {isPending ? (
              <>
                <span className="loading-spinner"></span> Pending
              </>
            ) : listing.sold ? (
              "sold"
            ) : (
              "List"
            )}
          </div>
        )}
        <div className="creatorSliderCard__imageSection--imgDiv">
          {imageUrl !== undefined ? (
            <img src={imageUrl} alt="#" />
          ) : (
            <ImageIcon />
          )}
        </div>
      </div>
      <div className="creatorSliderCard__infoSection">
        <div className="creatorSliderCard__infoSection--container">
          <div className="creatorSliderCard__infoSection--container--nameDiv">
            <h4 title={itemName} className="text-ellipsis">
              {itemName}
            </h4>
            <p>{data?.price} ETH</p>
          </div>
          <div className="creatorSliderCard__infoSection--container--fotter">
            <div className="creatorSliderCard__infoSection--container--fotter--gem_type_and_carat">
              <div>{data?.variety}</div>
              <div>{data?.carat}</div>
            </div>
            <p>{data?.valuation}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatorSliderCard;
