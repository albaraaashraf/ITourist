import "./OfferCard.css";
function OfferCard(props) {
  return (
    <div className="offer-card">
      <div className="offer-card-header">
        <img className="offer-card-img" src={props.img} alt="img" />
        <div className="offer-card-name">{props.name}</div>
      </div>
      <div className="offer-card-content">
        <div className="offer-card-title">{props.title}</div>
        <div className="offer-card-description">{props.desc}</div>
      </div>
      <div className="offer-card-footer">
        <button className="offer-card-btn">Open Chat</button>
        <button className="offer-card-btn">Accept Offer</button>
      </div>
    </div>
  );
}
export default OfferCard;
