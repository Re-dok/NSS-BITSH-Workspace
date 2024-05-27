import { Card,Typography } from '@mui/material';
import * as React from 'react';
import { useMediaQuery } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';


export default function BearersDisplayCard(props){
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
           image={props.imageLink}
           alt={props.name}
           sx={{
                 maxWidth:'200px',
                 maxHeight:'400px',
                 marginBottom:'15px',
                 borderRadius:props.isProf?'5px':'100px'
           }}
           />
     <Typography variant="subtitle1" fontSize={isSmallMobile?'1rem':'1.5rem'} color="black">
           {props.name}
         
     </Typography>
     <Typography variant="subtitle2" fontSize={isSmallMobile?'1rem':props.isProf?'1.2rem':'1rem'} color="black">
           {props.post}
          
     </Typography>
     <Typography variant="body1" fontSize={isSmallMobile?'0.8rem':'1rem'} color="black">
           {props.jobInfo}
          
     </Typography>
     {
      props.isProf==true &&
      
     <Button 
     variant='contained'
     href={props.profileLink}
     target='_blank'
     sx={{
           backgroundColor:'#e66137',
           color:'white',
           ":hover":{
           backgroundColor:'#353a40',
           },
           marginTop:'20px',
           height:'44px'
     }}>Profile</Button>
}
     </Card>
      )
}