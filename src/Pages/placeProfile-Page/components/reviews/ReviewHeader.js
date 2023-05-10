import { AiFillStar } from 'react-icons/ai'
import './ReviewHeader.css'
const ReviewHeader=()=>{
    return <>
    <div className='firstRowHeader'>
    <p id='peopleReviews'>People Reviews</p>
    <div className='secPart'>
    <p id='reviewNum'>1000+ review</p>
    <AiFillStar className='reviewSec__star'></AiFillStar>
    <AiFillStar className='reviewSec__star'></AiFillStar>
    <AiFillStar className='reviewSec__star'></AiFillStar>
    <AiFillStar className='reviewSec__star'></AiFillStar>
    <AiFillStar className='reviewSec__star'></AiFillStar>

    </div>
    </div>
    </>
}

export default ReviewHeader