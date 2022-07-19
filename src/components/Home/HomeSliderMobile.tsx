import React from "react";

import Slider from "react-slick";
import { v4 as uuid_v4 } from "uuid";

import { useAppSelector } from "../../redux/hook";

const HomeSliderMobile = () => {
  const { NFTData } = useAppSelector(({ marketplaceData }) => ({
    NFTData: marketplaceData.nftData,
  }));
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
    responsive: [
      {
        breakpoint: 500,
        settings: {
          slidesToScroll: 3,
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 350,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  type imageType = {
    image: string;
  };
  return (
    <div className="HomeSliderMobile__container">
      <Slider {...settings}>
        {NFTData !== null &&
          NFTData.map(({ image }: imageType) => (
            <div
              className="HomeSliderMobile__container--content"
              key={uuid_v4()}
            >
              <img src={image} alt="#" />
            </div>
          ))}
      </Slider>
    </div>
  );
};
export default HomeSliderMobile;
