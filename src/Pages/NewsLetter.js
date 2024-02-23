import React, { useState } from 'react';
import axios from 'axios';

const NewsLetter = () => {
  const [email, setEmail] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const serviceId = 'service_87b1dy7';
    const templateId = 'template_mzv3crr';
    const publicKey = 'ybffibgzDjnGVHGSa';

    const data = {
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      template_params: {
        from_name: 'User', // Consider changing this based on your requirements
        from_email: email,
        to_name: 'PERKS',
        message: 'Subscribe me to the newsletter',
      },
    };

    try {
      await axios.post("https://api.emailjs.com/api/v1.0/email/send", data);
      setEmail(''); // Reset the email state to clear the form
      setSuccessMessage('Your email has been sent successfully!'); // Display success message
      setErrorMessage(''); // Ensure error message is cleared on success
      setTimeout(() => setSuccessMessage(''), 5000); // Optional: Clear success message after 5 seconds
    } catch (error) {
      console.error(error);
      setErrorMessage('Failed to send the email. Please try again.'); // Display error message
      setSuccessMessage(''); // Ensure success message is cleared on error
    }
  };

  return (
    <div className="rts-newsletter-section" id="contact">
      <div className="container">
        <div className="newsletter-inner">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="newsletter-box">
                <div className="section-title-area section-title-area1 text-start mb--50">
                  <h1 className="section-title">SUBSCRIBE NEWSLETTER</h1>
                  <p>
                    Game Changer: Stay ahead of the game with our NFA
                    Newsletter
                  </p>
                </div>
                {successMessage && <div className="alert alert-success">{successMessage}</div>}
                {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
                <form onSubmit={handleSubmit} className='emailForm'>
                  <div className="form">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter Your Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="button">
                    <button type="submit" className="btn">
                      SUBSCRIBE <i className="fal fa-long-arrow-right"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
