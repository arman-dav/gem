import { useHistory, useLocation } from "react-router";

import { homeBrowseCategoryFakeData } from "../Home/HomeBrowseCategoryFakeData";

const Create = () => {
  const history = useHistory();
  const { pathname } = useLocation();

  return (
    <div className="createPage">
      <div className="createPage__container">
        <p>Create</p>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
          ligula risus sed lacus nec, pellentesque at maecenas. Nisi, odio risus
          nunc cras.
        </span>
        <div className="createPage__container__items">
          <div className="createPage__container__items__firstPart">
            {homeBrowseCategoryFakeData.map(({ path, img, name }) => (
              <div
                key={path}
                onClick={() => history.push(`${pathname + path}`)}
              >
                <img src={`${img}`} alt={`${path}`} />
                <p>{name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Create;
