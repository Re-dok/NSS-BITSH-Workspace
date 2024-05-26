import { Card, Container, Typography } from '@mui/material';
import * as React from 'react';
import { useMediaQuery } from '@mui/material';

import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
export default function BearersDisplayCard(){
      const isLargeScreen = useMediaQuery('(min-width:960px)');
      const isSmallMobile = useMediaQuery('(min-width:320px) and (max-width:480px)');
      return(
      <Card sx={{
            backgroundColor:'transparent',
            maxWidth:'350px',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
           flexDirection:'column',
           margin:'20px',
           boxShadow:'none'
     }}>
           <CardMedia
           component="img"
           image='../src/assets/Images/abt2.jpg'
           sx={{
                 maxWidth:'200px',
                 maxHeight:'400px',
                 marginBottom:'15px',
                 borderRadius:'5px'//here
           }}
           />
     <Typography variant="subtitle1" fontSize={isSmallMobile?'1rem':'1.5rem'} color="black">
           Prof. Sandeep S. Deshmukh
           {/* here */}
     </Typography>
     <Typography variant="subtitle2" fontSize={isSmallMobile?'1rem':'1.5rem'} color="black">
           Faculty Co-ordinator
           {/* here */}
     </Typography>
     <Typography variant="body1" fontSize={isSmallMobile?'0.5rem':'1rem'} color="black">
           Associate Dean, Student Welfare, BITS Pilani, Hyderabad Campus
           {/* here */}
     </Typography>
     <Button 
     variant='contained'
     href='www.google.com'//here
     target='_blank'
     sx={{
           backgroundColor:'#e66137',
           color:'white',
           ":hover":{
           backgroundColor:'#222323',
           },
           marginTop:'20px',
           height:'44px'
     }}>Profile</Button>
      </Card>
      )
}