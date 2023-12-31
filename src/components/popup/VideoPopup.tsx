import React, { useEffect, useState } from "react";
import useClickOutside from "../../useClickOutside";

const VideoPopup_ = ({ close, videoID }: any) => {
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
        <div className="mfp-container mfp-s-ready mfp-iframe-holder">
          <div className="mfp-content" ref={domNode}>
            <div className="mfp-iframe-scaler">
              <button
                title="Close (Esc)"
                type="button"
                className="mfp-close"
                onClick={() => close()}
              >
                ×
              </button>
              <iframe
                src={videoID}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className="mfp-preloader">Loading...</div>
        </div>
      </div>
    </div>
  );
};

const VideoPopup = () => {
  const [video, setVideo] = useState(false);
  const [videoValue, setVideoValue] = useState(null);
  useEffect(() => {
    setTimeout(() => {
      const a: any = document.querySelectorAll("a");
      a.forEach((a: any) => {
        if (
          a.href.includes("www.youtube.com") ||
          a.href.includes("vimeo.com") ||
          a.href.includes("soundcloud.com")
        ) {
          a.addEventListener("click", (e: any) => {
            e.preventDefault();
            setVideoValue(a.href);
            setVideo(true);
          });
        }
      });
    }, 1500);
  }, []);
  return (
    <div>
      {video && (
        <VideoPopup_ close={() => setVideo(false)} videoID={videoValue} />
      )}
    </div>
  );
};

export default VideoPopup;
