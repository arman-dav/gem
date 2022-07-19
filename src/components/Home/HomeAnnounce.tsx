import { v4 as uuid_v4 } from "uuid";

import { useAppSelector } from "../../redux/hook";

import BackgroundVideo from "./BackgroundVideo";

const HomeAnnounce = () => {
  const {
    NFTAnimation,
    // FirstNFTAnimation
  } = useAppSelector(({ marketplaceData }) => ({
    NFTAnimation: marketplaceData.nftDataAnimation,
    //FirstNFTAnimation: marketplaceData.nftData,
  }));

  const animatedEithtyDiv: string[] = [
    "animatedDiv",
    "animatedSecondDiv",
    "animatedThirdDiv",
    "animatedFourDiv",
    "animatedFiftyDiv",
    "animatedSixtyDiv",
    "animatedSeventyDiv",
    "animatedEithtyDiv",
  ];

  return (
    <div className="home__announceContainer">
      <BackgroundVideo />
      <div className="home__announce__container">
        <div className="home__announce">
          {/* <p> NFT 1.0: static jpegs</p> */}
          <h1>
            <span className="title">
              Genesis Gems is revolutionizing the trade of gemstones,{" "}
            </span>
            <span className="subtitle">
              historically one of the most resilient and enduring asset classes,
              by ushering precious gems into the digital age.
            </span>
          </h1>
        </div>
        <span>
          {/* {FirstNFTAnimation !== null && (
                      <img src={FirstNFTAnimation[0]?.image} alt='#' />
                  )} */}
          <div className="home__announce__container__aaa"></div>
          {NFTAnimation.length !== 0 &&
            NFTAnimation.map((item: any, i: number) => (
              <div
                key={uuid_v4()}
                className={`home__announce__container__${animatedEithtyDiv[i]}`}
              >
                {item.map((content: any) => (
                  <img src={content.image} alt={`${i}`} />
                ))}
              </div>
            ))}
        </span>
      </div>
    </div>
  );
};

export default HomeAnnounce;
