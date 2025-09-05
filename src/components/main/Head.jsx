import React from 'react';
import { Link } from 'react-router-dom';
import classes from "../../components/css/Head.module.css";
import logo from "../../assets/logo3.png"; // Adjust the path as necessary

const Head = () => {
  return (
    <div className={classes.head}>
      <Link to="/">
        <img 
          src={logo} 
          alt="Logo" 
          style={{ height: '40px', width: 'auto' , marginLeft: '0px' , marginTop: '0px' }}
          className={classes.logo}
        />
      </Link>
      
    </div>
  );
};

export default Head;
