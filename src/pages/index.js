import { graphql } from "gatsby";
import React, { useEffect, useState } from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

//pages
import Landing from "../components/Landing";
import Layout from "../components/Layout";

//styles
import * as constants from "../constants";
import "../styles/index.css";

const IndexPage = ({ data }) => {
  console.log(data);
  useEffect(() => {
    setTimeout(() => setShowLanding(false), 0);
  }, []);

  const [showLanding, setShowLanding] = useState(true);

  const image = getImage(data.allImageSharp.nodes[0]);
  const greetingImage = getImage(data.allImageSharp.nodes[2]);

  return showLanding ? (
    <Landing />
  ) : (
    <Layout>
      <main style={{ backgroundColor: constants.BG_COLOR }}>
        {
          <div className="home-div">
            <div className="home-text">
              <h1>BUSY</h1>
              <h1>BUILDING</h1>
              <h1>SOMETHING</h1>
              <h1 className="awesome">AWESOME.</h1>
            </div>
            <GatsbyImage image={image} className="home-img" />
          </div>
        }
      </main>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;

export const query = graphql`
  query HomePageQuery {
    allImageSharp {
      nodes {
        gatsbyImageData
      }
    }
  }
`;
