import React from "react";
import "./Card.css";
const Card = () => {
  return (
    <>
      <div className="card_div">
        <div className="card">
          <i className=" card_icon far fa-file-code"></i>
          <h3>Agile Software Development</h3>
          <p>
            All of our teams follow Scrum methodology, which has proven to give
            great results and keep all the project stakeholders in sync.
          </p>
        </div>
        <div className="card">
          <i className=" card_icon fas fa-users"></i>
          <h3>Regular calls and meetings</h3>
          <p>
            One of our top priorities is quick reaction time and accessibility.
            Our team is always a phone call, skype call or email away.
          </p>
        </div>

        <div className="card">
          <i className=" card_icon far fa-handshake"></i>
          <h3>High Personal Involvement</h3>
          <p>
            From leadership to teams on the ground, we’re all genuinely
            passionate about what we do and are always striving to be leaders in
            our field,
          </p>
        </div>
      </div>
      <div className="card_div">
        <div className="card">
          <i className=" card_icon far fa-file-code"></i>
          <h3>Agile Software Development</h3>
          <p>
            All of our teams follow Scrum methodology, which has proven to give
            great results and keep all the project stakeholders in sync.
          </p>
        </div>
        <div className="card">
          <i className=" card_icon fas fa-users"></i>
          <h3>Regular calls and meetings</h3>
          <p>
            One of our top priorities is quick reaction time and accessibility.
            Our team is always a phone call, skype call or email away.
          </p>
        </div>
        <div className="card">
          <i className=" card_icon fas fa-users"></i>
          <h3>Best Development Practices</h3>
          <p>
            With us, you can rely on a stable demo environment, adept QA and
            testing, always accessible and secure code, and fast deploying.
          </p>
        </div>
      </div>
    </>
  );
};

export default Card;
