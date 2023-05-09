import React, { useEffect, useState } from "react";

export default function TopScreenButton() {
  let [style, setStyle] = useState({
    position: "fixed",
    right: "30px",
    bottom: "30px",
    display: "none",
    transitionDuration: "500ms",
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
        setStyle({ ...style, display: "block" });
      } else {
        setStyle({ ...style, display: "none" });
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
        className="btn btn-outline-primary"
        onClick={clickHandler}
      >
        ^
      </button>
    </>
  );
}
