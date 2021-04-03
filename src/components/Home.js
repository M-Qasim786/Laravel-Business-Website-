import React from "react";
import Button from "@material-ui/core/Button";
import "./Home.css";
import img from "../images/header.png";
import img2 from "../images/transform.jpg";
import img3 from "../images/experi.jpg";
import Card from "./Card";
import Card2 from "./Card2";
import Footer from "./Footer";
const Home = () => {
  return (
    <>
      <header className="hero_section">
        <div className="text_div">
          <h1>
            Innovating with a <span>Digital Mindset</span>
          </h1>
          <p>
            We provide end-to-end maintenance services to help clients with
            business-critical legacy systems resolve persistent issues and
            supercharge performance
          </p>
          <div className="buttons_div">
            <Button className="header_btn" variant="contained" href="/contact">
              Get Quote
            </Button>
            <Button className="header_btn" variant="contained" href="/contact">
              Contact Us
            </Button>
          </div>
        </div>
        <div className="image_div">
          <img src={img} alt="header-img" />
        </div>
      </header>
      <section className="business_section">
        <div className="solve_busi">
          <h5>HOW WE WORKS</h5>
          <h1>Solve Business Challenges With Us</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
        </div>
        <Card />
      </section>
      <section className="transform_section">
        <div className="transform_img">
          <img src={img2} alt="" />
        </div>
        <div className="transform_text">
          <h5>About Us</h5>
          <h1>
            We are a boutique digital transformation consultancy and software
            development company
          </h1>
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
          <Button className="transform_btn" variant="contained" href="/about">
            More Details
          </Button>
        </div>
      </section>
      <section className="help_section">
        <h5>Services</h5>
        <h1>How We Can Help?</h1>
        <Card2 />
      </section>
      <section className="experience_section">
        <div className="experi_tex">
          <h5>WHY CHOOSE US</h5>
          <h1>Outstanding Digital Experience</h1>
          <p>
            We believe that our transparency with our clients is what sets us
            apart from our competition.If you are looking for a trusted IT
            partner and your company shares similar standards to our company we
            would really like to hear from you
          </p>

          <h2>
            {" "}
            <i className=" experi_icon fas fa-check"></i> CUSTOMER FOCUSED
          </h2>
          <p>
            We simply listen to our clients. Our dedicated account management
            team is in constant contact with our customers to ensure that we
            deliver in every aspect of our dealings.
          </p>
          <h2>
            {" "}
            <i className=" experi_icon fas fa-check"> </i> PROCESS ORIENTED
          </h2>
          <p>
            We are a process oriented organization. This ensures prompt and high
            quality delivery from simple helpdesk tasks to complex multi vendor
            projects with strict timeframes.
          </p>
          <h2>
            {" "}
            <i className=" experi_icon fas fa-check"> </i> CUTTING EDGE TOOLS
          </h2>
          <p>
            We believe in investing in our “tools of the trade”. Our company has
            made some significant investments in the most advanced tools that
            enable us to deliver in the most demanding environments.
          </p>
          <Button className="experi_btn" variant="contained" href="/service">
            Discover More
          </Button>
        </div>
        <div className="experi_image">
          <img src={img3} alt="" />
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

export default Home;
