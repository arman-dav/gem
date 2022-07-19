import { FC, memo } from "react";

import { useMoralisQuery } from "react-moralis";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

import { ReactComponent as Arrow } from "../../assets/home/Arrow.svg";
import { getFilterCategory } from "../../redux/features/dashboard/dashboardSlice";

import { ITitleRout } from "./model";

const TitleRouting: FC<ITitleRout> = ({ title, link, pathName, className }) => {
  const allCollection = useMoralisQuery("Collection");
  const dispatch = useDispatch();

  const handleSelect = () => {
    if (pathName === "/collection") {
      dispatch(getFilterCategory(allCollection.data));
    }
  };
  return (
    <div className={`${className} TitleRouting`}>
      <div className="TitleRouting--title">{title}</div>
      <div className="TitleRouting--link">
        <NavLink to={pathName} onClick={handleSelect}>
          {link} <Arrow />
        </NavLink>
      </div>
    </div>
  );
};
export default memo(TitleRouting);
