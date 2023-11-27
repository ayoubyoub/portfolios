import React from "react";
import ActiveSection from "../activeSection";
const Contact = ({ children, animationIn, animationOut }: any) => {
  return (
    <div
      className={ActiveSection("contacts", animationIn, animationOut)}
      id="contacts"
    >
      <div className="card-wrap">{children}</div>
    </div>
  );
};
export default Contact;
