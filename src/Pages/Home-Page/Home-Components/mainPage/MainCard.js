import { HiOutlineLocationMarker } from 'react-icons/hi';
import {HiMagnifyingGlassPlus} from 'react-icons/hi2'
import './MainCard.css'
import SearchInput from '../Inputs/SearchInput';

const MainCard=(props)=>{
    return<>

<div className='card__container'>
    <div className='cardData'>
    <div className='first__column'>
        <div className='fa__container'>
        <HiOutlineLocationMarker></HiOutlineLocationMarker>

        <p>
            Your Current Location
        </p>
        </div>
        <p id='location__header'>
            Port Said
        </p>
    </div>
    <div className='sec__column'>
        <div className='fa__container'>
            <HiMagnifyingGlassPlus></HiMagnifyingGlassPlus>
        <p>
            Explore another places
        </p>
        </div>
     
        <SearchInput></SearchInput>
    </div>
    </div>
    </div>

    </>
}

export default MainCard