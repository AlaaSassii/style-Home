import React,{useState} from 'react'
import './star.css'
const Star = () => {
    const [rating,setRating] = useState(0.0)
    const [clicked, setClicked] = useState(false)
  return (
    <>
    <div className="rating-wrapper">
        <div className="div">
        <h2 className="rating-label">{rating ? rating : '0.0'}</h2>
        <p style={{marginTop:'10px'}}>2 ratings</p>
        </div>
        <div className="rating-star">
            <input onClick={()=> {!clicked && setRating('5.0') ; setClicked(true) } } type="radio" name="html"/>
            <input onClick={()=> {!clicked && setRating('4.5'); setClicked(true) }}type="radio" name="html"/>
            <input onClick={()=> {!clicked && setRating('4.0'); setClicked(true) }}type="radio" name="html"/>
            <input onClick={()=> {!clicked && setRating('3.5'); setClicked(true) }}type="radio" name="html"/>
            <input onClick={()=> {!clicked && setRating('3.0'); setClicked(true)} }type="radio" name="html"/>
            <input onClick={()=> {!clicked && setRating('2.5'); setClicked(true) }}type="radio" name="html"/>
            <input onClick={()=> {!clicked && setRating('2.0'); setClicked(true) }}type="radio" name="html"/>
            <input onClick={()=> {!clicked && setRating('1.5'); setClicked(true) }}type="radio" name="html"/>
            <input onClick={()=> {!clicked && setRating('1.0'); setClicked(true) }}type="radio" name="html"/>
            <input onClick={()=> {!clicked && setRating('0.5'); setClicked(true) }}type="radio" name="html"/>
        </div>
    </div>
   
    </>
  )
}

export default Star