import React from "react";
import "./Contact.css";
import Button from "@material-ui/core/Button";
import Footer from "./Footer";

const Contact = () => {
  return (
    <>
      <div className="about_header">
        <div className="main">
          <hr className="divider" />
          <h1>Contact Us</h1>
          <hr className="divider" />
        </div>
      </div>
      <section className="contact_section">
        <div className="contact_card_div">
          <div className="contact_card">
            <i className="contact_icon fas fa-phone"></i>
            <h3>Phone / Fax</h3>
            <p>+1-202-555-0183</p>
            <p>+1-202-555-0145</p>
          </div>
          <div className="contact_card">
            <i className="contact_icon fas fa-envelope-open-text"></i>
            <h3>E-mail</h3>
            <p>qasim@youwebsite.com</p>
            <p>qasim@youwebsite.com</p>
          </div>
          <div className="contact_card">
            <i className="contact_icon fas fa-map-marker-alt"></i>
            <h3>Location</h3>
            <p>383/a, Dijkot Lamapind,</p>
            <p>Faisalabad, Pakistan</p>
          </div>
        </div>
      </section>
      <section className="info_section">
        <h1>Get in Touch</h1>
        <div className="form">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <p>Please solve the following math function: 9 - 5</p>
          <input type="text" placeholder="Answer" />
          <textarea
            name=""
            id=""
            cols="20"
            rows="5"
            placeholder="Your Message"
          ></textarea>
        </div>
        <Button className="contact_btn" variant="contained" href="/contact">
          Contact Us
        </Button>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
