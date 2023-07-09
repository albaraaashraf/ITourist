import { useState, useEffect, useRef } from "react";

import "./JobDesc.css";
import { FaBrain } from "react-icons/fa";
import { BsCash, BsFillPeopleFill } from "react-icons/bs";
import { AiFillCalendar, AiFillCar } from "react-icons/ai";
import { GrLanguage } from "react-icons/gr";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../../../firebase-config";

function JobDesc() {
  const [theRequest, setTheRequest] = useState();

  const descRef = useRef();

  const storedUser = JSON.parse(localStorage.getItem("requestUserDetails"));
  const storedRequest = JSON.parse(localStorage.getItem("requestDetails"));
  const tourguide = JSON.parse(localStorage.getItem("storedUser"));

  const textAreaStyle = {
    resize: "none",
    border: "1px solid #425281",
    borderRadius: "0.4rem",
    padding: "0.5rem 0.8rem",
  };

  function sendProposal() {
    const ref = doc(
      db,
      `/Users/${storedUser.uid}/Tours Offers/${tourguide.uid}`
    );

    setDoc(ref, {
      desc: descRef.current.value,
      ReqReference: `/City/${storedRequest.city}/Requests/${
        storedRequest.reference.split("/")[1]
      }`,
      reference: `Users/${tourguide.uid}`,
    });
  }

  useEffect(() => {
    if (storedUser && storedRequest) {
      setTheRequest(storedRequest);
    }
  }, []);

  return (
    <div className="jobdesc-page">
      <h3 className="jobdesc--title">
        <div className="d-flex justify-content-start align-items-center">
          <div className="img-container">
            <img src={storedUser && storedUser.profileImg} alt="" />
          </div>
          <div>{storedUser && storedUser.fullName}</div>
        </div>
      </h3>
      <p className="jobdesc--description">
        {theRequest && theRequest.description}
      </p>
      <div className="jobdesc--tags">
        <span className="jobdesc--tag">tag1</span>
        <span className="jobdesc--tag">tag2</span>
        <span className="jobdesc--tag">tag3</span>
      </div>
      <div className="jobdesc--details">
        <div className="jobdesc--details__item">
          <BsCash className="jobdesc--details__icon" />
          <div className="details--container">
            <div className="details--container__value">
              {theRequest && <div>{theRequest.rangeOfBudget}</div>}
              <p className="details--container__identifier">Fixed</p>
            </div>
          </div>
        </div>

        <div className="jobdesc--details__item">
          <FaBrain className="jobdesc--details__icon" />
          <div className="details__container">
            <p className="details--container__value">Expert</p>
            <p className="details--container__identifier">Experience</p>
          </div>
        </div>

        <div className="jobdesc--details__item">
          <AiFillCalendar className="jobdesc--details__icon" />
          <div className="details--container">
            <div className="details--container__value">
              {theRequest && <div>{theRequest.arrivalDate}</div>}
            </div>
            <p className="details--container__identifier">Start Trip</p>
          </div>
        </div>

        <div className="jobdesc--details__item">
          <AiFillCar className="jobdesc--details__icon" />
          <div className="details--container">
            <div className="details--container__value">
              {theRequest && (
                <div>
                  {theRequest.ownsVehicle
                    ? theRequest.ownsVehicle
                    : "Not Specified"}{" "}
                </div>
              )}
            </div>
            <p className="details--container__identifier">Car is prefered</p>
          </div>
        </div>

        <div className="jobdesc--details__item">
          <GrLanguage className="jobdesc--details__icon" />
          <div className="details--container">
            <div className="details--container__value">
              {theRequest && (
                <div>
                  {theRequest.spokenLanguages
                    ? theRequest.spokenLanguages
                    : "Not Specified"}{" "}
                </div>
              )}
            </div>
            <p className="details--container__identifier">prefered Language</p>
          </div>
        </div>

        <div className="jobdesc--details__item">
          <BsFillPeopleFill className="jobdesc--details__icon" />
          <div className="details--container">
            <div className="details--container__value">
              {theRequest && (
                <div>
                  {theRequest.tourGuideGender
                    ? theRequest.tourGuideGender
                    : "Not Specified"}{" "}
                </div>
              )}
            </div>
            <p className="details--container__identifier">
              prefered Tour Guide Gender
            </p>
          </div>
        </div>
      </div>

      <div className="jobdesc--activity">
        <label
          htmlFor="proposal"
          style={{ fontWeight: "bolder", fontSize: "1.3rem" }}
        >
          Write commit before sending
        </label>
        <br />
        <textarea
          id="proposal"
          rows={7}
          cols={60}
          placeholder="Write any Thing you Want Here ..."
          ref={descRef}
          style={textAreaStyle}
        ></textarea>
      </div>
      <button className="send-proposal" onClick={sendProposal}>
        Send a Proposal
      </button>
    </div>
  );
}
export default JobDesc;
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* <h4 className="jobdesc--activity__title">Activity on The Job</h4>
        <div className="jobdesc--activity__items__container">
          <div className="jobdec--activity__item">
            <p className="jobdesc--activity__item__identifier">
              How many proposals ?
            </p>
            <p className="jobdesc--activity__item__value">
              {theRequest && theRequest.Number} proposals
            </p>
          </div>

          <div className="jobdec--activity__item">
            <p className="jobdesc--activity__item__identifier">
              Last Interview ?
            </p>
            <p className="jobdesc--activity__item__value">2 days ago</p>
          </div>
        </div> */
