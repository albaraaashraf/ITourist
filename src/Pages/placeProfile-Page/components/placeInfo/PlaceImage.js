import './PlaceImage.css'
import PlaceTags from './PlaceTags'
const PlaceImage=()=>{
    return <>
    <div id='image__container'>
    <img id='place__image' src='/assets/images/c50e754f7550a250db5004226ba0662b.portsaid-59.jpg' alt='bla bla'></img>
    <div id='tag__container'>
    <PlaceTags name={"Monument"}></PlaceTags>
    <PlaceTags name="Sea"></PlaceTags>
    <PlaceTags name="Touring"></PlaceTags>
   
    
    </div>
    </div>

    </>
}
export default PlaceImage