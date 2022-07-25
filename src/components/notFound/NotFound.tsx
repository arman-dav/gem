import { useNavigate } from "react-router";

import { ReactComponent as NotFoundIcon } from "../../assets/notFound/error.svg";
import { ReactComponent as GoBackIcon } from "../../assets/notFound/goBackIcon.svg";
import { clientConfig } from '../../utils/config';

const config = process.env.CLIENT
    ? clientConfig[process.env.CLIENT]
    : clientConfig['NextGem'];

const NotFound = () => {
  const navigate = useNavigate();

  const randomTitleIdx = Math.floor(Math.random() * config.page404.titles.length) | 0
  const randomDescriptionIdx =
      Math.floor(Math.random() * config.page404.descriptions.length) | 0;
  const title = config.page404.titles[randomTitleIdx];
  const description = config.page404.descriptions[randomDescriptionIdx];

  return (
      <div className='notFound'>
          <div className='notFound__container'>
              <div className='notFound__container__content'>
                  <p>{title}</p>
                  <span>
                      {description}
                  </span>
                  <div>
                      <GoBackIcon onClick={() => navigate(-1)} />
                      <span onClick={() => navigate('/')}>Home Page</span>
                  </div>
              </div>
              <div>
                  <NotFoundIcon />
              </div>
          </div>
      </div>
  );
};

export default NotFound;
