import { FC, useCallback, useState } from "react";

import { CreateBtnProps } from "../create/model";

const CreateLootButton: FC<CreateBtnProps> = ({ text, onClick }) => {
  const [isAnimated, setIsAnimated] = useState<boolean>(false);
  const [displayWidth, setDisplayWidth] = useState(window.innerWidth);

  const [liCount, setLiCount] = useState<number>(60);
  const [liCountTablet, setLiCountTablet] = useState<number>(20);
  const [liCountMobile, setLiCountMobile] = useState<number>(12);

  window.addEventListener(
    "resize",
    () => setDisplayWidth(window.innerWidth),
    false
  );

  const onDragStopHandler = useCallback(
    (e: any) => {
      setIsAnimated(!isAnimated);
      if (liCount === 60) {
        setTimeout(() => {
          setLiCount(45);
        }, 200);
        setTimeout(() => {
          setLiCount(30);
        }, 350);
        setTimeout(() => {
          setLiCount(20);
        }, 500);
        setTimeout(() => {
          setLiCount(5);
        }, 600);
        setTimeout(() => {
          onClick(e);
        }, 700);
      } else {
        setLiCount(60);
      }
    },
    [isAnimated, liCount, onClick]
  );
  const onDragStopHandlerTablet = useCallback(
    (e: any) => {
      setIsAnimated(!isAnimated);
      if (liCountTablet === 20) {
        setTimeout(() => {
          setLiCountTablet(10);
        }, 200);
        setTimeout(() => {
          setLiCountTablet(0);
        }, 350);
        setTimeout(() => {
          onClick(e);
        }, 500);
      } else {
        setLiCountTablet(20);
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
    <div className="createLootButton">
      <button
        onClick={
          displayWidth <= 610
            ? onDragStopHandlerMobile
            : displayWidth <= 880
            ? onDragStopHandlerTablet
            : onDragStopHandler
        }
        className={
          displayWidth <= 610 && isAnimated
            ? "createLootButton__button--animated--mobile"
            : displayWidth > 610 && displayWidth <= 880 && isAnimated
            ? "createLootButton__button--animated--tablet"
            : isAnimated
            ? "createLootButton__button--animated"
            : "createLootButton__button"
        }
      >
        {text}
      </button>
      <ul className="arrow-parent">
        {[
          ...Array(
            displayWidth <= 610
              ? liCountMobile
              : displayWidth <= 880 && displayWidth > 610
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

export default CreateLootButton;
