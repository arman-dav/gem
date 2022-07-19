import { useState } from "react";

// type stateType = {
//   setFilterType: () => void;
//   FilterType: stateObjType;
// };
// type stateObjType = {

// };

const CheckedItems = ({ filterType, setFilterType }: any) => {
  console.log(filterType, "FilterType");

  // const [isCheck, setCheck] = useState(false);
  // const handleCheck = () => {
  //   const clone = [...filterType];
  //   if (isCheck) {
  //     clone.push({
  //       field: "listing.closed",
  //       operator: "!=",
  //       value: true,
  //     });
  //   } else {
  //     clone.slice(0, 1);
  //   }
  //   setFilterType(clone);
  // };
  return (
    <div className="allItems">
      <div
        className="allItems__check"
        // onClick={async () => {
        //   await setCheck((b) => !b);
        //   handleCheck();
        // }}
        // style={{ background: isCheck ? "#fff" : "" }}
      ></div>
      <div className="allItems__title">Show closed items</div>
    </div>
  );
};
export default CheckedItems;
