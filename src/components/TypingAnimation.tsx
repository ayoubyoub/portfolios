import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

const TypingAnimation = ({ data }: any) => {
  // Create Ref element.
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: data ? data : ["Software Developer", "Founder", "Father", "Husband"], // Strings to display
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      smartBackspace: true,
      loop: true,
      showCursor: false,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);
  return <div className="subtitle subtitle-typed" ref={el}></div>;
};
export default TypingAnimation;
