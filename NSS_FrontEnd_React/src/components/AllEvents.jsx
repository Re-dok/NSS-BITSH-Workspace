import MajorDisplayCard from "./MajorDisplayCard";
import CardDataFile from '../assets/Data/AllEventsCardsData.json';
import { LinearProgress } from "@mui/material";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Button from '@mui/material/Button';
import { Link} from "react-router-dom"
import { useMediaQuery } from '@mui/material';

export default function AllEvents() {
  const [cardDatalocal, setCardDatalocal] = useState([]);
  const location = useLocation(); // Access location object from React Router
  const [showButton, setShowButton] = useState(false);
  const isSmallMobile = useMediaQuery('(min-width:320px) and (max-width:480px)');

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

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500 && 
        window.scrollY+window.innerHeight<window.document.documentElement.scrollHeight -350) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  if (cardDatalocal.length === 0) {
    return <LinearProgress />;
  }

  return (
    <>
    {showButton &&
      <Button 
      href="/"
      component={Link}
      to={"../events"}
      variant="contained"
      
      sx={{position:'fixed',
           bottom:'30px',
           right:'30px',
           borderRadius:'40px',
           height:isSmallMobile?'30px':'50px',
           width:isSmallMobile?'100px':'auto',
           fontSize:isSmallMobile?'0.5rem':'auto',
           padding:isSmallMobile?'0':'auto',
           backgroundColor:'#e66137',
           ":hover":{
            backgroundColor:'#ef6137'
           }
           }}>
        Back to Events
      </Button>
      }
      {cardDatalocal.map((cardData, index) => {
        let i=cardData.contentYear+cardData.contentHeading+"";
        return (
        <MajorDisplayCard 
          id={i.toLowerCase()}
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
      )})}
      
    </>
  );
}
