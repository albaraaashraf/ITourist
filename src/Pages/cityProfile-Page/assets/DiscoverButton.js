import classes from './DiscoverButton.module.css'
import { useNavigate,useParams } from 'react-router-dom'
const Button=(props)=>{
    const { cityId } = useParams();
    const navigate=useNavigate()
    const handleOnClick=()=>{
        console.log(cityId)
        navigate(`/CityProfile/${cityId}/Places`);
    }
    return <>
          <button className={classes.button} onClick={handleOnClick} >Discover More</button>
    </>
}
export default Button