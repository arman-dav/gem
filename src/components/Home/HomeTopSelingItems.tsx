import { useEffect, useState } from "react";

import { useMoralis } from "react-moralis";
import { v4 as uuid_v4 } from "uuid";

import { ReactComponent as Img } from "../../assets/home/noImgIcon.svg";
import TitleRouting from "../ReusableComponents/TitleRouting";

import HomeSalingContainerMObile from "./HomeSalingContainerMobile";
//import { sellingFakeData } from "./HomeTopSelingItemsFakeData";

const HomeTopSelingItems = () => {
  const { Moralis } = useMoralis();
  const [limitListing, setLimitListing] = useState([]);
  useEffect(() => {
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

  console.log(limitListing, "limitListing");

  return (
    <>
      <HomeSalingContainerMObile />
      <div className="Selling__container">
        <TitleRouting
          title="Top selling items"
          pathName="/"
          link="See All"
          className="TopSelling"
        />
        <div className="Selling__container--HomeTopSelingItems">
          {limitListing.map(({ data }: any, i) => (
            <div
              className="Selling__container--HomeTopSelingItems--items__container"
              key={uuid_v4()}
            >
              <div className="Selling__container--HomeTopSelingItems--items__container--img__number">
                <div className="Selling__container--HomeTopSelingItems--items__container--img__number--item__number">
                  {i + 1}
                </div>
                <div className="Selling__container--HomeTopSelingItems--items__container--img__number--item__image">
                  {data?.imageUrl === undefined ? (
                    <Img />
                  ) : (
                    <img src={data?.imageUrl} alt="#" />
                  )}
                </div>
              </div>
              <div className="Selling__container--HomeTopSelingItems--items__container--description__price">
                <div className="Selling__container--HomeTopSelingItems--items__container--description__price--description">
                  {data?.description.length > 23
                    ? data?.description.slice(0, 23) + "..."
                    : data?.description}
                </div>
                <div className="Selling__container--HomeTopSelingItems--items__container--description__price--price">
                  {data?.price}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default HomeTopSelingItems;
