import BackButton from '../components/main/BackButton.jsx';
import Line from '../components/main/Line.jsx';
import classes from '../components/css/Home.module.css';


const Characters = () => {
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
        }}>
       
          characters coming soon
      </Line>
    </>
  );
};

export default Characters;
