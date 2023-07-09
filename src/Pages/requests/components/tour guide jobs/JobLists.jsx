import { useState, useContext, useEffect } from "react";
import JobCard from "./components/cards/JobCard";
import "./JobLists.css";

import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../../../firebase-config";

function JobLists() {
  const currentLoaction = window.localStorage.getItem("currentLoaction");

  const [requests, setRequests] = useState();

  useEffect(() => {
    const cityRef = collection(db, `/City/${currentLoaction}/Upcoming Tours`);

    const un = onSnapshot(cityRef, (snapshots) => {
      let list = [];
      snapshots.docs.forEach((snapshot) => {
        console.log("snapshot.data()");
        console.log(snapshot.data());
        list.push(snapshot.data());
      });

      setRequests(list);
    });

    return () => {
      un();
      console.log("job destoyed");
    };
  }, [currentLoaction, setRequests]);

  return (
    <div className="my-3">
      <div className="joblists--header">
        <h2 className="joblists--header__title">Find your next client</h2>
        <p className="joblists--header__tagline">
          It takes less than 5 minutes to get started
        </p>
      </div>
      <div className="joblists--container">
        <div className="joblists--container__header w-75 ">
          <p>
            Check out all {requests && requests.length} clients Want to visit{" "}
            {
              <span
                style={{
                  fontWeight: "bolder",
                  fontSize: "2.1rem",
                  color: "#072c3d",
                }}
              >
                {currentLoaction}
              </span>
            }
          </p>
        </div>
        <div className="joblists--container__body">
          {requests &&
            requests.map((request, i) => {
              return (
                <JobCard
                  request={request}
                  cityName={currentLoaction}
                  key={i * Math.random()}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
}
export default JobLists;
