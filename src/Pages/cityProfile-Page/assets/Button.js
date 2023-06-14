import classes from './Button.module.css'
import { useNavigate } from 'react-router-dom'
const Button=(props)=>{
    const navigate=useNavigate()
    const handleOnClick=()=>{
        navigate('places')
    }
    return <>
          <button className={classes.button} onClick={handleOnClick} >Discover More</button>
    </>
}
export default Button