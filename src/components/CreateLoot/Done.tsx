import { FC, useEffect } from "react";

import { ReactComponent as LinkChain } from "../../assets/done/copy.svg";
import { ReactComponent as DefBox } from "../../assets/done/defiBox.svg";
import { ReactComponent as FacebookIcon } from "../../assets/done/facebook.svg";
import { ReactComponent as TelegramIcon } from "../../assets/done/telegram.svg";
import { ReactComponent as TwitterIcon } from "../../assets/done/twitter.svg";

import { DoneProps } from "./model";

const Done: FC<DoneProps> = ({ closeModal }) => {
  useEffect(() => {
    const close = (e: any) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };
    window.addEventListener("keydown", close);
    return () => {
      window.removeEventListener("keydown", close);
    };
  }, [closeModal]);

  const handleCloseDoneModal = (e: any) => {
    if (e.target.className === "done__modal") {
      closeModal();
    }
  };
  return (
    <div className="done__modal" onClick={handleCloseDoneModal}>
      <div className="done">
        <div className="done__header">
          <span>Done!</span>
          <p>Great! You just created - Item Name</p>
        </div>
        <div className="done__imageSection">
          <DefBox />
        </div>
        <div className="done__share">
          <p>Share</p>
          <div>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
            >
              <FacebookIcon />
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noreferrer">
              <TwitterIcon />
            </a>
            <a href="https://telegram.org/" target="_blank" rel="noreferrer">
              <TelegramIcon />
            </a>
            <button>
              <LinkChain />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Done;
