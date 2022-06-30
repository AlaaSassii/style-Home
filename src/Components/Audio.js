import React from 'react'
import {BsPlayCircle} from 'react-icons/bs'
const Audio = () => {
  return (
    <div className='audio-book'>
        <h4>Audiobook</h4>
        <div className='audio-element'>
        <audio controls>
        <source src="/media/epic.mp3" type="audio/mpeg"/>
        <source src="/media/epic.wav" type="audio/wav"/>
        </audio>
        <div className='image'>
            <img src={`https://webservice.instaread.co/books/images?imageUrl=https://d1cm35kbp068hs.cloudfront.net/ulqsstcvmp/cover.jpg&type=cover`}/>
        </div>
        </div>
        <h6>Table of Content</h6>
        <ol>
            <li>Overview <BsPlayCircle/></li> 
            <hr></hr>
            <li>Communication Is Key <BsPlayCircle/></li>
            <hr></hr>
            <li>On Eath Other's Team <BsPlayCircle/></li>
            <hr></hr>
            <li>Shared vision <BsPlayCircle/></li>
            <hr></hr>
        </ol>
    </div>
  )
}

export default Audio