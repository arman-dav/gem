import { useEffect, useRef } from "react";

import { useDispatch } from "react-redux";
import { v4 as uuid_v4 } from "uuid";

import { handleFaqData } from "../../redux/features/faq/faqSlice";
import { useAppSelector } from "../../redux/hook";

import HomeFAQItem from "./HomeFAQItem";

interface IDataPostType {
  title: string;
  excerpt: string;
}

const HomeFAQ = () => {
  const faqRef = useRef<any>();
  const dispatch = useDispatch<any>();
  const { data } = useAppSelector(({ faq }) => ({
    data: faq.faqData,
  }));

  useEffect(() => {
    dispatch(handleFaqData());
  }, [dispatch]);

  return (
    <div className="homeFAQ" ref={faqRef}>
      <div className="homeFAQ__faqSection">
        <div className="homeFAQ__faqSection__container">
          <div className="homeFAQ__faqSection__container__data">
            <p>FAQ</p>
            {data.posts.map(({ title, excerpt }: IDataPostType) => (
              <HomeFAQItem
                answer={excerpt}
                question={title}
                key={uuid_v4()}
                className="homeFAQ__faqSection"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeFAQ;
