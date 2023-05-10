import NearbySlider from './NearbySlider'
import './SliderContainer.css'
const SliderContainer=()=>{
    return <>
    <div className='slider__container'>
    <div className='sliderHeader__container'>
    <p>Nearby Activties</p>
    </div>
    <NearbySlider></NearbySlider>
    </div>
    </>
}
export default SliderContainer