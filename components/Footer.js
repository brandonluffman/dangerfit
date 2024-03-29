// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {  faFacebookF, faInstagram, faLinkedin, faLinkedinIn, faTwitter , } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';
import {GoMail } from 'react-icons/go';
import {IoIosPhonePortrait} from 'react-icons/io';
import NewsletterForm from '../components/NewsletterForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faFacebookF, faInstagram, faLinkedinIn, faSpotify, faTiktok, faTwitter } from '@fortawesome/free-brands-svg-icons';
const Footer = () => {
  return (
    <div>
    <footer className="footer">
      <div className="footer-container" id="services">
           <div className='footer-top'>
            <div className='footer-brand-container'>
              <div className='footer-brand-img'>
                  <img src='/danger-fit-logo.png' className='footer-brand-logo'></img>
                  <div className='social-icons'>
                <Link href='https://www.tiktok.com/@dangerfitllc?_t=8hAwXf58fgh&_r=1' target='_blank' rel='no-referrer' ><FontAwesomeIcon className="fa-brands fa-tiktok social-icon" icon={faTiktok} alt='Social Icon' /></Link>
                <Link href='https://www.instagram.com/dangerfitllc/' target='_blank' rel='no-referrer' ><FontAwesomeIcon className="fa-brands fa-instagram social-icon" icon={faInstagram} alt='Social Icon' /></Link>
                <Link href='https://open.spotify.com/playlist/2b8HbnXxdXVF7aaxfRWsf2?si=c9b0ab7109c24924' target='_blank' rel='no-referrer' ><FontAwesomeIcon className="fa-brands fa-spotify social-icon" icon={faSpotify} alt='Social Icon' /></Link>
                <Link href='https://1stphorm.com/BMONK' target='_blank' rel='no-referrer' className='phorm-link'><img src='/phorm.webp' className='social-img'></img></Link>
              </div>
                  {/* <img src='/modern-logo.png' alt="Brand Logo" className='footer-brand-logo' loading="lazy" /> */}
                  {/* <h2 className='footer-brand-header'>Danger Fit</h2> */}
              </div>
              
              {/* <div className='social-icons'>
                <a href='https://twitter.com/PhxntomTech' target='_blank' rel='noreferrer' aria-label="Twitter"><FontAwesomeIcon className="fa-brands fa-twitter social-icon" icon={faTwitter} alt='Social Icon' /></a>
                <a href='https://www.facebook.com/profile.php?id=100084723462596' target='_blank' rel='noreferrer' aria-label="Facebook"><FontAwesomeIcon className="fa-brands fa-facebook social-icon" icon={faFacebookF} alt='Social Icon' /></a>
                <a href='https://www.instagram.com/phxntomtechnologies/' target='_blank' rel='noreferrer' aria-label="Instagram"><FontAwesomeIcon className="fa-brands fa-instagram social-icon" icon={faInstagram} alt='Social Icon' /></a>
                <a href='https://www.linkedin.com/company/phxntomtech' target='_blank' rel='noreferrer' aria-label="Linkedin" ><FontAwesomeIcon className="fa-brands fa-linkedin social-icon" icon={faLinkedinIn} alt='Social Icon' /></a>
              </div> */}
                            <NewsletterForm />

              </div>

              <div className='footer-links-container'>
                          {/* <div className='footer-links'>
                            <div className='footer-links-header'><p className='footer-link-header'>SHOP</p></div>
                            <Link href='/apparel'><div className='footer-link'>Apparel</div></Link>
                            <Link href='/products'><div className='footer-link'>Gym Gear</div></Link>
                            <Link href='/battlegrip'><div className='footer-link'>Battle Grip</div></Link>
                          </div> */}
                          {/* <div className='footer-links'>
                            <div className='footer-links-header'><p className='footer-link-header'>Examples</p></div>
                            <Link href='/resume-templates'><p className='footer-link'>Resume</p></Link>
                            <Link href='/cover-letter-templates'><p className='footer-link'>Cover Letter</p></Link>
                            <Link href='/resignation-letter-templates'><p className='footer-link'>Resignation</p></Link>
                            
                          </div> */}
                           <div className='footer-links contact-links'>
                            <p className='footer-links-header'>Company</p>
                            <Link href='/team-danger'><div className='footer-link'>About</div></Link>
                            <Link href='/contact'><div className='footer-link'>Contact</div></Link>
                            {/* <Link href='/affiliate'><p className='footer-link'>Affiliate</p></Link> */}
                            <Link href='/battlebar'><p className='footer-link'>Battle Bar</p></Link>

                            <Link href='https://danger-fit.myshopify.com/'><p className='footer-link'>Shop</p></Link>
                          </div>
                          <div className='footer-links contact-links'>
                            <p className='footer-links-header'>Resources</p>
                            <Link target='_blank' rel='noreferrer' href='/privacypolicy.html'><div className='footer-link tou-link'>Privacy Policy</div></Link>
                            <Link target='_blank' rel='noreferrer' href='/terms.html'><div className='footer-link tou-link'>Terms of Use</div></Link>
                            {/* <p className='footer-link'><GoMail className='footer-contact-icon' /> info@resumebuilderai.com</p> */}
                            {/* <p className='footer-link'><IoIosPhonePortrait className='footer-contact-icon' /> (203) 822-2311</p> */}
                          </div>
                         
                </div>
              </div>   
              <div className='copyright-footer'>
                  <p className='footer-copyright-content'>Copyright © {new Date().getFullYear()} <span className='copyright-brand'>Danger Fit</span> - All Rights Reserved.</p>
                  {/* <div className='copyright-footer-flexer'>
                  <Link target='_blank' rel='noreferrer' href='https://www.privacypolicygenerator.info/live.php?token=X9rYsibwbs1UKYQ41C7KL0IBJSIEOkts'><div className='footer-link tou-link'>Privacy Policy</div></Link>
                  <Link target='_blank' rel='noreferrer' href="https://www.termsofusegenerator.net/live.php?token=WtIAwIaSx5ilU5RgC3s2N2AtWAptbnTh"><div className='footer-link tou-link'>Terms of Use</div></Link>
                    </div> */}
              </div>
      </div>
    </footer>
    </div>
  )
}

export default Footer