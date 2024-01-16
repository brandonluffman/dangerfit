import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { AiFillStar } from 'react-icons/ai'
import AffiliateForm from '../components/AffiliateForm'
import Head from 'next/head'

const affiliate = () => {
  return (
    <>
        <Head>
          <title>Affiliate</title>
          <meta name="description" content="Danger Fit: Unparalleled gym equipment."/>
          <meta charSet="utf-8" />
          <meta name="robots" content="index, follow" />
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <link rel="icon" type="image/png" href="/favicon.png" alt="Favicon" />
          <link rel="apple-touch-icon" href="/favicon.png" /> 
          <link rel="canonical" href="https://dangerfit.com/affiliate"/>
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
    {/* <div className='affiliate-container'>
          <h1 className='affiliate-header green-font'>Team 1%</h1>
          <div className='affiliate-emoji'>&#129309;</div>
          <div className='flexer'>
          <p className='affiliate-p'>Get ready to elevate your fitness journey with our exceptional gym equipment lineup. We are a dedicated community of individuals committed to self-improvement, pushing ourselves beyond limits to achieve greatness. Embracing sacrifice and relentless dedication, we forge ahead on the path to becoming the best versions of ourselves. Join us in our pursuit of excellence, as we break barriers and conquer new fitness heights. Together, let&apos;s unleash our full potential, fueled by the power of Danger Fit and the spirit of Team 1%.</p>
                   <img src='/hall.png' className='affiliate-img'></img>

          </div>
          <div className='flexer'>
          <img src='/affiliate-banner.png' className='affiliate-img affiliate-img-2'></img>
          <p className='affiliate-p'>Starting out as an affiliate for Danger Fit you&apos;ll earn a competitive 10% commission for each sale generated through your unique affiliate links. By leveraging your marketing skills, building an engaged audience, and driving traffic to Danger Fit&apos;s website, you&apos;ll have the potential to earn a significant income. As you grow and demonstrate your value, there may be opportunities to increase your commission rate and unlock even greater earning potential.</p>
    </div>
          <AffiliateForm />
        </div> */}
    <Footer />
    </>
  )
}

export default affiliate

          {/* <p className='affiliate-p'>Once you have signed up here, please log in to https://www.affiliatly.com/ and check out your Affiliate dashboard. If you need any help, this link will be able to guide you through Affiliatly: https://affiliatly.helpscoutdocs.com/article/137-affiliate-panel-overview</p> */}
