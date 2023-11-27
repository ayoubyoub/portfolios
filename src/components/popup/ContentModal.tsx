import React, { useEffect, useState } from "react";
import useClickOutside from "../../useClickOutside";
const Content = ({ content, close }) => {
  let domNode = useClickOutside(() => {
    close(false);
  });
  return (
    <div>
      <div className="mfp-bg mfp-fade popup-box-inline mfp-ready" />

      <div
        className="mfp-wrap content_popup_warp mfp-close-btn-in mfp-auto-cursor mfp-fade popup-box-inline mfp-ready"
        tabIndex={-1}
        style={{ overflow: "hidden auto" }}
      >
        <div className="mfp-container mfp-s-ready mfp-inline-holder">
          <div className="mfp-content" ref={domNode}>
            <div id="popup-2" className="popup-box mfp-fade">
              <div
                dangerouslySetInnerHTML={{ __html: content.outerHTML }}
              ></div>
              <button
                onClick={() => close()}
                title="Close (Esc)"
                type="button"
                className="mfp-close"
              >
                ×
              </button>
            </div>
          </div>
          <div className="mfp-preloader">Loading...</div>
        </div>
      </div>
    </div>
  );
};

const ContentModal = () => {
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState(null);
  useEffect(() => {
    setTimeout(() => {
      const popupLink = document.querySelectorAll(".has-popup-media");
      for (let i = 0; i < popupLink.length; i++) {
        const element: any = popupLink[i];
        element.addEventListener("click", () => {
          setOpen(true);
          const hidenElement: any =
            element.parentElement.getElementsByClassName("mfp-hide")[0];
          const content_ = hidenElement.getElementsByClassName("content")[0];
          setContent(content_);
        });
      }
    }, 500);
  }, []);

  return (
    <div>
      {open && (
        <Content
          content={content}
          close={() => {
            setContent(null);
            setOpen(false);
          }}
        />
      )}
    </div>
  );
};
export default ContentModal;
