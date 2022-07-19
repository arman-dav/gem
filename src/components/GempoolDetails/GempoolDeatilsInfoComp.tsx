import { FC } from "react";

import { ReactComponent as HeartIcon } from "../../assets/creator/heart.svg";
import { ReactComponent as EyeIcon } from "../../assets/details/eye.svg";
import { ReactComponent as MoreIcon } from "../../assets/details/moreIcon.svg";
import { ReactComponent as ToRightIcon } from "../../assets/details/toRightIcon.svg";

import { GempoolDetailsInfoCompProps } from "./model";

const GempoolDetailsInfoComp: FC<GempoolDetailsInfoCompProps> = ({
  nft,
  title,
  secondBtn,
  description,
  details,
  detailsData,
}) => {
  const { first, second, third, fourth, last } = details;

  return (
    <div className="infoPart">
      <div className="infoPart__header">
        <p className="infoPart__header--name">{nft}</p>
        <div className="infoPart__header--rightPart">
          <div className="infoPart__header__views">
            <EyeIcon />
            <p>24 views</p>
          </div>
          <div className="infoPart__header__favorites">
            <HeartIcon />
            <p>5</p>
          </div>
          <div className="infoPart__header__more">
            <MoreIcon />
          </div>
        </div>
      </div>
      <div className="infoPart__name">
        <p>{title}</p>
      </div>
      <div className="infoPart__buttons">
        <button className="infoPart__buttons--edit">edit</button>
        <button className="infoPart__buttons--stake">{secondBtn}</button>
        <ToRightIcon />
      </div>
      <div className="infoPart__description">
        <p className="infoPart__description--title">description</p>

        <p className="infoPart__description--text">{description}</p>
      </div>
      <div className="infoPart__details">
        <p className="infoPart__details--title">details</p>
        <table>
          <tbody>
            <tr>
              <td className="infoPart__details--nameTD">{first}</td>
              <td className="infoPart__details--infoTD">{detailsData.first}</td>
            </tr>
            <tr>
              <td className="infoPart__details--nameTD">{second}</td>
              <td className="infoPart__details--infoTD">
                {detailsData.second}
              </td>
            </tr>
            <tr>
              <td className="infoPart__details--nameTD">{third}</td>
              <td className="infoPart__details--infoTD">{detailsData.third}</td>
            </tr>
            <tr>
              <td className="infoPart__details--nameTD">{fourth}</td>
              <td className="infoPart__details--infoTD">
                {detailsData.fourth}
              </td>
            </tr>
            <tr>
              <td className="infoPart__details--nameTD">{last}</td>
              <td className="infoPart__details--infoTD">{detailsData.last}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GempoolDetailsInfoComp;
