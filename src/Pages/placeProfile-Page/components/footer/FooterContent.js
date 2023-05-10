import './FooterContent.css'
import {CgFacebook} from 'react-icons/cg'
import {BsTwitter,BsInstagram} from 'react-icons/bs'
const FooterContent=()=>{
    return <>
    <div className='foot__container'>
        <div className='footCol__container'>

    <div className='footFirst__column'>
        <h3>About iTourist</h3>
        <p>About Us</p>
        <p>Press</p>
        <p>Policies</p>
        <p>Safety</p>
        <p>Accessibility</p>
    </div>
    <div className='footSecond__column'>
    <h3>Explore</h3>
    <p>Write Review</p>
        <p>Add Place</p>
        <p>Blog</p>
        <p>Help Center</p>
        <p>Insurance</p>
        </div>
        <div className='footThird__column'>
    <img id='footerLogo' src='/assets/images/sublogo_itourists.png' alt=''></img>
        <p>iTourist</p>
        </div>

    </div>
   
    </div>
    <div className='footerFA'>
        <CgFacebook></CgFacebook>
        <BsTwitter></BsTwitter>
        <BsInstagram></BsInstagram>

        </div>

    </>
}

export default FooterContent