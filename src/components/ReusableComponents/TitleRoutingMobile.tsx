import { FC } from "react";

import { Link } from "react-router-dom";

import { ReactComponent as Arrow } from "../../assets/home/Arrow.svg";

import { ITitleRout } from "./model";
const TitleRoutingMobile: FC<ITitleRout> = ({
  title,
  children,
  pathName,
  link,
}) => {
  return (
    <div className="TitleRouting__mobile">
      <div className="TitleRouting__mobile--title">{title}</div>
      {children}
      <div className="TitleRouting__mobile--link">
        <Link to={pathName}>
          {link}
          {link !== undefined && <Arrow />}
        </Link>
      </div>
    </div>
  );
};
export default TitleRoutingMobile;
