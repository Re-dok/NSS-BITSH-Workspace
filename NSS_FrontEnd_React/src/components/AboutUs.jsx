import Jumbotron from "./Jumbotron"
import MajorDisplayCard from "./MajorDisplayCard"
import Typography from '@mui/material/Typography'
import { useState,useEffect } from "react"
import CardDataFile from '../assets/Data/EventsCardsData.json'
import { LinearProgress } from "@mui/material"

// import "../assets/Styles/AboutUs.css"
export default function AboutUs(){

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
            <Jumbotron
            
             heading={["We Are NSS \n",
                        <span 
                              style={{color:"#f1633b"}}>
                              BITS Hyderabad
                        </span>]
            }
             bodyText={["We are a family of 150 dedicated volunteer work force who believe that welfare of an individual is ultimately the welfare of entire nation. We are working hard to ensure that everyone in our society who is needy gets the every possible help to lead a dignified life. NSS BPHC ",
             <span style={{
                              color:"#f1633b",
                              display:"contents"
                        }}>NOT ME BUT YOU!</span>]}
             backgroundImageLink={'./src/assets/Images/bitsh.jpg'}
            />

                  <Typography variant="h4" 
                              color="black"
                              textAlign={"center"}
                              margin={"15px"}
                              sx={{

                                    textDecoration: 'underline'
                              }}
                              >
                  About Us
                  </Typography>
            {cardDatalocal.map((cardData, index) => (
            <MajorDisplayCard 
                  key={index}
                  index={index}
                  imgL={cardData.contentImageLink}
                  cardtheme="light"
                  contentYear=""
                  contentHeading=""
                  contentText={cardData.contentText}
        />
      ))}

            </>     
      )
} 