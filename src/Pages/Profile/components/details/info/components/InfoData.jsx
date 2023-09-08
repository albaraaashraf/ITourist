import React from "react";

function InfoData(probs) {
  const person = probs;

  return (
    <>
      <div className="container-fluid mx-lg-5 my-4">
        <div className="row px-3 mx-lg-5 data-sm-screen">
          <div className="col-md-3 label">{person.label} :</div>
          <div className="col-md-9 ">{person.data}</div>
        </div>
      </div>
    </>
  );
}

export default InfoData;
