import EventsJumbotron from "./EventsJumbotron"
import MajorDisplayCard from "./MajorDisplayCard"
import Typography from '@mui/material/Typography'

export default function Events(){
      return (
            <>
                  <EventsJumbotron/>
                  <Typography variant="h3" 
                              color="white"
                              textAlign={"center"}
                              margin={"15px"}>
                  Latest</Typography>
                  <MajorDisplayCard 
                                          imgL='./src/assets/Images/diw4.jpg'
                  />
                    <MajorDisplayCard     
                                          pCol='white' 
                                          bgCol='#333232'
                                          headOneCol='#e66137'
                                          headTwoCol='white'
                                          imgL='./src/assets/Images/diw4.jpg'
                  />
            </>     
      )
} 