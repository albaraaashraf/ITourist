import './PlaceProfileApp.css';
import PlaceCard from './components/placeInfo/PlaceCard';
import PlaceImage from './components/placeInfo/PlaceImage';
import ReviewCard from './components/reviews/ReviewCard';
import ReviewCardButton from './components/reviews/ReviewCardButton';
import ReviewHeader from './components/reviews/ReviewHeader';
import SliderContainer from './components/Slider/SliderContainer';
function ProfilePlaceApp() {
  return (
    <>
  <div id='page__container'>
    <div id='first__part'>
    <PlaceCard></PlaceCard>
    <PlaceImage></PlaceImage>
    </div>
    <div id='second__part'>
    <SliderContainer></SliderContainer>
    </div>
    <div id='third__part'>
    <ReviewHeader></ReviewHeader>
    <ReviewCard></ReviewCard>
    <ReviewCard></ReviewCard>
    <ReviewCard></ReviewCard>
    <ReviewCard></ReviewCard>
    <ReviewCardButton></ReviewCardButton>
    </div>
    {/* <Footer></Footer> */}
  </div>
    </>
  );
}

export default ProfilePlaceApp;
