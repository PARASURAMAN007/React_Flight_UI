import React from 'react'
import './Footer.css'
const Footer=()=> {
  return (
    <div>
        <div className='foter'>
            <div className='ovrall'>
            <a className='about' href='/'>About</a>
            <a className='explr' href='/'>Explore</a>
            <a className='bkngs' href='/'>Bookings</a>
            <a className='fndtk' href='/'>Find Ticket</a>
            <a className='contus' href='/'>Contact Us</a>
            </div>
        </div>
        <div>
            <p className='my'>Designed by @parasuraman</p>
        </div>
    </div>
  )
}

export default Footer