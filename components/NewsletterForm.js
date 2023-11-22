
import { useState } from 'react';

const NewsletterForm = () => {
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
  

  return (
    <div className='newsletter-container'>
                  <h2 className='newsletter-header'>Join the Newsletter</h2>
                  <h6 className='newsletter-subheader'>Sign up to be the first to find out when we add new products, apparel, and more. We respect your privacy and will never share your information with any third-party vendors.</h6>

    <form className='newsletter-form' onSubmit={handleSubmit}>
      <input
        type="email"
        name="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className='newsletter-input'
        required
      />
      <button type="submit" className='newsletter-button btn-primary'>Subscribe</button>
    </form>
    </div>
  );
};

export default NewsletterForm;
