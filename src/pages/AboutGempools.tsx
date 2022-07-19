import { ReactComponent as GempoolLargeIcon } from "../assets/aboutCategory/gempool.svg";
import AboutCategory from "../components/About Category/AboutCategory";
import { aboutCategoryFakeDataGempool } from "../components/About Category/aboutCategoryFakeData";
import { actionsFakeDataGempools } from "../components/About Category/actionFakeData";

const AboutGempools = () => {
  return (
    <AboutCategory
      aboutCategoryData={aboutCategoryFakeDataGempool}
      data={actionsFakeDataGempools}
    >
      <GempoolLargeIcon />
    </AboutCategory>
  );
};

export default AboutGempools;
