import { AiFillDislike, AiFillLike, AiFillStar } from 'react-icons/ai'
import './ReviewCard.css'
const ReviewCard=()=>{
    return<>
    <div className='reviewCard__container'>
        <div className='reviewCard__firstrow'>
    <p id='reviewCard__username'>User Name</p>
    <div className='likeDislike__Container'>
    <AiFillLike className='likeLogo'></AiFillLike>
    <AiFillDislike className='likeLogo'></AiFillDislike>
    </div>
    </div>
    <div className='reviewCard__userscore'>
    <AiFillStar></AiFillStar>
    <AiFillStar></AiFillStar>
    <AiFillStar></AiFillStar>
    <AiFillStar></AiFillStar>
    <AiFillStar></AiFillStar>
    </div>
    <div id='reviewCard__review'>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent gravida, libero eget finibus vulputatessim. Vestibulum ac sagittis velit, vel suscipit libero. Nullam at dapibus tortor. Integer vulputate elementum leo at placerat. Cras eleifend leo vel neque consequat accumsan. Etiam fringilla euismod convallis. Phasellus sed aliquam dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Viva
    </div>
    </div>
    </>
}
export default ReviewCard