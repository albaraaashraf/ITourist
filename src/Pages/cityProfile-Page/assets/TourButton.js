import classes from "./TourButton.module.css";
const TourButton = (props) => {
  return (
    <>
      <button onClick={props.onClick} className={classes.button}>
        Request Tour
      </button>
    </>
  );
};
export default TourButton;
