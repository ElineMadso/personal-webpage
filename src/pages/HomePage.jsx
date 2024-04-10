import React from "react";
import "../styling/homePageStyle.css";
const HomePage = () => {
  return (
    <>
      <div className={"grid-container"}>
        <div className={"section section1"}>
          <p className={"intro-1"}>Hi, I'm Eline Madsø,</p>
          <h1 className={"intro-2"}>A freelance UX / interaction Designer</h1>
          <button className={"get-in-touch-button"}>Get in Touch</button>
        </div>
        <div className={"section section2"}>
          <h2 className={"headline"}>headline</h2>
        </div>
        <div className={"section section3"}>
          <p className={"words-about-me"}>Ord om meg</p>
          <button className={"about-me-button"}>About me</button>
        </div>
        <div className={"section section4"}>
          <p className={"offer-text"}>What can I do?</p>
        </div>
        <div className={"area banner"}></div>
      </div>
    </>
  );
};
export default HomePage;
