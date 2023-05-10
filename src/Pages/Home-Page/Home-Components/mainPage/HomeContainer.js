import MainCard from './MainCard';
import './HomeContainer.css'
import MainImage from './MainImage';
const HomeContainer=()=>{
    return<>
    <div className='overAll__container'>
        <MainImage></MainImage>
        <MainCard></MainCard>
    </div>
    </>
}
export default HomeContainer