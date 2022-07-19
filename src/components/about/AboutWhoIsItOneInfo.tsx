import { FC } from "react";

import { AboutWhoIsItOneInfoProps } from "./model";

const AboutWhoIsItOneInfo: FC<AboutWhoIsItOneInfoProps> = ({
  name,
  info,
  children,
}) => {
  return (
    <div className="whoIsIt__content__mainPart__container--info--oneInfo">
      <div className="whoIsIt__content__mainPart__container--info--oneInfo--img">
        {children}
      </div>
      <div className="whoIsIt__content__mainPart__container--info--oneInfo--text">
        <p>{name}</p>
        <span>{info}</span>
      </div>
    </div>
  );
};

export default AboutWhoIsItOneInfo;
