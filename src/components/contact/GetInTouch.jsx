import React from "react";
import "./GetInTouch.css";
import mail_icon from "../../assets/img/mail.svg";
import location_icon from "../../assets/img/location.svg";
import call_icon from "../../assets/img/call.svg";

const GetInTouch = () => {
  return (
    <div className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src="" alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h2>Let's talk</h2>
          <p>I'm currently available to take new projects, so feel free</p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" /> <p>Elinemadso@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="" /> <p>+47 41365261</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" /> <p>Moss, Norge</p>
            </div>
          </div>
        </div>
        <form className="contact-right">
          <label>Your Name</label>
          <input type="text" placeholder="Enter your name" name="name" />
          <label>Your Email</label>
          <input type="email" placeholder="Enter your email" name="email" />
          <label>Write your message here</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter your message"
          ></textarea>
          <button type="submit" className="contact-submit">
            {" "}
            Submit now
          </button>
        </form>
      </div>
    </div>
  );
};
export default GetInTouch;
