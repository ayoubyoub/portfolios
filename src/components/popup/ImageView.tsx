import React, { useEffect, useState } from "react";
import useClickOutside from "../../useClickOutside";

const ImgViews = ({ close, src }: any) => {
  let domNode = useClickOutside(() => {
    close(false);
  });
  return (
    <div>
      <div className="mfp-bg mfp-ready" onClick={() => close(false)}></div>
      <div
        className="mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-ready"
        tabIndex={-1}
        style={{ overflow: "hidden auto" }}
      >
        <div
          className={`mfp-container mfp-s-ready mfp-iframe-holder mfp-img-container`}
        >
          <div className="mfp-content" ref={domNode}>
            <div className="mfp-iframe-scaler">
              <img className="mfp-img" src={src} />
            </div>
          </div>
          <div className="mfp-preloader">Loading...</div>
        </div>
      </div>
    </div>
  );
};

const ImageView = () => {
  const [img, setImg] = useState(false);
  const [imgValue, setImgValue] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      const a: any = document.querySelectorAll("a");
      a.forEach((a: any) => {
        if (a.href.includes("/images")) {
          if (a.getAttribute("download") === null) {
            a.addEventListener("click", (e: any) => {
              e.preventDefault();
              setImgValue(a.href);
              setImg(true);
            });
          }
        }
      });
    }, 1500);
  }, []);
  return (
    <div>
      {img && <ImgViews close={() => setImg(false)} src={imgValue} />}
    </div>
  );
};
export default ImageView;
