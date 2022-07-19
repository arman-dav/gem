import Slider from "react-slick";

import BlogCollectionsItems from "../ReusableComponents/BlogCollectionItems";
import TitleRouting from "../ReusableComponents/TitleRouting";
import TitleRoutingMobile from "../ReusableComponents/TitleRoutingMobile";

const HelpFull = () => {
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
          slidesToScroll: 1,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 812,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="Helpful__container">
        <TitleRouting
          title="This might be helpful"
          pathName="/blogCollections"
          link="More"
          className="Helpful"
        />
        <div className="Helpful__container--section desktop">
          <BlogCollectionsItems  />
        </div>
        <div className="Helpful__container--section mobile">
          <TitleRoutingMobile title="This might be helpful" pathName="/">
            <Slider {...settings}>
              { <BlogCollectionsItems />
                }
            </Slider>
          </TitleRoutingMobile>
        </div>
      </div>
    </>
  );
};

export default HelpFull;
