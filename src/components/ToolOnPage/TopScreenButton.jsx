import React, { useEffect, useState } from "react";

import "./Top.css";

import { AiOutlineToTop } from "react-icons/ai";

export default function TopScreenButton() {
  let [style, setStyle] = useState({
    position: "fixed",
    right: "30px",
    bottom: "30px",
    opacity: "0",
  });

  const clickHandler = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const scrollHandling = () => {
      if (window.scrollY >= 500) {
        setStyle({ ...style, opacity: "1.0" });
      } else {
        setStyle({ ...style, opacity: "0.0" });
      }
    };
    window.addEventListener("scroll", scrollHandling);

    return () => {
      window.removeEventListener("scroll", scrollHandling);
    };
  });

  return (
    <>
      <button
        id="topBTN"
        style={style}
        className="toUp-btn"
        onClick={clickHandler}
      >
        <AiOutlineToTop />
      </button>
    </>
  );
}
