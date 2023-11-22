import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { AiFillStar } from 'react-icons/ai'
import AffiliateForm from '../components/AffiliateForm'

const affiliate = () => {
  return (
    <>
    <Navbar />
    <div className='affiliate-container'>
          <h1 className='affiliate-header green-font'>Team 1%</h1>
          {/* <div className='flexer'> */}
          <p className='affiliate-p'>Get ready to elevate your fitness journey with our exceptional gym clothing lineup. We are a dedicated community of individuals committed to self-improvement, pushing ourselves beyond limits to achieve greatness. Embracing sacrifice and relentless dedication, we forge ahead on the path to becoming the best versions of ourselves. Join us in our pursuit of excellence, as we break barriers and conquer new fitness heights. Together, let&apos;s unleash our full potential, fueled by the power of Danger Fit and the spirit of Team 1%.</p>

          <img src='/group.jpg' className='affiliate-img'></img>
          {/* </div> */}
          <p className='affiliate-p'>Starting out as an affiliate for Danger Fit you&apos;ll earn a competitive 10% commission for each sale generated through your unique affiliate links. By leveraging your marketing skills, building an engaged audience, and driving traffic to Danger Fit&apos;s website, you&apos;ll have the potential to earn a significant income. As you grow and demonstrate your value, there may be opportunities to increase your commission rate and unlock even greater earning potential.</p>
          {/* <p className='affiliate-p'>Once you have signed up here, please log in to https://www.affiliatly.com/ and check out your Affiliate dashboard. If you need any help, this link will be able to guide you through Affiliatly: https://affiliatly.helpscoutdocs.com/article/137-affiliate-panel-overview</p> */}

          <AffiliateForm />
        </div>
    <Footer />
    </>
  )
}

export default affiliate