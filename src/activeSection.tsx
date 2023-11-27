import { useContext } from "react";
import Context from "./context/context";
import useWindowSize from "./useWindowSize";
const ActiveSection = (active, animationIn, animationOut) => {
  const { nav }: any = useContext(Context);
  const { width } = useWindowSize();
  return `card-inner ${
    nav == active
      ? `animated active ${
          width > 1200 ? (animationIn ? animationIn : "fadeInLeft") : ""
        }`
      : width > 1200
      ? `animated hidden ${
          width > 1200 ? (animationOut ? animationOut : "fadeOutLeft") : ""
        }`
      : ""
  }`;
};
export default ActiveSection;
