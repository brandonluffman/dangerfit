import { useState } from 'react';
import { IoMdClose } from 'react-icons/io';

const Popup = ({ isOpen, onClose, children }) => {
  const [email, setEmail] = useState('');


  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch('/api/subscribe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });
  
    const data = await response.json();
    console.log(data); // You should handle the response accordingly
    setEmail('');
  };
  if (!isOpen) return null;

    return (
      <div className="popup">
        <div className="popup-content">
          {/* {children} */}
          <div>
            <h3 className="popup-header">Join our mailing list for 10% off at checkout!</h3>
            <p className="popup-subheader">Be the first to know about the Monkey Grips™, the Battle Bar, new apparel, and discounts and deals.</p>
            <div className='newsletter-container'>
                  {/* <h2 className='newsletter-header'>Join the Newsletter</h2>
                  <h6 className='newsletter-subheader'>Sign up to be the first to find out when we add new products, apparel, and more. We respect your privacy and will never share your information with any third-party vendors.</h6> */}

    <form className='newsletter-form newsletter-popup' onSubmit={handleSubmit}>
      <input
        type="email"
        name="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className='newsletter-input newsletter-input-popup'
        required
      />
      <button type="submit" className='newsletter-button btn-primary'>Subscribe</button>
    </form>
    </div>
          </div>
          <p className='popup-privacy'>We respect your privacy.</p>
          <button  className='popup-close' onClick={onClose}><IoMdClose /></button>
        </div>
        <style jsx>{`
          .popup {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.5);
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .popup-content {
            background: white;
            padding: 20px;
            border-radius: 5px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          }
        `}</style>
      </div>
    );
  };
  
  export default Popup;
  