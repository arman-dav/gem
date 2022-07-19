import { FC, useCallback, useEffect, useState } from "react";

import { CreateBtnProps } from "./model";

const CreateBtn: FC<CreateBtnProps> = ({ text, onClick }) => {
  const [isAnimated, setIsAnimated] = useState(false);

  const [displayWidth]: any = useState(window.matchMedia("(max-width: 700px)"));

  const [liCount, setLiCount] = useState(40);
  const [liCountTablet, setLiCountTablet] = useState(19);
  const [liCountMobile, setLiCountMobile] = useState(13);

  useEffect(() => {
    if (liCount === 7) {
      setTimeout(() => {
        setLiCount(40);
        setIsAnimated(false);
      }, 500);
    }
    if (liCountTablet === 2) {
      setTimeout(() => {
        setLiCount(19);
        setIsAnimated(false);
      }, 500);
    }
  }, [liCount, displayWidth, liCountTablet]);

  const onDragStopHandler = useCallback(
    (e: any) => {
      setIsAnimated(!isAnimated);
      if (liCount === 40) {
        setTimeout(() => {
          setLiCount(30);
        }, 200);
        setTimeout(() => {
          setLiCount(17);
        }, 350);
        setTimeout(() => {
          setLiCount(7);
        }, 500);
        setTimeout(() => {
          onClick(e);
        }, 600);
      } else {
        setLiCount(40);
      }
    },
    [isAnimated, liCount, onClick]
  );
  const onDragStopHandlerTablet = useCallback(
    (e: any) => {
      setIsAnimated(!isAnimated);
      if (liCountTablet === 19) {
        setTimeout(() => {
          setLiCountTablet(10);
        }, 200);
        setTimeout(() => {
          setLiCountTablet(2);
        }, 350);
        setTimeout(() => {
          onClick(e);
        }, 500);
      } else {
        setLiCountTablet(19);
      }
    },
    [isAnimated, liCountTablet, onClick]
  );
  const onDragStopHandlerMobile = useCallback(
    (e: any) => {
      setIsAnimated(!isAnimated);
      setTimeout(() => {
        setLiCountMobile(5);
      }, 200);
      setTimeout(() => {
        setLiCountMobile(0);
      }, 350);

      setTimeout(() => {
        onClick(e);
      }, 500);
    },
    [isAnimated, onClick]
  );
  return (
    <div className="createButton">
      <button
        onClick={
          displayWidth <= 425
            ? onDragStopHandlerMobile
            : displayWidth <= 768 && displayWidth > 425
            ? onDragStopHandlerTablet
            : onDragStopHandler
        }
        className={
          isAnimated && displayWidth <= 425
            ? "createButton__button--animated--mobile"
            : isAnimated && displayWidth <= 768 && displayWidth > 425
            ? "createButton__button--animated--tablet"
            : isAnimated
            ? "createButton__button--animated"
            : "createButton__button"
        }
      >
        {text}
      </button>
      <ul className="arrow-parent">
        {[
          ...Array(
            displayWidth <= 425
              ? liCountMobile
              : displayWidth <= 768 && displayWidth > 425
              ? liCountTablet
              : liCount
          ),
        ].map((_, i) => (
          <li key={i} className="arrow-ele"></li>
        ))}
      </ul>
    </div>
  );
};

export default CreateBtn;
