import Jumbotron from "./Jumbotron"
import MajorDisplayCard from "./MajorDisplayCard"
import Typography from '@mui/material/Typography'
import { useState,useEffect } from "react"
import CardDataFile from '../assets/Data/EventsCardsData.json'
import {LinearProgress } from "@mui/material"
import moreCardsFile from '../assets/Data/MoreEventsCardsData.json'
import Grid from '@mui/material/Grid';
import MoreEventsDisplayCard from "./MoreEventsDisplayCard"
export default function Events(){

const [cardDatalocal, setCardDatalocal] = useState([]);
const [moreEventsCardDatalocal,setMoreEventsCardDatalocal]=useState([]);
  useEffect(() => {
      setCardDatalocal(CardDataFile.cardData);
      setMoreEventsCardDatalocal(moreCardsFile.moreEventsInfo);
}, []);
const backgroundImageLink='./src/assets/Images/eventsBg.jpg';
//app doesnt break while fetching and displays a loading "bar"
if (cardDatalocal.length === 0) {
      return <LinearProgress />;
    }

      return (
            <div style={{backgroundColor:'#333232'}}> 
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

      <Typography variant="h3" 
                  color="initial" 
                  backgroundColor='white' 
                  paddingY={2} 
                  textAlign={'center'}>
            More
      </Typography>

<Grid container margin={'auto'} paddingBottom={'30px'} 
         sx={{justifyContent:'center',display:'flex',
         backgroundColor:'white'
         }}>
                                 {
                                       moreEventsCardDatalocal.map((pastEventDetails,index)=>{
                                             return(
                                                   <Grid item lg={4} 
                                                   
                                             sm={6}
                                             
                                             xs={12} 
                                             
                                             key={index}
                                             sx={{justifyContent:'center',display:'flex'}}>
                                                   <MoreEventsDisplayCard
                                                      imageLink={pastEventDetails.imageLink}
                                                      text={pastEventDetails.text}
                                                      year={pastEventDetails.year}
                                                   />
                                             </Grid>
                                             )
                                          })
                                    }
                                 
         </Grid>
            </div>     
      )
} 