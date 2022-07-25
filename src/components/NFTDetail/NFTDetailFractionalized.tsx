import { useCallback, useEffect, useMemo, useState } from "react";

import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useDispatch } from "react-redux";
import { v4 as uuid_v4 } from "uuid";

import { ReactComponent as FractionsLoader } from "../../assets/NFTDetail/fraction-loader.svg";
import { getPriceData } from "../../redux/features/priceCalculate/priceCalculate";
import { useAppSelector } from "../../redux/hook";

import FractionalizedTitles from "./FractionalizedTitles";
import { FractionalizedFakeData } from "./NFTDetailFractionalizedFakeData";
import NFTDetailFractionalizedPagination from "./NFTDetailFractionalizedPogination";
import SortedFractionArrComponent from "./SortedFractionArrComponent";

const NFTDetailFractionalized = () => {
  const { titles } = FractionalizedFakeData;
  const [page, setPage] = useState(0);
  const dispatch = useDispatch<any>();

  const fractionListing = useMemo(() => {
    const strFractionListing: any = localStorage.getItem("fractionListings");
    const fractionListings = JSON.parse(strFractionListing);
    return fractionListings;
  }, [localStorage.getItem("fractionListings")]);

  const { USD } = useAppSelector(({ CalculatePrice }) => ({
    USD: CalculatePrice.price.USD,
  }));

  useEffect(() => {
    dispatch(getPriceData());
  }, [dispatch, USD]);

  const handlePogination = useCallback(
    (_: React.ChangeEvent<unknown>, pages: number) => {
      setPage(pages - 1);
    },
    [page, setPage]
  );

  return (
    <>
      <div className="secondary-market-fraction">
        <h2 className="secondary-market-fraction">
          Secondary Market Fractions
        </h2>
      </div>
      <div className="Fractionalized_scroll__container">
        <div className="Fractionalized">
          <div className="Fractionalized--titles">
            {titles.map(({ id, img, title }) => (
              <FractionalizedTitles key={id} img={img} title={title} />
            ))}
          </div>
          <div className="Fractionalized--content">
            {!fractionListing?.length && !fractionListing ? (
              <FractionsLoader />
            ) : (
              fractionListing[page]?.map((item: any) => (
                <SortedFractionArrComponent
                  key={uuid_v4()}
                  USD={USD}
                  {...item}
                />
              ))
            )}
          </div>
        </div>
      </div>
      <NFTDetailFractionalizedPagination>
        <Stack spacing={2}>
          <Pagination
            count={fractionListing?.length}
            onChange={handlePogination}
            color="primary"
            variant="outlined"
          />
        </Stack>
      </NFTDetailFractionalizedPagination>
    </>
  );
};
export default NFTDetailFractionalized;
