import { useState } from "react";

import {
  CartesianGrid,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { v4 as uuid_v4 } from "uuid";

import { ReactComponent as Exclude } from "../../assets/NFTDetail/Exclude.svg";
import { ReactComponent as NoDataDisplay } from "../../assets/NFTDetail/NoDataDisplay.svg";
import { defaultOwnerAddress, DEFAULT_OWNER } from "../../utils/variable";

import { TableFakeData } from "./NFTtableFakeData";

type contentData = {
  id: number;
  title: string;
  active: boolean;
};
const NFTDetailPriceHistory = () => {
  const tokenTransferString: any = localStorage.getItem("transfer");
  const tokenTransfer: any = JSON.parse(tokenTransferString);
  const tradesString: any = localStorage.getItem("trades");
  const trades: any = JSON.parse(tradesString);
  const salesStr: any = localStorage.getItem("sales");
  const sels = JSON.parse(salesStr);

  const [ispiceHistory, setIsPricehistory] = useState(1);
  const [content, setContent] = useState<contentData[]>([
    {
      id: 1,
      title: "Price history",
      active: true,
    },
    { id: 2, title: "Item activity", active: false },
  ]);

  const handleCheck = (item: contentData) => {
    const contentClone: contentData[] = content;
    contentClone.map((i) => (i.active = false));
    item.active = true;
    setContent(contentClone);
    setIsPricehistory(item.id);
  };
  console.log(tokenTransfer, "tokenTransfer");
  console.log(trades, "trades");
  // const data: any = [
  //   {
  //     uv: 0.3,
  //     pv: 0.2,
  //     name: "15/01/2020",
  //   },
  //   {
  //     uv: 0.5,
  //     pv: 0.5,
  //     name: "12/01/2020",
  //   },
  //   {
  //     uv: 1,
  //     pv: 1,
  //     name: "20/01/2020",
  //   },
  // ];
  // sels.forEach((item: any) => {
  //   data.push({
  //     uv: item?.amount / 1000000000000000000,
  //     name: item?.createdAt,
  //   });
  // });

  return (
    <div className="nftDetailPriceHistory">
      <div className="nftDetailPriceHistory--content">
        {content.map((item: any) => (
          <div
            onClick={() => handleCheck(item)}
            style={{
              borderBottom: item.active ? "1px solid #fff" : "none",
            }}
            key={uuid_v4()}
          >
            {item.title}
          </div>
        ))}
      </div>
      {ispiceHistory === 2 ? (
        tokenTransfer.length === 0 && trades.result.length === 0 ? (
          <div className="nftDetailPriceHistory--noDataDisplay">
            <NoDataDisplay />
          </div>
        ) : (
          <table className="nftDetailPriceHistory--table">
            <tr className="nftDetailPriceHistory--table--title">
              {TableFakeData.title.map((item) => (
                <th key={uuid_v4()}>{item}</th>
              ))}
            </tr>
            {tokenTransfer !== null &&
              tokenTransfer.map((item: any) => (
                <tr key={uuid_v4()}>
                  <td className="nftDetailPriceHistory--table--event">
                    Transfer
                  </td>
                  <td className="nftDetailPriceHistory--table--price">
                    ETH2.{item.price}
                  </td>
                  <td className="nftDetailPriceHistory--table--from">
                    {item.from_address === defaultOwnerAddress
                      ? DEFAULT_OWNER
                      : item.from_address.slice(0, 20) + "..."}
                  </td>
                  <td className="nftDetailPriceHistory--table--to">
                    {item.to_address?.slice(0, 20) + "..."}
                  </td>
                  <td className="nftDetailPriceHistory--table--date">
                    {item.block_timestamp} <Exclude />
                  </td>
                </tr>
              ))}
            {trades.result.map(({ item }: any) => {
              return (
                <tr key={uuid_v4()}>
                  <td className="nftDetailPriceHistory--table--event">
                    Transfer
                  </td>
                  <td className="nftDetailPriceHistory--table--price">
                    {item.price === defaultOwnerAddress
                      ? "Minted"
                      : `ETH ${item.price}`}
                  </td>
                  <td className="nftDetailPriceHistory--table--from">
                    {item.owner === defaultOwnerAddress
                      ? DEFAULT_OWNER
                      : item.owner.slice(0, 20) + "..."}
                  </td>
                  <td className="nftDetailPriceHistory--table--to">
                    {item.buyer_address}
                  </td>
                  <td className="nftDetailPriceHistory--table--date">
                    {item.block_timestamp} <Exclude />
                  </td>
                </tr>
              );
            })}
          </table>
        )
      ) : ispiceHistory === 1 ? (
        <div className="rechart">
          <LineChart
            width={1000}
            height={400}
            // data={data}
            margin={{ top: 5, right: 10, bottom: 5, left: 0 }}
          >
            <Line type="monotone" dataKey="uv" stroke="#B1DFF7" />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
          </LineChart>
        </div>
      ) : null}
    </div>
  );
};
export default NFTDetailPriceHistory;
