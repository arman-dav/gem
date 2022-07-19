import { ReactComponent as TimeLuckLargeIcon } from "../assets/create/TimeLuck.svg";
import AboutCategory from "../components/About Category/AboutCategory";
import { aboutCategoryTimeLuck } from "../components/About Category/aboutCategoryFakeData";
import { actionsAboutFakeDataTimeLock } from "../components/About Category/actionFakeData";

const AboutTimeLuck = () => {
  return (
    <AboutCategory
      aboutCategoryData={aboutCategoryTimeLuck}
      data={actionsAboutFakeDataTimeLock}
    >
      <TimeLuckLargeIcon />
    </AboutCategory>
  );
};

export default AboutTimeLuck;
