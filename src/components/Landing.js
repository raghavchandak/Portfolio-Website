import React, { useState, useEffect } from "react";
import * as constants from "../constants";
import "../styles/landing.css";
import { FaCode } from "@react-icons/all-files/fa/FaCode";
import { FaFutbol } from "@react-icons/all-files/fa/FaFutbol";
import { FaMusic } from "@react-icons/all-files/fa/FaMusic";
import { FaSuitcaseRolling } from "@react-icons/all-files/fa/FaSuitcaseRolling";

function Landing() {
  const [containerClass, setContainerClass] = useState(false);

  useEffect(() => {
    setTimeout(() => setContainerClass(true), 6000);
  }, []);

  return (
    <div
      className="landing-main"
      style={{ backgroundColor: constants.BG_COLOR }}
    >
      <div className={containerClass ? "landing-open" : "landing-container"}>
        {/* <div className="icon-container">
          <FaCode size={"5vw"} className="landing-icons" /> <br />
          <FaFutbol size={"5vw"} className="landing-icons" />
        </div> */}
        <div id="scroll-container">
          <FaCode size={"5vw"} className="scroll-icon" />
          <br />
          <FaFutbol size={"5vw"} className="scroll-icon" />
          <br />
          <FaMusic size={"5vw"} className="scroll-icon" />
          <br />
          <FaSuitcaseRolling size={"5vw"} className="scroll-icon" />
          <br />
        </div>
      </div>
    </div>
  );
}

export default Landing;
