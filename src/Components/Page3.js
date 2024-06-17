import React from 'react'
import './Page3.css'
import ilus from './images/Illustration.png'

const Page3=()=> {
  return (
    <div>
        <div>
            <h3 className='hd'>01</h3>
            <p className='hdr'>Instant Ticket</p>
            <p className='parag'>Eu scelerisque amet amet malesuada id ultrices morbi. Vitae <br/> purus mauris hac nisi habitasse donec. Vitae integer massa in <br/> blandit.</p>
        </div>
        <div>
            <h3 className='hd2'>02</h3>
            <p className='hd3'>Worldwide Flight</p>
            <p className='parag1'>Eu scelerisque amet amet malesuada id ultrices morbi. Vitae <br/> purus mauris hac nisi habitasse donec. Vitae integer massa in <br/> blandit.</p>
        </div>
        <div>
            <h3 className='hd4'>03</h3>
            <p className='hd5'>Trusted Booking</p>
            <p className='parag2'>Eu scelerisque amet amet malesuada id ultrices morbi. Vitae <br/> purus mauris hac nisi habitasse donec. Vitae integer massa in <br/> blandit.</p>
        </div>
        <div>
            <h2 className='hd6'>We Offer Best Services</h2>
            <button className='btn'>Learn More</button>
            <img className='ilust' src={ilus} alt='image not load'/>
        </div>
    </div>
  )
}

export default Page3