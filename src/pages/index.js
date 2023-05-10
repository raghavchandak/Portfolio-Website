import React, { useEffect, useState } from "react";

//pages
import Landing from "../components/Landing";
import Layout from "../components/Layout";

//styles
import * as constants from "../constants";
import "../styles/index.css";

const IndexPage = () => {
  useEffect(() => {
    setTimeout(() => setShowLanding(false), 0);
  }, []);

  const [showLanding, setShowLanding] = useState(true);

  return showLanding ? (
    <Landing />
  ) : (
    <Layout>
      <main style={{ backgroundColor: constants.BG_COLOR }}>
        {
          <div className="home-div">
            <div>
              <h1>Busy</h1>
              <h1>Building</h1>
              <h1>Something</h1>
              <h1 className="awesome">Awesome.</h1>
            </div>
          </div>
        }
      </main>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
