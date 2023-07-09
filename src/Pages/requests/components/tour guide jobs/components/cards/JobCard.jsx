import { BiMoney, BiTime } from "react-icons/bi";
import "./JobCard.css";
import { useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { useState } from "react";
import { db } from "../../../../../../firebase-config";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { RequestContext } from "../../../../Request";
function JobCard({ request, cityName }) {
  const { setJobDescUser, setJobDescRequests } = useContext(RequestContext);
  const [user, setUser] = useState();
  const navigate = useNavigate();

  // calculate the Time
  const specificDate = new Date(request.time.toDate()); // replace with your specific date
  const currentDate = new Date(); // current date and time
  const durationInMilliseconds = Math.abs(
    currentDate.getTime() - specificDate.getTime()
  );
  const durationInSeconds = durationInMilliseconds / 1000;
  const durationInMinutes = durationInSeconds / 60;
  const durationInHours = durationInMinutes / 60;

  useEffect(() => {
    getDoc(doc(db, request.reference)).then((snapshot) => {
      setUser(snapshot.data());
    });
  }, [request.reference, setUser]);

  return (
    <div className="job--card__container">
      <h3 className="job--card__title">{user && user.UserName}</h3>
      <div className="job--card__time-posted">
        <p>
          <BiTime className="clock-icon" />
          {parseInt(durationInHours)} Hours ago
        </p>
      </div>
      <div className="job--card__price">
        <p>
          <BiMoney className="cash-icon" />
          {request.Price} {request.Currency}
        </p>
      </div>
      <div className="job--card__description">
        <p>
          looking for some1 that can take me through the desert with a spaceship
          then through the seas with a camel and ...
        </p>
      </div>
      <div className="job--card__tags">
        <div className="job--card__tag">{cityName}</div>
        <div className="job--card__tag">Tourist</div>
        <div className="job--card__tag">Regular</div>
      </div>
      <button
        className="job--card__button"
        onClick={() => {
          navigate("/Requests/requesDetails");
          setJobDescUser(user);
          setJobDescRequests(request);
        }}
      >
        Learn More
      </button>
    </div>
  );
}
export default JobCard;
