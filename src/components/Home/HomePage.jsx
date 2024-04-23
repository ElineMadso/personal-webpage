import React from "react";
import "./homePageStyle.css";
import heroImage from "../../assets/img/Untitled_Artwork 2.png";
import { Link } from "react-router-dom";
import rainbowImage from "../../assets/img/rainbow.jpg";

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
            <h2 className={"headline"}>Opplev designmagien</h2>
            <h3>Skreddersydde løsninger for en sømløs brukerinteraksjon</h3>
          </div>
        </div>
      </div>

      <div className={"row"}>
        <div className={"col"}>
          <div className={"section section3"}>
            <img src={rainbowImage} className="rainbowImage" alt={""} />
            <div className="right-content3">
              <p className={"words-about-me"}>
                Hei der! Finn ut mer om hvordan jeg kan hjelpe deg å bringe din
                visjon til liv!
              </p>
              <button className={"about-me-button"}>About me</button>
            </div>
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
