import React from "react";
import "../styling/homePageStyle.css";
const HomePage = () => {
  return (
      <>
          <div className={"background"}>
              <div className={"area1"}>
                <h1>Dette er hjemmesiden</h1>
              </div>
              <div className={"area2"}>
                  <h2 className={"headline"}>headline</h2>
              </div>
              <div className={"area3"}>
                  <p className={"words-about-me"}>Ord om meg</p>
                  <button className={"about-me-button"}>About me</button>
              </div>
              <div className={"area4"}>
                  <p>What can I do?</p>
              </div>
          </div>

      </>
  );
};
export default HomePage;
