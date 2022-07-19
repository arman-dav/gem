import { ReactComponent as DeFiPng } from "../../assets/details/defiPng.svg";
import DetailsSlider from "../GempoolDetails/DetailsSlider";
import GempoolDetailsInfoComp from "../GempoolDetails/GempoolDeatilsInfoComp";
import GempoolDetailsTableWithThreeColumn from "../GempoolDetails/GempoolDetailsTableWithThreeColumn";
import GempoolDetailsTableWithTwoColumn from "../GempoolDetails/GempoolDetailsTableWithTwoColumn";

import {
  cardCheckFirstTableData,
  cardCheckSecondTableData,
  detailsFakeDataCardCheck,
} from "./cardCheckFakeData";

const CardCheckDetails = () => {
  return (
    <div className="gempoolDetails">
      <div className="gempoolDetails__content">
        <div className="gempoolDetails__content__upperPart">
          <div className="gempoolDetails__content__upperPart__leftSection">
            <div className="gempoolDetails__content__upperPart__leftSection--imgDiv">
              <DeFiPng />
            </div>
            <DetailsSlider />
          </div>
          <GempoolDetailsInfoComp
            nft="NFT Loot"
            title="Land o Loot"
            secondBtn="Open"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas ligula risus sed lacus nec, pellentesque at maecenas. Nisi, odio risus nunc cras. Sollicitudin nulla orci vitae ut turpis vitae neque."
            details={{
              first: "staking price",
              second: "minimum stake time",
              third: "maximum stake time",
              fourth: "price increase factor",
              last: "maximum claims",
            }}
            detailsData={detailsFakeDataCardCheck}
          />
        </div>
        <GempoolDetailsTableWithTwoColumn
          data={cardCheckFirstTableData}
          title="Recent Opens"
        />
        <GempoolDetailsTableWithThreeColumn
          data={cardCheckSecondTableData}
          title="Minted Loot"
        />
      </div>
    </div>
  );
};

export default CardCheckDetails;
