import { ReactComponent as AboutCardPackIcon } from "../assets/create/CardPackIcon.svg";
import AboutCategory from "../components/About Category/AboutCategory";
import { aboutCategoryFakeDataCardPack } from "../components/About Category/aboutCategoryFakeData";
import { actionsFakeDataCardPack } from "../components/About Category/actionFakeData";

const AboutCardPack = () => {
  return (
    <AboutCategory
      aboutCategoryData={aboutCategoryFakeDataCardPack}
      data={actionsFakeDataCardPack}
    >
      <AboutCardPackIcon />
    </AboutCategory>
  );
};

export default AboutCardPack;
