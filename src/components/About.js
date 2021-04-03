import React from "react";
import "./About.css";
import image from "../images/deve.jpg";
import image2 from "../images/men.jpg";
import image3 from "../images/men2.jpg";
import image4 from "../images/women.jpg";
import Footer from "./Footer";
const About = () => {
  return (
    <>
      <div className="about_header">
        <div className="main">
          <hr className="divider" />
          <h1>About Us</h1>
          <hr className="divider" />
        </div>
      </div>
      <section className="development_section">
        <div className="develo_image">
          <img src={image} alt="" />
        </div>
        <div className="develo_text">
          <h1> software development</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <div className="project">
            <h2>400 + Project Completed</h2>
            <h2>160 + Satisfied Clients</h2>
          </div>
        </div>
      </section>
      <section className="tools">
        <h4>OUR CORE VALUES</h4>
        <h1>Create Awesome Service With Our Tools</h1>
        <div className="tools_card_div">
          <div className="tools_card">
            <i className="tools_icon fab fa-acquisitions-incorporated"></i>
            <h3>HONESTY</h3>
            <p>
              Honesty is measured in terms of the relationship of trust we have
              with our customers. Our proposals represent a breakthrough value
              proposition with an honest and fair charge for the work proposed
              presented in a clear and upfront manner.
            </p>
          </div>
          <div className="tools_card">
            <i className="tools_icon fab fa-accessible-icon"></i>
            <h3>PRIDE</h3>
            <p>
              Our team will always represent the pride we have in the quality
              and integrity of the work we do. We seek feedback from our clients
              and our people to ensure our processes and tools are the best
              possible to meet the values and standards of our Brand.
            </p>
          </div>
          <div className="tools_card">
            <i className="tools_icon fab fa-algolia"></i>
            <h3>IMPROVEMENT</h3>
            <p>
              codepopular Solutions is a quality focused organization
              underpinned by a process of Continuous Improvement. All our
              processes are completed with a final review step where we will
              reflect on the task completed and measure the quality of our
              output.
            </p>
          </div>
        </div>
      </section>
      <section className="team_section">
        <h4>Team</h4>
        <h1>Meet Our Team</h1>
        <div className="team_card_div">
          <div className="team_card">
            <img src={image2} alt="" />
            <h3>Jhone Brown</h3>
            <p>Sr. Graphic Designer</p>
            <i className="team_icon fab fa-facebook"></i>
            <i className="team_icon fab fa-instagram"></i>
            <i className="team_icon fab fa-twitter"></i>
            <i className="team_icon fab fa-linkedin-in"></i>
          </div>
          <div className="team_card">
            <img src={image4} alt="" />
            <h3>Jessica Twain</h3>
            <p>Founder &amp; CEO</p>
            <i className="team_icon fab fa-facebook"></i>
            <i className="team_icon fab fa-instagram"></i>
            <i className="team_icon fab fa-twitter"></i>
            <i className="team_icon fab fa-linkedin-in"></i>
          </div>
          <div className="team_card">
            <img src={image3} alt="" />
            <h3>Telewal</h3>
            <p>Web Development Leader</p>
            <i className="team_icon fab fa-facebook"></i>
            <i className="team_icon fab fa-instagram"></i>
            <i className="team_icon fab fa-twitter"></i>
            <i className="team_icon fab fa-linkedin-in"></i>
          </div>
        </div>
      </section>
      <section className="update_section">
        <div className="main_text">
          <h4>Get Started Instantly!</h4>
          <h1>Get the only new update from this newsletter</h1>
          <input type="email" placeholder="Enter your email" />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default About;
