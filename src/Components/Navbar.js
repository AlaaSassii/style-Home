import React from 'react'

const Navbar = () => {
  return (
    <nav>
        <div>
            <img src='https://www.donegaldaily.com/wp-content/uploads/2014/06/Apple-logo1.jpg'/> 
        </div>
        <ul>
            <li>discover</li>
            <li>search</li>
            <li className='focus'>try instaread</li>
            <li>login</li>
        </ul>
    </nav>
  )
}

export default Navbar