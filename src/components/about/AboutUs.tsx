import { useState } from "react";

import { ReactComponent as AboutIcon } from "../../assets/about/AboutIcon.svg";
import AboutUsIcon from "../../assets/about/AboutUsIcon.png";

const AboutUs = () => {
  const [showMore, setShowMore] = useState<boolean>(false);

  return (
    <div className="aboutUs">
      <div className="aboutUs__upperPart">
        <div className="aboutUs__upperPart__content">
          <div className="aboutUs__upperPart__content__infoPart">
            <p className="aboutUs__upperPart__content__infoPart--title">
              about
            </p>
            <p className="aboutUs__upperPart__content__infoPart--info">
              NextGem is a multi-network, multi-tenant platform that enables
              anyone to easily mint NFTs and conduct NFT token sales, including
              NFT Minting/Staking pools, lootboxes, raffles, and other minting
              methodologies. The platform handles all details of publishing NFTs
              using a set of interoperating services which support the NFT's
              backbone's functionality.
            </p>
            <h3 className="aboutUs__upperPart__content__infoPart--context__tittle">
              Why should you?
            </h3>
            <div className="aboutUs__upperPart__content__infoPart--context__text">
              Because these are super fun and enjoyable ways for your customers
              to interact with your art.
            </div>
          </div>
          <div className="aboutUs__upperPart__content__photo">
            <AboutIcon />
          </div>
        </div>
      </div>
      <div className="aboutUs__mainInfo">
        <div className="aboutUs__mainInfo__content">
          <img src={AboutUsIcon} alt="" />
          <div className="aboutUs__mainInfo__content__textPart">
            <p className="aboutUs__mainInfo__content__textPart--title">
              Plug-and-Play NFT Experiences
            </p>
            {window.innerWidth > 770 ? (
              <>
                <p className="aboutUs__mainInfo__content__textPart--text">
                  Build feature-rich NFT projects without code using the Genesis
                  Gems platform. Off-the-shelf infrastructure allows teams to
                  rapidly launch new projects and iterate on existing ones.
                  Offering more than static jpg uploads, Genesis Gems is
                  becoming the choice for marketers and NFT publishers across
                  Web 3.0.
                </p>
                {/* <p className="aboutUs__mainInfo__content__textPart--text">
                  Aliquam odio enim hendrerit neque eget. Id nunc consectetur
                  enim lectus orci quisque sed. Massa ornare rutrum aliquet
                  suspendisse tempor blandit nec. Tristique nunc, eget molestie
                  tortor viverra aliquam. Nullam ac lectus interdum sapien non
                  non ac sagittis pellentesque. Malesuada faucibus vestibulum.
                </p> */}
              </>
            ) : (
              <>
                <p className="aboutUs__mainInfo__content__textPart--text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Feugiat nulla scelerisque orci, enim morbi tellus mauris. Nam
                  sit tincidunt at sagittis sem enim ut nunc maecenas. Elit
                  morbi libero sem quam porttitor platea nunc eget. Morbi in
                  imperdiet amet at et. Facilisis et, nisl, mattis tellus sapien
                  sit placerat pulvinar fermentum.
                </p>
                {showMore ? (
                  <p className="aboutUs__mainInfo__content__textPart--text">
                    Aliquam odio enim hendrerit neque eget. Id nunc consectetur
                    enim lectus orci quisque sed. Massa ornare rutrum aliquet
                    suspendisse tempor blandit nec. Tristique nunc, eget
                    molestie tortor viverra aliquam. Nullam ac lectus interdum
                    sapien non non ac sagittis pellentesque. Malesuada faucibus
                    vestibulum.
                  </p>
                ) : null}
              </>
            )}
            <span onClick={() => setShowMore(!showMore)}>
              {showMore ? "show less" : "read more"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
