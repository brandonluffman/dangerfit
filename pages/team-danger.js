import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { AiFillStar } from 'react-icons/ai'

const teamDanger = () => {
  return (
    <>
    <Navbar />
    <div className='team-container'>

            <h1 className='team-subheader green-font'>Team Danger</h1>
            <h1 className='team-header'>Meet the Team</h1>
            <p className='team-p'></p>
            <div className='team-section-container'>
            <div className='team-section'>
              <img src='/monk.jpeg' className='team-profile-img'></img>
              <h2 className='team-section-header'>Brian Monk</h2>
              <h6 className='team-section-suberheader'>CEO, Founder</h6>
              <h6 className='team-section-subheader'>USMC Veteran, PSU Business Management Alumni</h6>
              {/* <p className='team-section-p'>Brian started building this company in 2022 and continues to build it everyday. He has been working in the gym for 7+ years and is passionate to help motivate people and drive them to success.</p> */}

            </div>
            <div className='team-section'>
            <img src='/jardine.jpg' className='team-profile-img'></img>

              <h2 className='team-section-header'>James Jardine</h2>
              <h6 className='team-section-suberheader'>COO</h6>

              <h6 className='team-section-subheader'>Firefighter, US Army Infantryman, Vice President of Non Profit Veterans Group</h6>
              {/* <p className='team-section-p'>As a firefighter, US Army Infantryman, and Vice president of a nonprofit veterans group, James brings a variety of different skill sets to the table for Danger Fit. James worked in many fields and understands the dynamics of sales and marketing.</p> */}

            </div>
            </div>
        </div>
    <Footer />
    </>
  )
}

export default teamDanger