import { useEffect } from "react";

import { useDispatch } from "react-redux";

import { getHandleBlog } from "../../redux/features/blog/blogSlice";
import { BlogState } from "../../redux/features/blog/model";
import { useAppSelector } from "../../redux/hook";

const BlogContainer = () => {
  const dispatch = useDispatch<any>();
  const { blogData }: any = useAppSelector(({ blog }) => ({
    blogData: blog.data,
  }));
  useEffect(() => {
    dispatch(getHandleBlog());
  }, [dispatch]);

  return (
    <div className="blog_container">
      {blogData.map((item: BlogState, i: number) => (
        <div key={i}>
          <div className="image">
            <div className="title">{item.title}</div>
            <img src={item.feature_image} alt="$" />
          </div>
          <div
            className="blog_container"
            dangerouslySetInnerHTML={{ __html: item.html }}
          />
        </div>
      ))}
    </div>
  );
};
export default BlogContainer;
