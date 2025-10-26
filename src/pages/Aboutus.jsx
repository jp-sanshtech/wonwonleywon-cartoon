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
        we are a cartoon character company. our mission: make planet earth a better place. we attempt to achieve
        this mission through collectibles, content, and nft projects featuring our human cartoons. we also hope these
        characters can support our viewers/owners to become the best version of themselves.

        <p style={{ marginLeft: "-7px" }}>
          note - we plan to build this company into a next generation character ip (from our human cartoons), that
          utilizes nfts, web3, and blockchain technology to deliver long term value through ownership, community,
          and culture, across both physical and digital experiences. this ensures your investment and involvement in
          wonwonleywon cartoon is future ready, aligned with the technologies and cultural shifts shaping the next
          decade.
        </p>

        <p style={{ marginLeft: "-7px" }}>
          we are a company of the{" "}
          <a
            href="https://www.wonwonleywon.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "black", textDecoration: "underline", padding: "0px" }}
          >
            wonwonleywon
          </a>{" "}
          fashion brand.
        </p>
      </Line>
    </>
  );
};

export default Aboutus;
