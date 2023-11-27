import React, { useEffect } from "react";
import ContentModal from "../components/popup/ContentModal";
import ImageGallery from "../components/popup/ImageGallery";
import ImageView from "../components/popup/ImageView";
import VideoPopup from "../components/popup/VideoPopup";
import { createSkillsDot, dotResize } from "../utils";
import Background from "./Background";
import ContentSidebar from "./ContentSidebar";

const Layout = ({
  children,
  noSkin,
  bg,
  containerCls,
  bgImgUrl,
  animationIn,
  animationOut,
}: any) => {
  useEffect(() => {
    return () => {
      dotResize();
      setTimeout(createSkillsDot, 1000);
    };
  }, []);

  return (
    <div>
      <VideoPopup />
      <ImageView />
      <ImageGallery />
      <ContentModal />
      <div className={`page ${!noSkin ? "new-skin" : ""}`}>
        <Background bg={bg} img={bgImgUrl} />
        <div
          className={`${containerCls ? containerCls : "container opened layout-rounded-style minimal-icons-style"}`}
          data-animation-in={animationIn ? animationIn : "fadeInLeft"}
          data-animation-out={animationOut ? animationOut : "fadeOutLeft"}
        >
          {children}
        </div>
        <ContentSidebar />
      </div>
    </div>
  );
};
export default Layout;
