import Slider from "react-slick";
import { v4 as uuid_v4 } from "uuid";

import { ReactComponent as HomeSlideBackgroundIcon } from "../../assets/home/homeSlideBackground.svg";
import { useAppSelector } from "../../redux/hook";

import HomeSliderCollectionCard from "./HomeSliderCollectionCard";

const HomeSlickSlider = () => {
  const { NFTData } = useAppSelector(({ marketplaceData }) => ({
    NFTData: marketplaceData.nftData,
  }));

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1182,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="homeSlickSlider">
      <div className="homeSlickSlider__wrapper">
        <HomeSlideBackgroundIcon />
        <div className="homeSlickSlider__wrapper--pinkFilter"></div>
        <Slider {...settings}>
          {NFTData !== null &&
            NFTData.map((item: any) => (
              <HomeSliderCollectionCard {...item} key={uuid_v4()} />
            ))}
        </Slider>
      </div>
    </div>
  );
};

export default HomeSlickSlider;
