import {
  MoralisContextValue,
  useMoralis,
  useMoralisQuery,
} from "react-moralis";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router";
import { v4 as uuid_v4 } from "uuid";

import { getFilterCategory } from "../../redux/features/dashboard/dashboardSlice";

const CollectionFilter = () => {
  const dispatch = useDispatch();
  const category: any = useMoralisQuery("Category");

  const { Moralis }: MoralisContextValue = useMoralis();
  const allCollection = useMoralisQuery("Collection");
  const { pathname } = useLocation();

  const MoralisCategoryGetCollection = async (_: any, index: number) => {
    const Collection = Moralis.Object.extend("Category");
    const query = new Moralis.Query(Collection);
    const results = await query.find();

    let gemQuery: any = await results[index].relation("collections");
    gemQuery = await gemQuery.query();
    gemQuery.find().then((res: any) => dispatch(getFilterCategory(res)));
  };

  return (
    <div
      className={`collection_fillter collection_fillter_fractions ${
        pathname === "/fractions" ? "collection_fillter_fractions" : ""
      }`}
    >
      <h2 className="collection_fillter--title">
        {pathname === "/fractions" ? "Fractions" : "Collections"}
      </h2>
      <div className="collection_fillter--items_container">
      </div>
    </div>
  );
};
export default CollectionFilter;
