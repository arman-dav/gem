import HomeAnnounce from "./HomeAnnounce";
import HomeBrowse from "./HomeBrowse";
import HomeSliderMobile from "./HomeSliderMobile";
import HomeTopSelingItems from "./HomeTopSelingItems";

const Home = () => {
  return (
    <div className="home__container">
      <HomeAnnounce />
      <HomeSliderMobile />
      <HomeBrowse />
      {/* <HowDoesItWorks /> */}
      <HomeTopSelingItems />
      {/* <HomeSlickSlider /> */}
      {/* <HelpFull /> */}
      {/* <HomeFAQ /> */}
    </div>
  );
};

export default Home;
