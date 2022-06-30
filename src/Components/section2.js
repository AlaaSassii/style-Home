import React from 'react'
import Audio from './Audio'
const Section2 = () => {
  return (
    <div className="section2">
        <ul className='menu'>
            <li>summary</li>
            <li>insight</li>
            <li>quotes</li>
        </ul>
        <hr></hr>
        <div className='section2-content'>
            <div className="content">
            <h1>Overview</h1>
            <p>A two-career family offers many benefits, but it can be difficult to thrive at both working and parenting. If you and your partner are living this lifestyle, or considering it, Daisy Dowling’s Two-Career Families (2022) offers ideas and strategies to guide you on your long-term path as working parents. You'll discover how to communicate about your objectives and beliefs, think about professional choices, and provide support during times of work stress. You’ll learn how to take care of yourself, the kids, and each other—all while dealing with the daunting big picture and the often hidden challenges.</p>
            </div>
            <Audio  />
        </div>
    </div>
  )
}

export default Section2