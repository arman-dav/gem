import { ReactComponent as DeFiPng } from "../../assets/details/defiPng.svg";

import GempoolDetailsInfoComp from "./GempoolDeatilsInfoComp";
import {
  detailsFakeDataGempool,
  gempoolFirstTableData,
  gempoolSecondTableData,
} from "./gempoolDetails.data";
import GempoolDetailsTableWithThreeColumn from "./GempoolDetailsTableWithThreeColumn";
import GempoolDetailsTableWithTwoColumn from "./GempoolDetailsTableWithTwoColumn";

const GempoolDetails = () => {
  return (
    <div className="gempoolDetails">
      <div className="gempoolDetails__content">
        <div className="gempoolDetails__content__upperPart">
          <div className="gempoolDetails__content__upperPart__leftSection">
            <div className="gempoolDetails__content__upperPart__leftSection--imgDiv">
              <DeFiPng />
            </div>
          </div>
          <GempoolDetailsInfoComp
            nft="NFT Staking Pool"
            title="Amethyst Supreme"
            secondBtn="stake"
            description=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
          ligula risus sed lacus nec, pellentesque at maecenas. Nisi, odio risus
          nunc cras. Sollicitudin nulla orci vitae ut turpis vitae neque."
            details={{
              first: "staking price",
              second: "minimum stake time",
              third: "maximum stake time",
              fourth: "price increase factor",
              last: "maximum claims",
            }}
            detailsData={detailsFakeDataGempool}
          />
        </div>
        <GempoolDetailsTableWithTwoColumn
          data={gempoolFirstTableData}
          title="open claims"
        />
        <GempoolDetailsTableWithThreeColumn
          data={gempoolSecondTableData}
          title="Minted NFTs"
        />
      </div>
    </div>
  );
};

export default GempoolDetails;
