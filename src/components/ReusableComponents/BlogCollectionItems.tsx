import { useEffect } from "react";

import { useDispatch } from "react-redux";
import { v4 as uuid_v4 } from "uuid";

import { getHandleBlog } from "../../redux/features/blog/blogSlice";
import { useAppSelector } from "../../redux/hook";
import history from "../../utils/history";

export interface IBlogType {
  title: string;
  feature_image: string;
}

const BlogCollectionsItems = () => {
  const dispatch = useDispatch<any>();

  const { blogData }: any = useAppSelector(({ blog }) => ({
    blogData: blog.data,
  }));

  useEffect(() => {
    dispatch(getHandleBlog());
  }, [dispatch]);

  return (
    <>
      {blogData.map(({ feature_image, title }: IBlogType) => (
        <div
          onClick={() => history.push("/blog")}
          className="Helpful__container--section--items"
          key={uuid_v4()}
        >
          <div className="Helpful__container--section--items--img">
            <img src={feature_image} alt="#" />
          </div>
          <div className="Helpful__container--section--items--description">
            {title}
          </div>
        </div>
      ))}
    </>
  );
};

export default BlogCollectionsItems;
