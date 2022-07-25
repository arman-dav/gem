import { useMoralisQuery } from "react-moralis";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuid_v4 } from "uuid";

import { fetchFractions } from "../../redux/features/fraction/fractionSlice";
import TitleRouting from "../ReusableComponents/TitleRouting";
import TitleRoutingMobile from "../ReusableComponents/TitleRoutingMobile";

import HomeBrowseCategory from "./HomeBrowseCategory";

const HomeBrowse = () => {
  const qyerryDataGemToken = useMoralisQuery("Collection").data;
  const dispatch = useDispatch<any>();
  const fractions: any = useSelector((state: any) => state.fractionData.fractionList);
  
  
  if (process.env.REACT_APP_TYPE === "Collections") dispatch(fetchFractions(null));
 
 

  return (
    <div className="home__browse">
      <div className="home__browse__wrapper">
        <div className="home__browse__wrapper__imageCardBox__container">
          <div className="home__browse__wrapper__imageCardBox__container__wrapper">
            {window.innerWidth < 1200 ? (
              (process.env.REACT_APP_TYPE !== "Collections") ? 
              <TitleRoutingMobile  title={"Collection"}  link={"Explore"}  pathName={"/collection"}>
                {<div className="home__browse__wrapper__imageCardBox__container__wrapper__upperPart">
                    {qyerryDataGemToken.map(({ attributes }) => (
                      <HomeBrowseCategory attributes={attributes} key={uuid_v4()}/>
                    ))}
                  </div>}
              </TitleRoutingMobile> : 
              fractions && <TitleRoutingMobile  title={"Fractions"}  link={"Explore"}  pathName={"/fractions"}>
                {<div className="home__browse__wrapper__imageCardBox__container__wrapper__upperPart">
                    {fractions?.map(({ attributes }: any) => (
                      <HomeBrowseCategory attributes={attributes} key={uuid_v4()}/>
                    ))}
                  </div>}
              </TitleRoutingMobile>
            ) : (
              (process.env.REACT_APP_TYPE !== "Collections") ? 
              <>
                <TitleRouting  title={"Collection"}  link={"Explore"}  pathName={"/collection"}/>
                {<div className="home__browse__wrapper__imageCardBox__container__wrapper__upperPart">
                    {qyerryDataGemToken.map(({ attributes }) => (
                      <HomeBrowseCategory attributes={attributes} key={uuid_v4()}/>
                    ))}
                </div>}
              </>:
             ( 
                fractions && <>
                <TitleRouting  title={"Fractions"}  link={"Explore"}  pathName={"/fractions"}/>
                <div className="home__browse__wrapper__imageCardBox__container__wrapper__upperPart">
                    {fractions?.map(({ attributes } : any) => (
                      <HomeBrowseCategory attributes={attributes} key={uuid_v4()}/>
                    ))}
                </div>
              </>
             )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBrowse;
