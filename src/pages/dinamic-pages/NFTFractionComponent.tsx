import { useEffect } from "react";

import { useDispatch } from "react-redux";
import { useParams } from "react-router";

import NFTFraction from "../../components/NFTDetail/NFTFractionContent";
import { fetchFractionDetail } from "../../redux/features/fraction/fractionSlice";

type FractionParams = {
  tokenAddress: string;
  tokenId: string;
};

const NFTFractionComponent = () => {
  let params = useParams<FractionParams>();
  let tokenId = params.tokenId;
  const dispatch = useDispatch<any>();

  useEffect(() => {
    dispatch(fetchFractionDetail(tokenId));
  }, [dispatch, tokenId]);

  return (
    <div className="nft__detail__container">
      <NFTFraction tokenId={tokenId} />
    </div>
  );
};
export default NFTFractionComponent;
