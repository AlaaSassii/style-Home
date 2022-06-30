import React ,{useState,useEffect} from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import {BsNewspaper , BsHeadphones} from 'react-icons/bs'
import {MdBookmarkBorder} from 'react-icons/md'
import Star from './Components/Star';
import Section2 from './Components/section2';
function App() {
  return (
    <>
    <Navbar/>
    <section className='gray'>
      <section className='content-gray'>
        <div className="image-book-gray">
          <img src={`https://webservice.instaread.co/books/images?imageUrl=https://d1cm35kbp068hs.cloudfront.net/ulqsstcvmp/cover.jpg&type=cover`}/>
        </div>
        <div className='content-gray-data'>
          <h1>astrophysics for people in a hurry summary</h1>
          <h5>Key Insights {'&'} Analysis</h5>
          <p>Kelly Bragon ,MD with khristen lobreg </p>
          <hr/>
          <ul>
            <li><BsNewspaper style={{margin:"15px"}}/> 8 mins read</li>
            <li><BsHeadphones style={{margin:"15px"}} />min listen</li>
            <li><MdBookmarkBorder style={{margin:"15px"}}/>Add to Library</li>
          </ul>
          <hr/>
          <Star/>
        </div>
      </section>
    </section>
      <Section2/>
    </>
  );
}

export default App;
