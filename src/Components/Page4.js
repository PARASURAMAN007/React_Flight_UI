import React from 'react'
import './Page4.css'
import Email from './images/Vector.png'
import msg from './images/Illustration (1).png'
import Logo from './images/Logo.png'
const Page4=()=> {
  return (
    <div>
      <div className='sub'>
      <h1 className='sub1'>Subscribe</h1>
      <h1 className='sub1'>to Get Notified About Latest Deals & Offers</h1>
      <p className='sub2'>Eu scelerisque amet amet malesuada id ultrices morbi. Vitae purus</p>
      <p className='sub3'>mauris hac nisi habitasse donec. Vitae integer massa in blandit.</p>
      <div className='efill'>
          <div className='em9'>
          <img className='em2' src={Email} alt='image not load'/>
          <div className='em6'>
          <input className='em1' type='email' placeholder='Email Address'/>
          </div>
          </div>
          <div className='btn4'>
          <button className='btun4'>Subscribe</button>
          </div>
          <hr className='hr6'></hr>
      </div>
      <img className='fin' src={msg} alt='image not load'/>
      </div>
      <img className='log2' src={Logo} alt='image not load'/>
      <p className='fot'>Eu scelerisque amet amet malesuada id ultrices morbi. Vitae purus</p>
      <p className='fot1'> mauris hac nisi habitasse donec. Vitae integer massa in blandit.</p>
    </div>
  )
}

export default Page4