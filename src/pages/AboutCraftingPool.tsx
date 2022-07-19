import { ReactComponent as CraftingLargeIcon } from "../assets/create/Crafting.svg";
import AboutCategory from "../components/About Category/AboutCategory";
import { aboutCategoryFakeDataCraftingPool } from "../components/About Category/aboutCategoryFakeData";
import { actionsAboutFakeDataCraftingPool } from "../components/About Category/actionFakeData";

const AboutCraftingPool = () => {
  return (
    <AboutCategory
      aboutCategoryData={aboutCategoryFakeDataCraftingPool}
      data={actionsAboutFakeDataCraftingPool}
    >
      <CraftingLargeIcon />
    </AboutCategory>
  );
};

export default AboutCraftingPool;
