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
              <p className='team-section-p'>Brian Monk is a USMC Veteran and graduated PSU in May 2023 majoring in Business Management. Brian created Danger Fit his Junior year of college with the dream to create efficient gym equipment for everyone.</p>

            </div>
            <div className='team-section'>
            <img src='/jardine.jpg' className='team-profile-img'></img>

              <h2 className='team-section-header'>James Jardine</h2>
              <h6 className='team-section-suberheader'>COO</h6>

              <h6 className='team-section-subheader'>Firefighter, US Army Infantryman, Vice President of Non Profit Veterans Group</h6>
              <p className='team-section-p'>James Jardine is an US Army National Guard Soldier who has over a decade in the fire department. He’s committed to helping others and finds that his role in Danger Fit allows him to do so.</p>

            </div>
            </div>
        </div>
    <Footer />
    </>
  )
}

export default teamDanger