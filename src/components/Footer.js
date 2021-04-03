import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="about_div">
          <h3>About Us</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book
          </p>
          <i className="footer_icon fab fa-facebook"></i>
          <i className="footer_icon fab fa-instagram"></i>
          <i className="footer_icon fab fa-twitter"></i>
          <i className="footer_icon fab fa-linkedin-in"></i>
          <i className="footer_icon fab fa-youtube"></i>
          <i className="footer_icon fab fa-google-plus"></i>
        </div>
        <div className="links_div">
          <h3>Importants Links</h3>
          <ul>
            <li>Get Quote</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Contact</li>
            <li>Project</li>
          </ul>
        </div>
        <div className="featured_div">
          <h3>Featured Service</h3>
          <ul>
            <li>Software Testing And QA</li>
            <li>Mobile App Development</li>

            <li>Web Development</li>
            <li>Mobile Games</li>
            <li>UI/UX Design</li>
          </ul>
        </div>
        <div className="call_div">
          <h3>Contact</h3>
          <ul>
            <li>383/a, Dijkot, Faisalabad, Pakistan</li>
            <li>info@youwebsite.com</li>
            <li>+1-202-555-0183</li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
