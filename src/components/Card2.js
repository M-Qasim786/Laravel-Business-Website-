import React from "react";
import "./Card2.css";
const Card2 = () => {
  return (
    <>
      <div className="service_card_section">
        <div className="service_card">
          <i className=" service_icon fas fa-mobile"></i>
          <h3>Mobile App Development</h3>
          <p>
            mobile app developers have been creating iOS and Android apps for so
            many years that it’s not just their passion
          </p>
        </div>
        <div className="service_card">
          <i className=" service_icon far fa-file-code"></i>
          <h3>Web Development</h3>
          <p>
            We’ve built mobile backend systems as well as web applications
            across numerous industry verticals. Whether it’s PHP.
          </p>
        </div>
        <div className="service_card">
          <i className=" service_icon fab fa-algolia"></i>
          <h3>UI/UX Design</h3>
          <p>
            Design is always a fundamental contributor to the experience of
            digital products. Even when you don’t have one.
          </p>
        </div>
      </div>
      <div className="service_card_section">
        <div className="service_card">
          <i className=" service_icon fas fa-gamepad"></i>
          <h3>Mobile Games</h3>
          <p>
            The gaming industry is at rise like never before and it’s not
            surprising why app ecosystems have dedicated their focus
          </p>
        </div>
        <div className="service_card">
          <i className=" service_icon fab fa-500px"></i>
          <h3>Software Testing And QA</h3>
          <p>
            software testing is a crucial part of each software development
            project. As a software outsourcing company with more than 5 years
          </p>
        </div>
        <div className="service_card">
          <i className=" service_icon fas fa-server"></i>
          <h3>Managed Maintenance Services</h3>
          <p>
            As mature problems-solvers, we have over a five year's of experience
            in tackling challenging business-critical projects
          </p>
        </div>
      </div>
    </>
  );
};

export default Card2;
