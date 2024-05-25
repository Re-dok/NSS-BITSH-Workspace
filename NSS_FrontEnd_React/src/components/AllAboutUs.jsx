import MajorDisplayCard from "./MajorDisplayCard";
import CardDataFile from '../assets/Data/AboutUsCardsData.json';
import { LinearProgress } from "@mui/material";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function AllAboutUs() {
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
      {cardDatalocal.map((cardData, index) => (
        <MajorDisplayCard 
          id={index.toString()}
          key={index}
          index={index}
          cardtheme="light"
          imgL={cardData.contentImageLink}
          contentText={cardData.contentText}
        />
      ))}
      {cardDatalocal.map((cardData, index) => (
        <MajorDisplayCard 
          id={(index + 2).toString()}
          key={index}
          index={index}
          cardtheme="light"
          imgL={cardData.contentImageLink}
          contentText={cardData.contentText}
        />
      ))}
      {cardDatalocal.map((cardData, index) => (
        <MajorDisplayCard 
          id={(index + 4).toString()}
          key={index}
          index={index}
          cardtheme="light"
          imgL={cardData.contentImageLink}
          contentText={cardData.contentText}
        />
      ))}
    </>
  );
}
