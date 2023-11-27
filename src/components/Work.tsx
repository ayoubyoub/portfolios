import React from "react";
import ActiveSection from "../activeSection";
const Work = ({ children, animationIn, animationOut }: any) => {
  return (
    <div
      className={ActiveSection("works", animationIn, animationOut)}
      id="works"
    >
      <div className="card-wrap">{children}</div>
    </div>
  );
};
export default Work;
