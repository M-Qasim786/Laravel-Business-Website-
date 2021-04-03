import React from 'react'
import './Service.css';
import Card2 from './Card2'
import Footer from './Footer';
const Service = () => {
    
    return (
        <>
           <div className="about_header">
        <div className="main">
          <hr className="divider" />
          <h1>Services</h1>
          <hr className="divider" />
        </div>
      </div>
      <div className="service_style">
      <section className="help_section">
        <h5>Services</h5>
        <h1>How We Can Help?</h1>
        <Card2 />
      </section>  
      <section className="update_section">
        <div className="main_text">
          <h4>Get Started Instantly!</h4>
          <h1>Get the only new update from this newsletter</h1>
          <input type="email" placeholder="Enter your email" />
        </div>
      </section>
      <Footer/>
      </div>
       
        </>
    )
}


export default Service;
