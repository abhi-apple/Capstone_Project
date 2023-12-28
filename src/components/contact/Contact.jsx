import React from "react"
import Back from "../common/back/Back"
import "./contact.css"

const Contact = () => {
  const map ='jane.jpeg'
  const map2 ='jane2.jpeg'
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

            <form action=''>
              <div className='flexSB'>
                <input type='text' placeholder='Name' />
                <input type='email' placeholder='Email' />
              </div>
              <input type='text' placeholder='Subject' />
              <textarea cols='30' rows='10'>
                Create a message here...
              </textarea>
              <button className='primary-btn'>SEND MESSAGE</button>
            </form>

            
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
