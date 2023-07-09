import OfferCard from "./offerCard/OfferCard";
// import ziad from "./ziad.png";
import "./OffersRecieved.css";
function OffersRecieved() {
  const description =
    "this is a long job offer description this is a long job offer description this is a long job offer description this is a long job offer description this is a long job offer description this is a long job offer description this is a long job offer description this is a long job offer description this is a long job offer description this is a long job offer description";
  return (
    <>
      <h1 className="offers-recieved-title">
        <span className="offers-recieved-amount">{"3"}</span> offers Recieved
      </h1>
      <div className="offer-recieved-container">
        <OfferCard
          name="Ahmed Mohammed"
          img={"/public/assets/images/blabla.jpg"}
          desc={description}
          title="ismallia guide"
        />
        <OfferCard
          name="ahmed"
          img={"/public/assets/images/blabla.jpg"}
          desc={description}
          title="ismallia guide"
        />
        <OfferCard
          name="ahmed"
          img={"/public/assets/images/blabla.jpg"}
          desc={description}
          title="ismallia guide"
        />
      </div>
    </>
  );
}
export default OffersRecieved;
