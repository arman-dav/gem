import { lazy } from "react";

import { v4 as uuid_v4 } from "uuid";

import { ReactComponent as ContentCreatorsIcon } from "../../assets/about/ContentCreatorsIcon.svg";
import { ReactComponent as NFTArtistsIcon } from "../../assets/about/NFTArtistsIcon.svg";
import { ReactComponent as NFTGameCreatorsIcon } from "../../assets/about/NFTGameCreatorsIcon.svg";
import { ReactComponent as SocialMediaInfluencersIcon } from "../../assets/about/SocialMediaInfluencersIcon.svg";

const AboutWhoIsItOneInfo = lazy(() => import("./AboutWhoIsItOneInfo"));

const AboutWhoIsIt = () => {
  return (
    <div className="whoIsIt">
      <div className="whoIsIt__content">
        <div className="whoIsIt__content__mainPart">
          <p className="whoIsIt__content__mainPart--title">Who is it for?</p>
          <div className="whoIsIt__content__mainPart__container">
            <div className="whoIsIt__content__mainPart__container--info">
              <AboutWhoIsItOneInfo
                key={uuid_v4()}
                info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas ligula risus sed lacus nec, pellentesque at maecenas. Nisi, odio risus nunc cras."
                name="Content Creators"
              >
                <ContentCreatorsIcon />
              </AboutWhoIsItOneInfo>
              <AboutWhoIsItOneInfo
                key={uuid_v4()}
                info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas ligula risus sed lacus nec, pellentesque at maecenas. Nisi, odio risus nunc cras."
                name="Social Media Influencers"
              >
                <SocialMediaInfluencersIcon />
              </AboutWhoIsItOneInfo>
              <AboutWhoIsItOneInfo
                key={uuid_v4()}
                info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas ligula risus sed lacus nec, pellentesque at maecenas. Nisi, odio risus nunc cras."
                name="NFT game creators"
              >
                <NFTGameCreatorsIcon />
              </AboutWhoIsItOneInfo>
              <AboutWhoIsItOneInfo
                key={uuid_v4()}
                info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas ligula risus sed lacus nec, pellentesque at maecenas. Nisi, odio risus nunc cras."
                name="NFT Artists"
              >
                <NFTArtistsIcon />
              </AboutWhoIsItOneInfo>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutWhoIsIt;
