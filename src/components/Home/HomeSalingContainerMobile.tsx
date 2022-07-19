import { useMemo, useState } from "react";

import { useMoralis } from "react-moralis";
import Slider from "react-slick";
import { v4 as uuid_v4 } from "uuid";

import { ReactComponent as Arrow } from "../../assets/home/Arrow.svg";
import { ReactComponent as Img } from "../../assets/home/noImgIcon.svg";
import TitleRoutingMobile from "../ReusableComponents/TitleRoutingMobile";

const HomeSalingContainerMObile = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <Arrow />,
    nextArrow: <Arrow />,
    responsive: [
      {
        breakpoint: 1182,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const { Moralis } = useMoralis();
  const [limitListing, setLimitListing] = useState([]);
  useMemo(() => {
    Moralis.Cloud.run("allListings", {
      sort: {
        field: "price",
        direction: "asc",
      },
      limit: {
        limit: 1,
        page: 3,
      },
    }).then((res) => setLimitListing(res));
  }, [Moralis.Cloud]);

  return (
    <div className="selling_mobile_container">
      <TitleRoutingMobile title="Top selling items" link="Explore" pathName="/">
        <div className="selling__mobile">
          <Slider {...settings}>
            <div className="selling__mobile__container" key={uuid_v4()}>
              <div className="selling__mobile__container--items">
                {limitListing.map(({ data }: any, i: number) => (
                  <div
                    className="selling__mobile__container--items--content"
                    key={uuid_v4()}
                  >
                    <div className="selling__mobile__container--items--content--img__container">
                      <div className="selling__mobile__container--items--content--img__container--number">
                        {i + 1}
                      </div>
                      <div className="selling__mobile__container--items--content--img__container--image">
                        {data?.imageUrl ? (
                          <img src={data.imageUrl} alt={`${i}`} />
                        ) : (
                          <Img />
                        )}
                      </div>
                    </div>
                    <div className="selling__mobile__container--items--content--description">
                      <div className="selling__mobile__container--items--content--description--text">
                        {data.description.length > 20
                          ? data.description.slice(0, 20) + "..."
                          : data.description}
                      </div>
                      <div className="selling__mobile__container--items--content--description--price">
                        {data.price} ETH
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Slider>
        </div>
      </TitleRoutingMobile>
    </div>
  );
};
export default HomeSalingContainerMObile;
