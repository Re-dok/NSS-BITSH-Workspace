import EventsJumbotron from "./EventsJumbotron"
import MajorDisplayCard from "./MajorDisplayCard"
import Typography from '@mui/material/Typography'
import { useState,useEffect } from "react"
import CardDataFile from '../assets/Data/EventsCardsData.json'
import { LinearProgress } from "@mui/material"

export default function Events(){

const [cardDatalocal, setCardDatalocal] = useState([]);
  useEffect(() => {
      setCardDatalocal(CardDataFile.cardData);
}, []);

//app doesnt break while fetching and displays a loading "bar"
if (cardDatalocal.length === 0) {
      return <LinearProgress />;
    }

      return (
            <>
            <EventsJumbotron/>
                  <Typography variant="h3" 
                              color="white"
                              textAlign={"center"}
                              margin={"15px"}>
                  Latest
                  </Typography>
            {cardDatalocal.map((cardData, index) => (
            <MajorDisplayCard 
                  key={index}
                  index={index}
                  imgL={cardData.contentImageLink}
                  contentYear={cardData.contentYear}
                  contentHeading={cardData.contentHeading}
                  contentText={cardData.contentText}
        />
      ))}

            </>     
      )
} 