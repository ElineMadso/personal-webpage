import React from "react";
import "./homePageStyle.css";
import heroImage from "../../assets/img/image-of-me.jpg";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <section className={"container-fluid"}>
      <div className={"row"}>
        <div className={"col"}>
          <div className={"section section1"}>
            <div className={"left-content"}>
              <p className={"intro-1"}>Hi, I'm Eline Madsø,</p>
              <h1 className={"intro-2"}>
                A freelance UX / interaction Designer
              </h1>
              <Link to="/personal-webpage/contactme">
                <button className={"get-in-touch-button"}>Get in Touch</button>
              </Link>
            </div>
            <div className="right-content">
              <img src={heroImage} alt="your Image" className="image1" />
            </div>
          </div>
        </div>
      </div>

      <div className={"row"}>
        <div className={"col"}>
          <div className={"section section2"}>
            <h2 className={"headline"}>headline</h2>
          </div>
        </div>
      </div>

      <div className={"row"}>
        <div className={"col"}>
          <div className={"section section3"}>
            <p className={"words-about-me"}>Ord om meg</p>
            <button className={"about-me-button"}>About me</button>
          </div>
        </div>
      </div>

      <div className={"row"}>
        <div className={"col"}>
          <div className={"section section4"}>
            <p className={"offer-text"}>What can I do?</p>
          </div>
        </div>
      </div>

      <div className={"row"}>
        <div className={"col"}>
          <div className={"area banner"}></div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
