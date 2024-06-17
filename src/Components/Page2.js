import React from 'react'
import './Page2.css'
import Jpn from './images/jpn.png'
import mala from './images/mala.png'
import aus from './images/pexels-mudassir-ali-1878293 1.png'
import nep from './images/nep.png'
import flig from './images/flig.png'

const Page2=()=>{
  return (
    <div className='page2'>
        <div className='head'>
            <h2 className='head1'>Top Destinations</h2>
        </div>
        <div className='para'>
            <p className='para1'>Dui in in orci fermentum a. Maecenas nunc id ut auctor<br/> curabitur pellentesque id et tristique. Pellentesque et a <br/> nisl aliquam eget. Nam velit duis in mauris arcu vivamus <br/> amet turpis in. In bibendum placerat quam ullamcorper <br/> accumsan felis. Velit vitae pellentesque sagittis et <br/> consequat sit donec. Donec aenean vivamus ullamcorper <br/> urna aliquet faucibus lacus aliquet.</p>
        </div>
        <div className='butn'>
            <button className='butn1'>Discover More</button>
        </div>
        <div className='Destination'>
            <div className='japan'>
              <img className='jpn1' src={Jpn} alt='image not load'/>
              <p className='tok'>Tokyo,</p>
              <h3 className='jap'>Japan</h3>
              <p className='rt'>Rs. 24,000 onwards.</p>
              <a href='#'><img className='fligh' src={flig} alt='image not load'/></a>
            </div>
            <div className='malasiya'>
              <img className='mala1' src={mala} alt='image not load'/>
              <p className='kuc'>Kuching,</p>
              <h3 className='mal'>Malaysia</h3>
              <p className='rt1'>Rs. 34,000 onwards.</p>
              <a href='#'><img className='fligh' src={flig} alt='image not load'/></a>
            </div>
            <div className='nepal'>
              <img className='nep1' src={nep} alt='image not load'/>
              <p className='kath'>Kathmandu,</p>
              <h3 className='nepl'>Nepal</h3>
              <p className='rt2'>Rs. 25,000 onwards.</p>
              <a href='#'><img className='fligh' src={flig} alt='image not load'/></a>
            </div>
            <div className='malasiya2'>
              <img className='mala2' src={mala} alt='image not load'/>
              <p className='kuc1'>Kuching,</p>
              <h3 className='mal1'>Malaysia</h3>
              <p className='rt3'>Rs. 64,000 onwards.</p>
              <a href='#'><img className='fligh' src={flig} alt='image not load'/></a>
            </div>
            <div className='australia'>
              <img className='aus1' src={aus} alt='image not load'/>
              <p className='syd'>Sydney,</p>
              <h3 className='aus'>Australia</h3>
              <p className='rt4'>Rs. 74,000 onwards.</p>
              <a href='#'><img className='fligh' src={flig} alt='image not load'/></a>
            </div>
            <div className='japan2'>
              <img className='jpn2' src={Jpn} alt='image not load'/>
              <p className='tok2'>Tokyo,</p>
              <h3 className='jap2'>Japan</h3>
              <p className='rt5'>Rs. 1,02,000 onwards.</p>
              <a href='#'><img className='fligh' src={flig} alt='image not load'/></a>
            </div>
        </div>
    </div>
  )
}

export default Page2