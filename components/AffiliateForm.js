import React, { useState } from 'react';

const AffiliateForm = () => {
  const [formData, setFormData] = useState({
    facebook: '',
    instagram: '',
    twitter: '',
    tiktok: '',
    age: '',
    phone: '',
    city: '',
    state: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process form data here
    console.log('Form Data:', formData);
  };

  return (
    <form className='affiliate-form' onSubmit={handleSubmit}>
      <input
        type="text"
        name="facebook"
        value={formData.facebook}
        onChange={handleChange}
        placeholder="Facebook"
      />
      <input
        type="text"
        name="instagram"
        value={formData.instagram}
        onChange={handleChange}
        placeholder="Instagram"
      />
      <input
        type="text"
        name="twitter"
        value={formData.twitter}
        onChange={handleChange}
        placeholder="Twitter"
      />
      <input
        type="text"
        name="tiktok"
        value={formData.tiktok}
        onChange={handleChange}
        placeholder="TikTok"
      />
      <input
        type="text"
        name="age"
        value={formData.age}
        onChange={handleChange}
        placeholder="Age *"
        required
      />
      <input
        type="text"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="Phone *"
        required
      />
      <input
        type="text"
        name="city"
        value={formData.city}
        onChange={handleChange}
        placeholder="City *"
        required
      />
      <input
        type="text"
        name="state"
        value={formData.state}
        onChange={handleChange}
        placeholder="State *"
        required
      />
      <button className='btn-primary affiliate-btn' type="submit">Submit</button>
    </form>
  );
};

export default AffiliateForm;
