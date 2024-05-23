import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box} from '@mui/material';
import CustomButton from './CustomButton';
// import {Text} from Text;
// import CardData from '../assets/Data/EventsCardsData.json'

export default function MajorDisplayCard(props) {
  // const [cardData, setCardData] = React.useState([]);

  // React.useEffect(() => {
  //   setCardData(CardData.cardData);
  //   console.log(cardData.at(0));
  // }, []);

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
                                    flexDirection: { xs: 'column', lg: 'row' }//HERE
                                  }}>
        <CardContent
              style={{
                display:'inline-flex',
                flexDirection:'column',
                // alignItems:'end' //here 
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
                      // textAlign={'right'}//here
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
          alt="green iguana"
          />
      </Box>
    </Card>
          </Box>
  );
}
