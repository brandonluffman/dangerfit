import React, {useState, useEffect} from 'react';
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { AiFillStar } from 'react-icons/ai'
import { MdVerified } from "react-icons/md";
import Link from 'next/link'
import Popup from '../components/Popup';

export default function Home() {
  const maintenance = false;

  const [isPopupOpen, setPopupOpen] = useState(true); // Set to true initially

  useEffect(() => {
    // Check if the popup has already been shown in this session
    const hasShownPopup = sessionStorage.getItem('hasShownPopup');
  
    if (hasShownPopup) {
      // If it has been shown, set the popup state to false
      setPopupOpen(false);
    } else {
      // If not shown before, set the item in session storage
      sessionStorage.setItem('hasShownPopup', 'true');
    }
  }, []);
  
  // Your closePopup function remains the same
  const closePopup = () => setPopupOpen(false);
  return (
   <>
    {maintenance ? (
      <div className='black-splash'>      
      <div className='index-stars index-splash'>
      <AiFillStar className='index-star'/>
      <AiFillStar className='index-star'/>
      <AiFillStar className='index-star'/>
      <AiFillStar className='index-star'/>
      <AiFillStar className='index-star'/>
    </div>
    <h1 className='index-header'>Danger Fit</h1></div>
    ):(
      <>
      <Navbar />
      <div className='index-container'>
      {/* <button onClick={openPopup}>Open Popup</button> */}
      <Popup isOpen={isPopupOpen} onClose={closePopup}>
        <p>This is the popup content!</p>
      </Popup>
      <div className='videoContainer'>
        <video autoPlay loop muted playsInline className='video'>
          <source src="/lifting.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className='index-stars'>
        <AiFillStar className='index-star'/>
        <AiFillStar className='index-star'/>
        <AiFillStar className='index-star'/>
        <AiFillStar className='index-star'/>
        <AiFillStar className='index-star'/>
      </div>
      <h1 className='index-header'>Danger Fit</h1>
      <Link href='https://75536e-2.myshopify.com/'><button className='btn btn-black landing-btn'>Shop Now</button></Link>
  
        {/* <h1>DANGERFIT</h1> */}
        </div>
  <div className='index-about-container'>
  <h6 className='index-about-subheader'>At Danger Fit, our mission is to engineer the <i className='green-font'>ultimate</i> workout experience, maximizing efficiency and effectiveness for every fitness journey!</h6>
  <div className='index-about-img-container'>
      <div className='index-about-div'>
  
      <h2 className='left-arrow-text green-font'>Brian Monk</h2>
      <h6 className='left-arrow-subtext'>CEO</h6>
      <Link href='/team-danger'><div className='learn-more-btn-monk learn-more-btn'></div></Link>
      {/* <img src='/arrow.png' className='arrow left-arrow'></img> */}
      </div>  
      <div className='index-about-div'>
  
      <h2 className='right-arrow-text green-font'>James Jardine</h2>
      <h6 className='right-arrow-subtext'>COO</h6>
      <Link href='/team-danger'><div className='learn-more-btn-james learn-more-btn'></div></Link>
      {/* <img src='/arrow.png' className='arrow right-arrow'></img> */}
      </div>
  
      </div>
      <img className='index-about-main-img' src='/statue.jpeg'></img>
  
  
  
  
  
      
      <h6 className='index-about-header center-text live-dangerous-tag'>Live Dangerously</h6>
      <div className='index-about-p-container'>
      <p className='index-about-p'><span className='about-p-grey'>Introducing Danger Fit,</span><br></br><br></br> a veteran-owned enterprise established in 2022 at Penn State University. Our unwavering mission is to revolutionize the fitness industry, dedicated to crafting the most efficient workout experiences imaginable for you!</p>
      <div className='index-about-img-div'>
  
      <img className='index-about-img' src='/veterans.jpeg'></img>
      </div>
      <div className='index-about-img-div'>
  
      <img className='index-about-img' src='/lat.PNG'></img>
      </div>
      <p className='index-about-p'><span className='about-p-grey'>At Danger Fit, we...</span><br></br><br></br> transcend the ordinary. We offer an exclusive range of gym apparel tailored for those who are committed to achieving their best selves. Our upcoming innovation, <q>The Battle Bar</q>, set to launch this winter, is a game-changer. This revolutionary multiple grip cable attachment promises unparalleled comfort and formidable strength, elevating your workout to new heights.</p>
      <p className='index-about-p'><span className='about-p-grey'>What sets us apart?</span><br></br><br></br> We&apos;re more than just a company; we&apos;re a community. We&apos;re driven by the desire to empower individuals to become the best versions of themselves. Our platform serves as a beacon of motivation, designed to inspire and uplift. We believe in the power of hard work, discipline, and the pursuit of success.</p>
      <div className='index-about-img-div'>
      <img className='index-about-img group-img' src='/group.jpg'></img>
      </div>
      <div className='index-about-img-div launchbox-img-div'>
  
      <img className='index-about-img launchbox-img' src='/launchbox-new.png'></img>
      </div>
      <p className='index-about-p'><span className='about-p-grey'>Launchbox Contenders</span><br></br><br></br>Having clinched the 2nd position in the prestigious Happy Valley Launchbox Final Pitch Contest, we stand as a testament to our dedication and innovation. As veterans in the industry, we understand the importance of quality, which is why each product we engineer is tested and approved by real gym enthusiasts.</p>
      <p className='index-about-p'><span className='about-p-grey'>Stay Tuned...</span><br></br><br></br>As we look ahead, our commitment to pushing boundaries remains unwavering. Stay tuned for a lineup of cutting-edge gym equipment, meticulously crafted to redefine your fitness journey.</p>
      <div className='index-about-img-div'>
  
      <img className='index-about-img white-img dangerfit-img' src='/danger-fit-logo.png'></img>
      </div>
      <div className='last-item'>
      <MdVerified className='verified-icon' />
      <p className='index-about-p last-item-p'> Experience Danger Fit, where passion meets performance, and together, we forge a path to greatness.</p>
      <Link href='https://75536e-2.myshopify.com/'><button className='btn btn-black last-item-btn'>Shop Now</button></Link>
      </div>
      </div>
  </div>
      <Footer />
      </>

    )}
   </>
  )
}
