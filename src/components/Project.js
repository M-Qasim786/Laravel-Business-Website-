import React from "react";
import "./Project.css";
import pic from "../images/ear.jpg";
import pic2 from "../images/glas.jpg";
import pic3 from "../images/watch.jpg";
import pic4 from "../images/ear3.jpg";
import pic5 from "../images/shose.jpg";
import pic6 from "../images/table.jpg";
import pic7 from "../images/watch3.jpg";
import pic8 from "../images/phone2.jpg";
import pic9 from "../images/shose2.jpg";
import Button from "@material-ui/core/Button";
import Footer from "./Footer";
const Project = () => {
  return (
    <>
      <div className="about_header">
        <div className="main">
          <hr className="divider" />
          <h1>Project</h1>
          <hr className="divider" />
        </div>
      </div>
      <section className="project_section">
        <h4>Project</h4>
        <h1>Our Project For Client</h1>
        <div className="list">
          <ul>
            <li> Web Design</li>
            <li>Web Development</li>
            <li> Graphic Design</li>
          </ul>
        </div>
        <div className="project_card_div">
          <div className="project_card">
            <img src={pic} alt="" />
            <h3>One Page Template</h3>
          </div>
          <div className="project_card">
            <img src={pic3} alt="" />
            <h3>Electro Template</h3>
          </div>
          <div className="project_card">
            <img src={pic2} alt="" />
            <h3>Photobooth Studio</h3>
          </div>
        </div>
        <div className="project_card_div">
          <div className="project_card">
            <img src={pic4} alt="" />
            <h3>Ecommerce Website | Sowda</h3>
          </div>
          <div className="project_card">
            <img src={pic5} alt="" />
            <h3>Image Retouching</h3>
          </div>
          <div className="project_card">
            <img src={pic6} alt="" />
            <h3>Background Removal</h3>
          </div>
        </div>
        <div className="project_card_div">
          <div className="project_card">
            <img src={pic7} alt="" />
            <h3>Image masking</h3>
          </div>
          <div className="project_card">
            <img src={pic8} alt="" />
            <h3>Landing Page Development</h3>
          </div>
          <div className="project_card">
            <img src={pic9} alt="" />
            <h3>Responsive Template</h3>
          </div>
        </div>
      </section>
      <div className="partner_project">
        <div className="project_text">
          <h2>Do you have an interesting project? Let's talk about that!</h2>
          <Button className="partner_btn" variant="contained" href="/contact">
            Start Project
          </Button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Project;
