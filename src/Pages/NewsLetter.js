import React, { useState } from 'react';
import axios from 'axios';

const NewsLetter = () => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const serviceId = 'service_rnojbhd';
    const templateId = 'template_mzv3crr';
    const publicKey = 'ybffibgzDjnGVHGSa';

    const data = {
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      template_params: {
        from_name: firstName, // Updated to use the firstName state
        from_email: email,
        city: city, // Added city
        country: country, // Added country
        to_name: 'PERKS',
        message: 'Subscribe me to the newsletter',
      },
    };

    try {
      await axios.post("https://api.emailjs.com/api/v1.0/email/send", data);
      // Reset the states to clear the form
      setEmail('');
      setFirstName('');
      setCity('');
      setCountry('');
      setSuccessMessage('Your email has been sent successfully!'); // Display success message
      setErrorMessage(''); // Clear error message on success
      setTimeout(() => setSuccessMessage(''), 5000); // Optional: Clear success message after 5 seconds
    } catch (error) {
      console.error(error);
      setErrorMessage('Failed to send the email. Please try again.'); // Display error message
      setSuccessMessage(''); // Clear success message on error
    }
  };

  return (
    <div className="rts-newsletter-section" id="contact">
      <div className="container">
        <div className="newsletter-inner">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="newsletter-box">
                <div className="section-title-area section-title-area1 text-start mb--50">
                  <img class="news-letter-logo" src="./images/perks-p-new-logo.svg"></img>
                  <h1 className="newsletter-section-title">By signing up for the PERKS whitelist, 
                  we’ll update you on upcoming drops from your favorite celebs and how you can receive perks from owning 
                  their autographs.</h1>
                      <h2 className="newsletter-section-subHeading">
                      Please fill in the form carefully and only sign up once. 
                      We will use a verification system to ensure each person has only one sign-up. 
                      We reserve the right to remove members who we believe have created multiple accounts,
                       provided false information, or completed the form incorrectly.
                      </h2>
                  {/* <p>Game Changer: Stay ahead of the game with our NFA Newsletter</p> */}
                </div>
                {successMessage && <div className="alert alert-success">{successMessage}</div>}
                {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
                <form onSubmit={handleSubmit} className='emailForm'>
                  <div className="form">
                    <input
                      type="text"
                      style={{ margin: '10px 0', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
                      className="form-control"
                      placeholder="Enter Your First Name"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      required
                    />
                    <input
                      type="email"
                      style={{ margin: '10px 0', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
                      className="form-control"
                      placeholder="Enter Your Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <input
                      type="text"
                      style={{ margin: '10px 0', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
                      className="form-control"
                      placeholder="Enter Your City"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                    />
                    <input
                      type="text"
                      style={{ margin: '10px 0', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
                      className="form-control"
                      placeholder="Enter Your Country"
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
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
