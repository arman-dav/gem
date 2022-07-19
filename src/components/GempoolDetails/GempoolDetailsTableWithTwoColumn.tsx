import { FC, useRef, useState } from "react";

import { ReactComponent as ArrowIcon } from "../../assets/details/arrow.svg";
import { ReactComponent as CopyIcon } from "../../assets/details/copy.svg";

import { GempoolDetailsTableWithTwoColumnProps } from "./model";

const GempoolDetailsTableWithTwoColumn: FC<GempoolDetailsTableWithTwoColumnProps> =
  ({ data, title }) => {
    const copyToClipboard = (text: string) => {
      alert(`text: --> ${text} <-- was copied on clipboard`);
      navigator.clipboard?.writeText(text);
    };

    const claimRef = useRef<any>();

    const [isOpenClaims, setIsOpenClaims] = useState(false);

    const handleOpenClaims = () => {
      setIsOpenClaims(!isOpenClaims);
    };

    return (
      <div className={!isOpenClaims ? "claims" : "claimsOpen"}>
        <div className="claims__openClaims" onClick={handleOpenClaims}>
          <p>{title}</p>
          <div
            className={
              isOpenClaims
                ? "claims__openClaims--arrowIconClose"
                : "claims__openClaims--arrowIconOpen"
            }
          >
            <ArrowIcon />
          </div>
        </div>

        <div className={isOpenClaims ? "claims__table" : "claims__tableOpen"}>
          <div className="claims__table--headerPart">
            <p>Token Hash</p>
            <p>address</p>
          </div>
          {data.map(({ first, id, second }) => (
            <div className="claims__table--items" key={id} ref={claimRef}>
              <span>
                <p>
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
              <span>
                <p>
                  {claimRef.current?.offsetWidth < 992 &&
                  claimRef.current?.offsetWidth >= 704
                    ? second.split("").slice(0, 15).join("") +
                      " ... " +
                      second
                        .split("")
                        .slice(second.length - 15, second.length)
                        .join("")
                    : claimRef.current?.offsetWidth < 704
                    ? second.split("").slice(0, 10).join("") +
                      " ... " +
                      second
                        .split("")
                        .slice(second.length - 10, second.length)
                        .join("")
                    : second.split("").slice(0, 22).join("") +
                      " ....... " +
                      second
                        .split("")
                        .slice(second.length - 21, second.length)
                        .join("")}
                </p>
                <CopyIcon onClick={() => copyToClipboard(second)} />
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  };

export default GempoolDetailsTableWithTwoColumn;
