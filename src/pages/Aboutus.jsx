import React from 'react';
import classes from "../../src/components/css/Home.module.css";
import Line from "../components/main/Line.jsx";
import BackButton from '../components/main/BackButton.jsx';

const Aboutus = () => {
  return (
    <>
      <BackButton />
      <Line
        className={classes.navLink}
         style={{
           display: "flex",
           alignItems: "center",
           padding: "1rem",
           flexWrap: "wrap",
          }}
      > 
        we are a private members club that hosts exclusive parties, worldwide, for our members and their guests. we hope these parties will provide the attendees entertainment or joy, to support them to become the best version of themselves.
        <p style={{ marginLeft: "-7px" }}>
          We are a company of the 
          <a
            href="https://www.wonwonleywon.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "black", textDecoration: "underline", padding: "5px" }}
          >
            wonwonleywon
          </a>
          fashion brand.
        </p>
      </Line>
    </>
  );
};

export default Aboutus;
