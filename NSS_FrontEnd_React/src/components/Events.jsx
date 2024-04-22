import { Box, Table, Typography, Button, SliderThumb, sliderClasses } from "@mui/material";


export default function Events(){
      return(
            <>
                        <div style={{
                              backgroundImage:`url(./src/assets/Images/eventsBg.jpg)`,
                              backgroundSize:'cover',
                              backgroundPosition: 'center',
                              Width: '100%',
                              height:'calc(100vh - 70px)',
                              backgroundAttachment:"fixed"
                              }}> 
                              <Box style={{
                                          width:'100%',
                                          height:'100%',
                                          display:'flex',
                                          justifyContent:'center',
                                          alignItems:'center'
                                    }}
                              >
                                <Box style={{
                                      backgroundColor: 'rgb(0, 0, 0, 0.2)',
                                      padding: '10px',
                                      borderRadius: '5px',
                                      backdropFilter: 'blur(5px)',
                                    // width:'75%',
                                    padding:'2.5%',
                                    display:'flex',
                                    flexDirection:'column',
                                    justifyContent:'center',
                                    alignItems:'center'
                              }} >
                                         <Typography variant="h2" color="white"sx={{
                                                 '@media (max-height: 320px), (max-width: 480px)': {
                                                            fontSize:'40px'
                                                      }}}>
                                                Our <span style={{color:"#f1633b"}}>Events</span>
                                    </Typography>
                                    <Typography variant="caption" 
                                                color='white'
                                                sx={{
                                                      display:'flex',
                                                      fontSize: '15px',
                                                      alignItems:"center",'@media (max-height: 320px)': {
                                                            fontSize:'10px'
                                                      },
                                                      justifyContent:'center'}}
                                                gutterBottom>
                                          Take a ride through our plethora of events and witness the journey we made so far!
                              </Typography>
                              </Box> 
                              </Box>
                              
                        </div>

                
            </>
      )

}