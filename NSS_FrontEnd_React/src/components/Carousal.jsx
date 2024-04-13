import { Box, Table, Typography, Button } from "@mui/material";
import Card from '@mui/material/Card';
import { red } from "@mui/material/colors";

export default function Carousal() {
      return (
            <Box marginTop='70px' width='100%'>
                  <Card style={{ height: 'calc(100vh - 70px)', width:'100%'}}>
                        <img src="./src/assets/bitsh.jpg"
                              alt="Nss image"
                              width='100%'
                              height='100%'
                        />
                        
                        <Box display='flex'
                              position='absolute'
                              top='70px'
                              width='100vw'
                              height='calc(100vh - 70px)'
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
                              <Box />
                        </Box>
                                    
                  </Card>
            </Box>

      )
} 