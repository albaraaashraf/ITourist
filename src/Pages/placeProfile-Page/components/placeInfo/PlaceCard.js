import './PlaceCard.css'
import {AiFillStar} from 'react-icons/ai'
import CityDataContext from '../../../../Context/CityDataContext';
import { useContext } from 'react';
const PlaceCard = () => {
const{cardData} = useContext(CityDataContext)
console.log(cardData)
  return <>
  <div id="info__container">
    <div id="info__header">
    <p id='place__header'>{cardData.header}</p>
    <p id='place__distance'>{cardData.distance}</p>

    </div>
    <div id='rating__container'>
    <AiFillStar></AiFillStar>
    <AiFillStar></AiFillStar>
    <AiFillStar></AiFillStar>
    <AiFillStar></AiFillStar>
    <AiFillStar></AiFillStar>
    </div>

    <div id='info__par'>
      <p>
      {/* The remains of what used to be a 33 foot bronze statue of Ferdinand de Lesseps at the entrance of the Suez Canal. It was built in 1899. But in response to the 1956 Suez Crisis, the statue was removed, and is now located in a shipyard in Port Fouad. */}
    {cardData.info}

      </p>
      <button className='review__button'>
        Tour guide
      </button>
    </div>
    </div>
   
  </>;
};
export default PlaceCard;
