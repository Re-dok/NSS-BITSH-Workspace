import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box} from '@mui/material';
import CustomButton from './CustomButton';
import { useEffect,useState } from 'react';

export default function MajorDisplayCard(props) {
  
  //fetches whether this card should be toword right or left 
  const [leftwords,setLeftwords]=useState(true);
  useEffect(()=>{
    setLeftwords(props.index%2===0)
  },[])

  return (
      <Box paddingX={"5%"} paddingY={'15px'}>
    <Card style={{ border: "none", boxShadow: "none" }}>
      <Box style={{display:'flex',
                              flexGrow: 1,
                              backgroundColor:'#333232',
                              paddingX:'5px',
                              paddingBottom:'20px',
                              borderRadius:0,
                              justifyContent: 'space-between',
                              alignItems:'center'      
                        }}border={0}
                              sx={{
                                    flexDirection: { xs: 'column',
                                    lg: leftwords ? 'row' : 'row-reverse' 
                                                    }
                                  }}>
        <CardContent
              style={{
                display:'inline-flex',
                flexDirection:'column',
                alignItems:leftwords?'start':'end'
              }}
        >
        <Typography gutterBottom 
                      variant="h5" 
                      component="div"
                      fontSize={'2rem'}
                      color={'#e66137'}>

            {props.contentYear}

          </Typography>
          <Typography gutterBottom 
                      variant="h5" 
                      component="div"
                      fontSize={'2.5rem'}
                      color={'white'}>

            {props.contentHeading}

          </Typography>
          
          <Typography variant="body2"
                      color={'white'}
                      paddingY={'10px'}
                      fontSize={'1rem'}
                      textAlign={leftwords ? 'left' : 'right'}
                      >

            {props.contentText}

          </Typography>
    
    <CustomButton/>

        </CardContent>
        <CardMedia
          component="img"

          image={props.imgL}

          sx={{width:'48%',
               minWidth:'600px',
      }}
          alt="Event Image"
          />
      </Box>
    </Card>
          </Box>
  );
}
