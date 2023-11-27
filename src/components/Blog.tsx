import React from "react";
import ActiveSection from "../activeSection";
const Blog = ({ children, animationIn, animationOut }: any) => {
  return (
    <div>
      <div
        className={ActiveSection("blog", animationIn, animationOut)}
        id="blog"
      >
        <div className="card-wrap">{children}</div>
      </div>
    </div>
  );
};
export default Blog;
