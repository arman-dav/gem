import { FC } from "react";

import { v4 as uuid_v4 } from "uuid";

import AboutCategoryAction from "./AboutCategoryAction";
import { AboutCategoryProps } from "./model";

const AboutCategory: FC<AboutCategoryProps> = ({
  aboutCategoryData,
  data,
  children,
}) => {
  return (
    <div className="aboutCategory">
      <div className="aboutCategory__wrapper">
        <div className="aboutCategory__wrapper__upperSection">
          <div className="aboutCategory__wrapper__upperSection--infoSection">
            <div>
              <span>{aboutCategoryData.title}</span>
              <div>
                <p>{aboutCategoryData.description}</p>
              </div>
            </div>
            <div>{children}</div>
          </div>
        </div>
      </div>
      <div className="aboutCategory__actionSection">
        <div className="aboutCategory__actionSection--takeActionDiv">
          <p>Start Your Project</p>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat
            nulla scelerisque orci, enim morbi
          </span>
        </div>
        <div className="aboutCategory__actionSection--actions">
          {data.map(({ description, imgUrl, title }) => (
            <AboutCategoryAction
              key={uuid_v4()}
              title={title}
              description={description}
              imgUrl={imgUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutCategory;
