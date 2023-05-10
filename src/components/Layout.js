import React from "react";
import Navbar from "./Navbar";
import * as constants from "../constants";

function Layout({ children }) {
  return (
    <div
      className="layout"
      style={{ backgroundColor: constants.BG_COLOR, height: "100vh" }}
    >
      <Navbar />
      {children}
    </div>
  );
}

export default Layout;
