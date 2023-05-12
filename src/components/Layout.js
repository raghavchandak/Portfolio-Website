import React from "react";
import Navbar from "./Navbar";
import * as constants from "../constants";
import { motion } from "framer-motion";

function Layout({ children }) {
  return (
    <div
      className="layout"
      style={{
        backgroundColor: constants.BG_COLOR,
        height: "100vh",
        width: "100vw",
      }}
    >
      <motion.main
        initial={{ opacity: 0, y: -200 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 200 }}
        transition={{
          type: "spring",
          mass: 0.2,
          stiffness: 40,
          duration: 5,
        }}
      >
        <Navbar />
      </motion.main>
      <motion.main
        initial={{ opacity: 0, x: -200 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 200 }}
        transition={{
          type: "spring",
          mass: 0.2,
          stiffness: 50,
          duration: 10,
          delay: 1
        }}
      >
        {children}
      </motion.main>
    </div>
  );
}

export default Layout;
