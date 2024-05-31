import { Card,Typography } from '@mui/material';
import * as React from 'react';
import { useMediaQuery } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import CustomButton from './CustomButton.jsx';

export default function MoreEventsDisplayCard(props){
      let i='../home#'+props.year+props.text;
      let j=i.replace('/ /g','');
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
                 maxWidth:'400px',
                 maxHeight:'400px',
                 marginBottom:'15px',
            }}
            />
            <CustomButton
             contentButtonLink={j.toLowerCase()}
             buttonText={props.text}
             isMoreEvents={true}
             >
      </CustomButton>
     <Typography variant="body1" fontSize={isSmallMobile?'0.8rem':'1.4rem'} paddingTop={1} fontWeight={'3rem'} color="#e0583b">
           {props.year}
     </Typography>

     </Card>
      )
}