import Jumbotron from "./Jumbotron"
import MajorDisplayCard from "./MajorDisplayCard"
import Typography from '@mui/material/Typography'
import { useState,useEffect } from "react"
import CardDataFile from '../assets/Data/EventsCardsData.json'
import {LinearProgress } from "@mui/material"

export default function Events(){

const [cardDatalocal, setCardDatalocal] = useState([]);
  useEffect(() => {
      setCardDatalocal(CardDataFile.cardData);
}, []);
const backgroundImageLink='./src/assets/Images/eventsBg.jpg';
//app doesnt break while fetching and displays a loading "bar"
if (cardDatalocal.length === 0) {
      return <LinearProgress />;
    }

      return (
            <div style={{backgroundColor:'#333232',paddingBottom:'15px'}}> 
            <Jumbotron
             heading={'Our '}
             heightlighterHeading={<span key="highlight" style={{color:"#f1633b"}}>Events</span>
            }
            bodyText={['Take a ride through our plethora of events and witness the journey we made so far!']}
            backgroundImageLink={backgroundImageLink}
            />
                  <Typography variant="h4" 
                              color="white"
                              textAlign={"center"}
                              margin={"15px"}>
                  Latest
                  </Typography>
            {cardDatalocal.map((cardData, index) => {
                  let i='../home#'+cardData.contentYear+cardData.contentHeading;
              return    (
            <MajorDisplayCard 
                  key={index}
                  buttonText='Read More'
                  contentButtonLink={i.toLowerCase()}
                  index={index}
                  imgL={cardData.contentImageLink}
                  contentYear={cardData.contentYear}
                  contentHeading={cardData.contentHeading}
                  contentText={cardData.contentText}
        />
      )})}

            </div>     
      )
} 