import {ReactComponent as AboutRafflesIcon} from '../assets/create/RaffleIcon.svg'
import AboutCategory from "../components/About Category/AboutCategory";
import { aboutCategoryFakeDataRaffles } from "../components/About Category/aboutCategoryFakeData";
import { actionsFakeDataRaffles } from "../components/About Category/actionFakeData";


const AboutRaffles = () => {
  return (
    <AboutCategory
      aboutCategoryData={aboutCategoryFakeDataRaffles}
      data={actionsFakeDataRaffles}
    >
      <AboutRafflesIcon />
    </AboutCategory>
  );
};

export default AboutRaffles;
