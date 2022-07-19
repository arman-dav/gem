import { FC } from "react";

import { ReactComponent as ShowMoreIcon } from "../../assets/aboutCategory/takeAction/showMoreIcon.svg";

import { AboutCategoryActionProps } from "./model";

const AboutCategoryAction: FC<AboutCategoryActionProps> = ({
  title,
  description,
  imgUrl,
}) => {
  return (
    <div className="aboutCategoryAction">
      <img src={imgUrl} alt={title} />
      <span>{title}</span>
      <p>{description}</p>
      <ShowMoreIcon />
      {title === "Step 1" ? <button type="button">Create</button> : null}
    </div>
  );
};

export default AboutCategoryAction;
