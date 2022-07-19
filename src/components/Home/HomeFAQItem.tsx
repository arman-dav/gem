import { FC, useState } from "react";

import { ReactComponent as CyrcleIcon } from "../../assets/faq/cyrcle.svg";
import { ReactComponent as EmptyCyrcleIcon } from "../../assets/faq/emptyCyrcle.svg";
import { ReactComponent as FAQquestionIcon } from "../../assets/faq/faqQuestion.svg";

import { HomeFAQItemProps } from "./model";
const HomeFAQItem: FC<HomeFAQItemProps> = ({ question, className, answer }) => {
  const [openAnswer, setOpenAnswer] = useState<boolean>(false);

  return (
    <div>
      <div
        className={
          openAnswer
            ? `${className}__container__data--questionDiv`
            : `${className}__container__data--questionDiv--hide`
        }
        onClick={() => setOpenAnswer(!openAnswer)}
      >
        <div className={`${className}__container__data--questionDiv--question`}>
          <span>
            <FAQquestionIcon />
            <p>{question}</p>
          </span>

          <div
            className={`${className}__container__data--questionDiv--iconDiv`}
          >
            {openAnswer ? <EmptyCyrcleIcon /> : <CyrcleIcon />}
          </div>
        </div>
        {answer ? (
          <div
            className={
              openAnswer
                ? `${className}__container__data--questionDiv--answerDiv`
                : `${className}__container__data--questionDiv--answerDiv--hide`
            }
          >
            <p
              className={`${className}__container__data--questionDiv--answerDiv--answer`}
            >
              {answer}
            </p>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default HomeFAQItem;
