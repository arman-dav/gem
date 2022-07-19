import { FC, useRef, useState } from "react";

import { ReactComponent as ArrowIcon } from "../../assets/details/arrow.svg";
import { ReactComponent as CopyIcon } from "../../assets/details/copy.svg";

import { GempoolDetailsTableWithThreeColumnProps } from "./model";

const GempoolDetailsTableWithThreeColumn: FC<GempoolDetailsTableWithThreeColumnProps> =
  ({ data, title }) => {
    const copyToClipboard = (text: string) => {
      alert(`text: ${text} was copied on clipboard`);
      navigator.clipboard?.writeText(text);
    };
    const claimRef = useRef<any>();

    const [isOpenTable, setIsOpenTable] = useState(false);

    const handleOpenTable = () => {
      setIsOpenTable(!isOpenTable);
    };
    return (
      <div className={!isOpenTable ? "table" : "tableOpen"}>
        <div className="table__title" onClick={handleOpenTable}>
          <p>{title}</p>
          <div
            className={
              isOpenTable
                ? "table__title--arrowIconClose"
                : "table__title--arrowIconOpen"
            }
          >
            <ArrowIcon />
          </div>
        </div>
        <div className={isOpenTable ? "table__content" : "table__contentOpen"}>
          <div className="table__content__headerPart">
            <p className="table__content__headerPart--firstColumn">
              Token Hash
            </p>
            <p className="table__content__headerPart--secondColumn">
              Numbering
            </p>
            <p className="table__content__headerPart--thirdColumn">
              Total Supply
            </p>
          </div>
          {data.map(({ id, second, third, first }) => (
            <div className="table__content__items" key={id} ref={claimRef}>
              <span>
                <p className="table__content__items--first">
                  {claimRef.current?.offsetWidth < 992 &&
                  claimRef.current?.offsetWidth >= 704
                    ? first.split("").slice(0, 15).join("") +
                      " ... " +
                      first
                        .split("")
                        .slice(first.length - 15, first.length)
                        .join("")
                    : claimRef.current?.offsetWidth < 704
                    ? first.split("").slice(0, 10).join("") +
                      " ... " +
                      first
                        .split("")
                        .slice(first.length - 10, first.length)
                        .join("")
                    : first.split("").slice(0, 22).join("") +
                      " ....... " +
                      first
                        .split("")
                        .slice(first.length - 21, first.length)
                        .join("")}
                </p>
                <CopyIcon onClick={() => copyToClipboard(first)} />
              </span>
              <p className="table__content__items--second">{second}</p>
              <p className="table__content__items--third">{third}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };

export default GempoolDetailsTableWithThreeColumn;
