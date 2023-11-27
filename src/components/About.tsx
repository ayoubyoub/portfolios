import React from "react";
import ActiveSection from "../activeSection";

const About = ({ children, animationIn, animationOut }: any) => {
  return (
    <div
      className={ActiveSection("about", animationIn, animationOut)}
      id="about"
    >
      <div className="card-wrap">{children}</div>
    </div>
  );
};
export default About;
