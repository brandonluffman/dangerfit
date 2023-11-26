import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { AiFillStar } from 'react-icons/ai'
import { MdVerified } from 'react-icons/md'
import { FaTrademark } from "react-icons/fa";

const battlegrip = () => {
  return (
    <>
    <Navbar />
    <div className='battlegrip-container'>

            <h1 className='battlegrips-header-main'>BattleGrips <FaTrademark className='trademark-icon'/></h1>
            <div className='battlegrip-img-div'>
            <img src='/dumbell.png' className='battlegrips-img'></img>
            </div>
            <button className='btn btn-black last-item-btn'>Shop Now</button>

{/* 
            <h3 className='battlegrips-header'>Introducing Battle Grips by Danger Fit</h3>
            <p className='battlegrips-p'>Elevate your workouts to a new level of precision and power with our revolutionary Battle Grips. Designed for the fearless, crafted for the determined.</p>
            <h3 className='battlegrips-header'>Unleash Your Full Potential</h3>
            <p className='battlegrips-p'>Engineered for ultimate versatility, Battle Grips empower you to customize your grip placement with unmatched ease. Whether you&apos;re sculpting your physique or honing your strength, these grips adapt to your every move, providing unrivaled comfort and support.</p>
            <h3 className='battlegrips-header'>Wrist Freedom, Unleashed</h3>
            <p className='battlegrips-p'>For those who demand more than ordinary equipment, Battle Grips redefine the boundaries. No longer bound by rigid hand placements, your wrists experience a new realm of freedom. This unique feature ensures that every lift is executed with maximum precision and efficiency, giving you the edge you need to surpass your limits.</p>

            <h3 className='battlegrips-header'>Built Tough, Just Like You</h3>
            <p className='battlegrips-p'>Crafted with precision and passion, Battle Grips are forged from the highest quality materials. These grips are as resilient as the warriors who wield them, ensuring they stand the test of time, rep after rep.</p>

            <h3 className='battlegrips-header'>The Danger Fit Difference</h3>
            <p className='battlegrips-p'>At Danger Fit, we live dangerously and chase success relentlessly. As a veteran-owned and operated company, we understand the importance of efficiency in every workout. Battle Grips are a testament to our commitment to your fitness journey.</p> */}
    </div>

               

        <div className='index-about-p-container'>
    <p className='index-about-p'><span className='about-p-grey'>Introducing Battle Grips</span><br></br><br></br> Elevate your workouts to a new level of precision and power with our revolutionary Battle Grips. Designed for the fearless, crafted for the determined.</p>
    <div className='index-about-img-div'>

    <img className='index-about-img' src='/dumbell.png'></img>
    </div>
    <div className='index-about-img-div'>

    <img className='index-about-img' src='/lifting-shot.png'></img>
    </div>
    <p className='index-about-p'><span className='about-p-grey'>Unleash Your Full Potential</span><br></br><br></br>
    Engineered for ultimate versatility, Battle Grips empower you to customize your grip placement with unmatched ease. Whether you&apos;re sculpting your physique or honing your strength, these grips adapt to your every move, providing unrivaled comfort and support.</p>
    <p className='index-about-p'><span className='about-p-grey'>Wrist Freedom, Unleashed</span><br></br><br></br> For those who demand more than ordinary equipment, Battle Grips redefine the boundaries. No longer bound by rigid hand placements, your wrists experience a new realm of freedom. This unique feature ensures that every lift is executed with maximum precision and efficiency, giving you the edge you need to surpass your limits.</p>
    <div className='index-about-img-div'>
    <img className='index-about-img' src='/posing-shot.png'></img>
    </div>
    <div className='index-about-img-div'>
    <img className='index-about-img' src='/lifting-shot-2.png'></img>
    </div>
    <p className='index-about-p'><span className='about-p-grey'>Built Tough, Just Like You</span><br></br><br></br>Crafted with precision and passion, Battle Grips are forged from the highest quality materials. These grips are as resilient as the warriors who wield them, ensuring they stand the test of time, rep after rep.</p>
    <p className='index-about-p'><span className='about-p-grey'>The Danger Fit Difference</span><br></br><br></br>At Danger Fit, we live dangerously and chase success relentlessly. As a veteran-owned and operated company, we understand the importance of efficiency in every workout. Battle Grips are a testament to our commitment to your fitness journey.</p>
    <div className='index-about-img-div'>

    <img className='index-about-img white-img' src='/danger-fit-logo.png'></img>
    </div>
    <div className='specifications-item'>
    <h3 className='specs-header'>Specifications:</h3>
    <ul>
      <li><b className='specs-bold'>Material:</b> A36 Steel, Carabiner, Heavy Duty Rubber Hand Grips</li>
      <li><b className='specs-bold'>Dimensions:</b> 16 ¾ in x 2 ½ in</li>
      <li><b className='specs-bold'>Weight:</b> 3lbs</li>
    </ul>
    </div>
    <div className='last-item'>
    <MdVerified className='verified-icon' />
    <p className='index-about-p last-item-p'>Elevate your training, embrace the challenge, and conquer your goals with Battle Grips. Join the Danger Fit movement and experience fitness on your terms.</p>
    <button className='btn btn-black last-item-btn'>Shop Now</button>

    
    </div>
    </div>
    <Footer />
    </>
  )
}

export default battlegrip