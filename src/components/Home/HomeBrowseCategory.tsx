// import { FC } from "react";

// import { useMoralis } from "react-moralis";
import { useDispatch } from "react-redux";
// import { NavLink } from "react-router-dom";
import { v4 as uuid_v4 } from "uuid";

import Img from "../../assets/home/noImgIcon.svg";
import { setFractionDetailRecord } from "../../redux/features/fraction/fractionSlice";
// import { getCollectionGemToken } from "../../redux/features/dashboard/dashboardSlice";
import {
  addTypeCollectionFilter,
  addTypeCollectionFilterTextContent,
} from "../../redux/features/marketplace/marketplaceSlice";
// import { useAppSelector } from "../../redux/hook";
import history from "../../utils/history";
const HomeBrowseCategory = (item: any, index: number) => {
  const dispatch = useDispatch();

  const handleClickItemNft = (item: any) => {
    if(process.env.REACT_APP_TYPE !== "Collections") {
      const id: number | string = item.index + 1;
      dispatch(
        addTypeCollectionFilter({
          className: "filterByCollection",
          textContent: item.attributes.name,
          id: id.toString(),
        })
        );
        dispatch(addTypeCollectionFilterTextContent(item.attributes.name as string));
        history.push("/marketplace");
      }else{
        const route = "/fraction-detail/" + item.attributes.tokenAddress + "/" + item.attributes.tokenId;
        dispatch(setFractionDetailRecord(item.attributes));
        history.push({pathname: route});
      }
  };

 
  return (
    <div
      key={uuid_v4()}
      className="homeBrowseCategory"
      onClick={() => handleClickItemNft(item)}
    >
      <div className="homeBrowseCategory__inner">
        <h3>{item.attributes?.name} </h3>
        {item.attributes.imageUrl !== undefined ? (
          <img
            src={item.attributes.imageUrl}
            alt="#"
            className="homeBrowseCategory--request_img"
          />
        ) : (
          <img src={Img} alt="#" />
        )}
        {/* <p>{attributes?.collection}</p> */}
      </div>
    </div>
  );
};
export default HomeBrowseCategory;
