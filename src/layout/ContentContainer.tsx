import React, { useContext } from "react";
import BlogPostNew, { BlogPostClassic } from "../components/BlogPost";
import Context from "../context/context";
const ContentContainer = ({ children, blog }: any) => {
  const { nav }: any = useContext(Context);
  return (
    <div>
      {nav === "blog-post" ? (
        blog === "classic" ? (
          <BlogPostClassic />
        ) : (
          <BlogPostNew />
        )
      ) : (
        <div>{children}</div>
      )}
    </div>
  );
};
export default ContentContainer;
