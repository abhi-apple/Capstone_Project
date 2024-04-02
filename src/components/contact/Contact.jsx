import React, { useState } from "react";
import Back from "../common/back/Back";
import "./contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send POST request to server
    fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      // Handle success or display message to the user
    })
    .catch(error => {
      console.error('Error:', error);
      // Handle error or display error message to the user
    });
  };

  return (
    <>
      <Back title='Contact us' />
      <section className='contacts padding'>
        <div className='container shadow flexSB'>
          <div className='left row'>
            <img src="sb.jpg" alt="" />
          </div>
          <div className='right row'>
            <h1>Contact us</h1>
            <p>We're open for any suggestion or just to have a chat</p>

            <div className='items grid2'>
              <div className='box'>
                <h4>ADDRESS:</h4>
                <p>404, Jane Corporate Park, Bandra West, Mumbai</p>
              </div>
              <div className='box'>
                <h4>EMAIL:</h4>
                <p>seekhobharat@gmail.com</p>
              </div>
              <div className='box'>
                <h4>PHONE:</h4>
                <p>+91 2332900124</p>
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              <div className='flexSB'>
                <input type='text' name='name' placeholder='Name' value={formData.name} onChange={handleChange} />
                <input type='email' name='email' placeholder='Email' value={formData.email} onChange={handleChange} />
              </div>
              <input type='text' name='subject' placeholder='Subject' value={formData.subject} onChange={handleChange} />
              <textarea name='message' cols='30' rows='10' value={formData.message} onChange={handleChange}>
                Create a message here...
              </textarea>
              <button type='submit' className='primary-btn'>SEND MESSAGE</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
