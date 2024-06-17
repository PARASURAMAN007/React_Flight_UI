import React from 'react'
import './Landing.css'
import fb from './images/ic_baseline-facebook.png'
import ln from './images/entypo-social_linkedin-with-circle.png'
import tw from './images/entypo-social_twitter-with-circle.png'
import dd from './images/majesticons_chevron-down.png'
import logo from './images/Logo.png'
import map from './images/mdi_location.png'
import cl from './images/uis_calender.png'
import pa from './images/material-symbols_person.png'

const Landing=()=> {
  return (
    <div className='home'>
      <div className='Topinfobar'>
      <div className='top1'>
      <p>+977 9878787845</p>
      <p className='p2'>let’sbookit@gmail.com</p>
      <div className='frame5'>
      <a className='fb' href='#'><img src={fb} alt='image not load'/></a>
      <a className='ln' href='#'><img src={ln} alt='image not load'/></a>
      <a className='tw' href='#'><img src={tw} alt='image not load'/></a>
      <p className='line1'></p>
      <p className='li'>Log In</p>
      <button className='su'>Sign Up</button>
      <p className='line2'></p>
      <p className='p3'>NRs</p>
      <img className='dd' src={dd} alt='image not load'/>
      </div>
      </div>
      <div className='navbar'>
        <hr className='hr1'></hr>
        <img className='logo' src={logo} alt='image not load'/>
        <div className='navitems'>
        <a className='ab' href='#'>About</a>
        <a className='ex' href='#'>Explore</a>
        <a className='bk' href='#'>Bookings</a>
        <a className='ft' href='#'>Find Ticket</a>
        <a className='cu' href='#'>Contact Us</a>
        </div>
      </div>
      <div className='hd'>
        <h2 className='hd1'>Say Yes to The World</h2>
      </div>
      <div className='Description'>
        <p className='pr'>Pulvinar rhoncus eget non vulputate varius ullamcorper enim arcu mauris. Pharetra <br/>augue amet sit cursus. Leo commodo neque neque praesent. Aliquet tincidunt <br/> maecenas elementum eu ipsum erat. Velit quisque morbi nisl accumsan auctor at at <br/>nec.</p>
      </div>
      <div className='all'>
        <p className='da'>Departure Airport</p>
        <img className='loc' src={map} alt='image not load'/>
        <div className='tb'>
        <input className='ip1' type='text' placeholder='Where are you now?'/>
        <hr className='hr2'></hr>
        </div>
        </div>
        <div className='aa'>
        <p className='da1'>Arrival Airport</p>
        <img className='loc1' src={map} alt='image not load'/>
        <div className='tb1'>
        <input className='ip2' type='text' placeholder='Where are you now?'/>
        <hr className='hr3'></hr>
        </div>
        </div>
        <div className='dt'>
        <p className='da2'>Date</p>
        <img className='cal' src={cl} alt='image not load'/>
        <div className='tb2'>
        <input className='ip3' type='text' placeholder='When are you leaving?'/>
        <hr className='hr4'></hr>
        </div>
        </div>
        <div className='aa'>
        <p className='da1'>Travellers</p>
        <img className='pa1' src={pa} alt='image not load'/>
        <div className='tb1'>
        <input className='ip2' type='text' placeholder='Number of passengers'/>
        <hr className='hr3'></hr>
        </div>
        </div>
        <div>
          <button className='syf'><p className='syf1'>Search Your Flight</p></button>
        </div>
      </div>
    </div>
  )
}

export default Landing