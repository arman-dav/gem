import { ReactComponent as AboutAttributedNFTIcon } from "../assets/create/AttributedNFTIcon.svg";
import AboutCategory from "../components/About Category/AboutCategory";
import { aboutCategoryFakeDataAttributedNFT } from "../components/About Category/aboutCategoryFakeData";
import { actionsFakeDataAttributedNFT } from "../components/About Category/actionFakeData";

const AboutAttributedNFT = () => {
  return (
    <AboutCategory
      aboutCategoryData={aboutCategoryFakeDataAttributedNFT}
      data={actionsFakeDataAttributedNFT}
    >
      <AboutAttributedNFTIcon />
    </AboutCategory>
  );
};

export default AboutAttributedNFT;
