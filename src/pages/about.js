import React from "react";
import Layout from "../components/Layout";
import "../styles/about.css"
import * as constants from "../constants"

function About() {
  return (
    <Layout>
      <div className="about-div">
        <div className="intro">
          <h1 style={{color: constants.TEXT_COLOR}}>So, who am </h1>
          <h1 className="diff-color">{" "} I?</h1>
        </div>
      </div>
    </Layout>
  );
}

export default About;
