import React from "react";
import ActiveSection from "../activeSection";
const Resume = ({ children, animationIn, animationOut }: any) => {
  return (
    <div
      className={ActiveSection("resume", animationIn, animationOut)}
      id="resume"
    >
      <div className="card-wrap">{children}</div>
    </div>
  );
};
export default Resume;
