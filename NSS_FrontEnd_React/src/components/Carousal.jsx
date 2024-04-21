import { Box, Table, Typography, Button } from "@mui/material";
import Card from '@mui/material/Card';
import { red } from "@mui/material/colors";

export default function Carousal() {
      return (
            <Box style={{paddingTop:'70px',height:'calc(100vh - 70px)'}}>
                  <Card style={{height: 'calc(100vh - 70px)',backgroundColor:'transparent'}}>
                        <Box display='flex'
                              position='relative'
                              height='calc(100vh - 70px)'
                              style={{ backgroundImage: 'url(./src/assets/bitsh.jpg)' ,
                                       backgroundSize:'cover',
                                       backgroundPosition: 'center',
                                       maxWidth: '100%',
                                       maxHeight:'calc(100vh - 70px)'}}                            
                              width='100vw'
                              justifyContent='center'
                              alignItems='center'
                        >
                              <Box style={{
                              backgroundColor: 'rgba(0, 0, 0, 0.2)',
                              padding: '10px',
                              borderRadius: '5px',
                              backdropFilter: 'blur(5px)',
                              width:'75%'
                              }} >
                                          <Typography variant="h2" color="white" >This is a <span style={{color:"#f1633b"}}>word</span></Typography>
                              </Box> 
                        </Box>
                                    
                  </Card>
            </Box>

      )
} 