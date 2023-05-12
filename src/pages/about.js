import React from "react";
import Layout from "../components/Layout";
import "../styles/about.css";
import * as constants from "../constants";
import { FaLaptopCode } from "@react-icons/all-files/fa/FaLaptopCode";
import { FaFutbol } from "@react-icons/all-files/fa/FaFutbol";
import AnimateIn from "../utilities/AnimateIn";

function About() {
  return (
    <Layout>
      <div className="about-div">
        <div style={{ height: "86vh", width: "52vw" }}>
          <div className="intro">
            <h1 style={{ color: constants.TEXT_COLOR }}>So, who am </h1>
            <h1 className="diff-color"> I?</h1>
          </div>
          <div className="sub-heading" style={{ color: constants.TEXT_COLOR }}>
            <div className="sub">
              <FaLaptopCode size={"3vw"} className="icons" />
              <h2>Software Developer</h2>
            </div>
            <h2> | </h2>
            <div className="sub">
              <FaFutbol size={"2.5vw"} className="icons" />
              <h2>Soccer Enthusiast</h2>
            </div>
          </div>
          <p className="about-me" style={{ color: constants.TEXT_COLOR }}>
            Lorem ipsum dolor sit amet. In odit recusandae qui amet sapiente et
            voluptatum illum eos rerum ratione et repellendus aperiam est odio
            totam. 33 quos atque vel repellendus iste eos asperiores iusto eos
            nisi eligendi. Rem voluptas voluptatem id assumenda vitae a tempora
            voluptas aut incidunt quisquam ut velit repellendus et deleniti
            possimus rem cupiditate repellat. Aut corrupti incidunt et provident
            perspiciatis aut fugit doloribus et error aliquam et voluptatibus
            omnis et cumque vitae.
          </p>
        </div>
        <AnimateIn distance={100} triggerOnce={false} direction={"translateY"}>
          <div className="container">
            <h1 className="section-header">Software Developer</h1>
          </div>
        </AnimateIn>
        <AnimateIn distance={100} triggerOnce={false} direction={"translateX"}>
          <div className="container">
            <h1 className="section-header">Soccer Enthusiast</h1>
          </div>
        </AnimateIn>
      </div>
    </Layout>
  );
}

export default About;
