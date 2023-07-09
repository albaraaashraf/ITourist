import React from "react";

import { Outlet } from "react-router-dom";
import { useState } from "react";
import { createContext } from "react";

export const RequestContext = createContext();
export default function Request() {
  const [jobDescRequests, setJobDescRequests] = useState();
  const [jobDescUser, setJobDescUser] = useState();

  const value = {
    jobDescRequests,
    setJobDescRequests,
    jobDescUser,
    setJobDescUser,
  };
  return (
    <div>
      <RequestContext.Provider value={value}>
        <Outlet />
      </RequestContext.Provider>
    </div>
  );
}
