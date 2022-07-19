import { ReactComponent as AboutLootboxIcon } from "../assets/create/LootboxIcon.svg";
import AboutCategory from "../components/About Category/AboutCategory";
import { aboutCategoryFakeDataLootbox } from "../components/About Category/aboutCategoryFakeData";
import { actionsFakeDataLootbox } from "../components/About Category/actionFakeData";

const AboutLootbox = () => {
  return (
    <AboutCategory
      aboutCategoryData={aboutCategoryFakeDataLootbox}
      data={actionsFakeDataLootbox}
    >
      <AboutLootboxIcon />
    </AboutCategory>
  );
};

export default AboutLootbox;
