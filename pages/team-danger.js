import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { AiFillStar } from 'react-icons/ai'
import Head from 'next/head'

const teamDanger = () => {
  return (
    <>
       <Head>
          <title>Team Danger</title>
          <meta name="description" content="Danger Fit: Unparalleled gym equipment."/>
          <meta charSet="utf-8" />
          <meta name="robots" content="index, follow" />
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <link rel="icon" type="image/png" href="/favicon.png" alt="Favicon" />
          <link rel="apple-touch-icon" href="/favicon.png" /> 
          <link rel="canonical" href="https://dangerfit.com/team-danger"/>
          <meta property="og:type" content="article" />
          <meta property="og:title" content="Danger Fit" />
          <meta property="og:description" content="Danger Fit: Unparalleled gym equipment." />
          <meta property="og:image" content="/favicon.png" />
          <meta property="og:url" content="dangerfit.com" />
          <meta property="og:site_name" content="Danger Fit" />
          <meta name="twitter:title" content="Danger Fit" />
          <meta name="twitter:description" content="Danger Fit: Unparalleled gym equipment." />
          <meta name="twitter:image" content="/favicon.png" />
          <meta name="twitter:site" content="@USERNAME" />
          <meta name="twitter:creator" content="@USERNAME" />
      </Head>
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