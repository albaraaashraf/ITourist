import classes from "./StepsCard.module.css";
import { AiOutlineSchedule } from "react-icons/ai";
import { FaSlideshare } from "react-icons/fa";
import { GiArchiveResearch } from "react-icons/gi";
import {MdTravelExplore} from "react-icons/md"
const StepsCard = (props) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // This will animate the scroll
    });
  };
  let icon;

  if (props.icon === "tour") {
    icon = <AiOutlineSchedule />;
  } else if (props.icon === "share") {
    icon = <FaSlideshare />;
  } else if (props.icon === "search") {
    icon = <MdTravelExplore />;
  }
  return (
    <>
      <div className={`${classes.cardContainer}`}>
        <div className={classes.iconWrapper}>{icon}</div>
         <p>{props.title}</p>
        <p>{props.text}</p>
        {props.showButton && (
          <button onClick={scrollToTop}>Start Your Journey</button>
        )}
      </div>
    </>
  );
};
export default StepsCard;
