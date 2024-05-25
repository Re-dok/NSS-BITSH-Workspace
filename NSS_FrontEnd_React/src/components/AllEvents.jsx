import MajorDisplayCard from "./MajorDisplayCard";
import CardDataFile from '../assets/Data/AllEventsCardsData.json';
import { LinearProgress } from "@mui/material";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Button from '@mui/material/Button';
import { Link} from "react-router-dom"

export default function AllEvents() {
  const [cardDatalocal, setCardDatalocal] = useState([]);
  const location = useLocation(); // Access location object from React Router

  useEffect(() => {
    setCardDatalocal(CardDataFile.cardData);
  }, []);

  useEffect(() => {
      
    if (location.state && location.state.hash) {
      const element = document.getElementById(location.state.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  if (cardDatalocal.length === 0) {
    return <LinearProgress />;
  }

  return (
    <>
      <Button 
      href="/"
      component={Link}
      to={"../events"}
      variant="contained"
      sx={{position:'fixed',
           bottom:'30px',
           right:'30px',
           borderRadius:'40px',
           height:'50px',
           backgroundColor:'#e66137',
           ":hover":{
            backgroundColor:'#ef6137'
           }
           }}>
        Back to Events
      </Button>
      {cardDatalocal.map((cardData, index) => (
        <MajorDisplayCard 
          id={index.toString()}
          key={index}
          index={index}
          cardtheme="light"
          contentButtonLink={'../events'}
          transtionsActive='false'
          buttonText='Back To Events'
          imgL={cardData.contentImageLink}
          contentYear={cardData.contentYear}
          contentHeading={cardData.contentHeading}
          contentText={cardData.contentText}
        />
      ))}
      
    </>
  );
}
