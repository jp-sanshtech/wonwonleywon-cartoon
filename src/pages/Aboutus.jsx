import React from 'react';
import classes from "../../src/components/css/Home.module.css";
import Line from "../components/main/Line.jsx";
import BackButton from '../components/main/BackButton.jsx';

const Aboutus = () => {
  return (
    <div className={classes.links}>
      <BackButton />
      <Line
        to="/world/oneofoneluxury"
        className={classes.navLink}
        style={{ flexDirection: 'column', alignItems: 'flex-start', padding: '1rem' }}
      >
        <p>
        we are a private members club that hosts exclusive parties, worldwide, for our members and their guests. we hope these parties will provide the attendees entertainment or joy, to support them to become the best version of themselves.
        </p>
        <p style={{ margin: 0 }}>
          we are a company of the{" "}
          <a
            href="https://www.wonwonleywon.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "black", textDecoration: "underline" }}
          >
            wonwonleywon
          </a>
          {" "}fashion brand.
        </p>
      </Line>
    </div>
  );
};

export default Aboutus;
