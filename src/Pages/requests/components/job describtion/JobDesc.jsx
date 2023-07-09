import "./JobDesc.css";
import { FaBrain } from "react-icons/fa";
import { BsCash } from "react-icons/bs";
import { AiFillCalendar } from "react-icons/ai";
import { useContext } from "react";
import { RequestContext } from "../../Request";
import { useState } from "react";
import { useEffect } from "react";
function JobDesc() {
  const { jobDescUser, jobDescRequests } = useContext(RequestContext);
  const [theRequest, setTheRequest] = useState();

  useEffect(() => {
    if (jobDescUser && jobDescRequests) {
      setTheRequest(jobDescRequests);
    }
  }, [jobDescUser, jobDescRequests]);

  return (
    <div className="jobdesc-page">
      <h3 className="jobdesc--title">
        <div className="d-flex justify-content-start align-items-center">
          <div className="img-container">
            <img src={jobDescUser && jobDescUser.ProfileImg} alt="" />
          </div>
          <div>{jobDescUser && jobDescUser.UserName}</div>
        </div>
      </h3>
      <p className="jobdesc--description">
        looking for some1 that can take me through the desert with a spaceship
        then through the seas with a camel and just fill the god damn tect idc
        what i type just type anything so it looks like a good description lorem
        ipsum bla bla bla hello word hello kitten
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
              {theRequest && (
                <div>
                  {theRequest.Price} {theRequest.Currency}
                </div>
              )}
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
              {theRequest && <div>{theRequest.Date}</div>}
            </div>
            <p className="details--container__identifier">Start Trip</p>
          </div>
        </div>
      </div>

      <div className="jobdesc--activity">
        <h4 className="jobdesc--activity__title">Activity on The Job</h4>
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
        </div>
      </div>
      <button className="send-proposal">Send a Proposal</button>
    </div>
  );
}
export default JobDesc;
