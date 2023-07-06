import React from "react";

import { Outlet, useOutletContext } from "react-router-dom";

export default function GalleryContainer() {
  const {
    user: [[data], setData],
  } = useOutletContext();

  return (
    <>
      <Outlet context={{ user: [[data], setData] }} />
    </>
  );
}
