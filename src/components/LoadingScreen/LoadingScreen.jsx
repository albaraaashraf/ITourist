import React from "react";

import "./LoadingScreen.css";

export default function LoadingScreen(probs) {
  return (
    <>
      {probs.show && (
        <div className="loader-holder">
          <div className="spin-1">
            <div className="spin-2">
              <div
                className="text"
                style={{
                  color: `${probs.textColor}`,
                }}
              >
                {probs.title}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
