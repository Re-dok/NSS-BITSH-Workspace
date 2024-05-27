import {Container, Typography } from '@mui/material';
import * as React from 'react';
import { useMediaQuery } from '@mui/material';
import Grid from '@mui/material/Grid';
import BearersDisplayCard from './BearersDisplayCard';
import OfficeBearersData from '../assets/Data/OfficeBearersData.json'

const Heading=(props)=>(
    
            <Typography variant='h2'
                              fontSize={'3.5rem'}
                              justifyContent={'center'}
                              display={'flex'}
                              sx={{
                                    flexDirection:props.isSmallMobile?'column':'row',
                                    fontSize:props.isLargeScreen?'3.5rem':'2.5rem',
                              }}
                  >
                       <span style={{textAlign:'center'}}>{props.headingOne}</span>
                        <span style={{color:'#e0583b',
                                      textAlign:'center',
                                    marginLeft:props.isSmallMobile?'0px':'20px'}}>
                               {props.headingtwo}
                              </span>
                  </Typography>
      )


export default function OfficeBearers(){
      const heading=[['OUR','FACULTY'],['OFFICE','BEARERS']];
      const [cardDataLocal,setCardDataLocal]=React.useState([]);
      React.useEffect(()=>{
            setCardDataLocal(OfficeBearersData.OfficeBearers);
      },[])
      
      const isLargeScreen = useMediaQuery('(min-width:960px)');
      const isSmallMobile = useMediaQuery('(min-width:320px) and (max-width:480px)');
      if (cardDataLocal.length === 0) {
            return (
                  <></>
            )}
            console.log(cardDataLocal[0]);
      
      return (
            
            <Container maxWidth='100%'
                        sx={{backgroundColor:'#FFF2D7',
                              paddingTop:'30px'
                        }}
            >
                  {

                        cardDataLocal.map((cardDatalocal,cardIndex)=>{

                              return(
<div key={cardIndex}>
                                    <Heading isLargeScreen={isLargeScreen} 
                                    isSmallMobile={isSmallMobile}
                                    headingOne={heading[cardIndex][0]}
                                    headingtwo={heading[cardIndex][1]}
                                    />
         
         <Grid container width='80%' margin={'auto'} paddingBottom={'30px'} 
         sx={{justifyContent:'center',display:'flex',backgroundColor:cardIndex===1?'#FFE0B5':'transparent'}}>
                                 {
                                       cardDatalocal.map((profDetails,index)=>{
                                             return(
                                                   <Grid item lg={index!=0?4:12} 
                                                   
                                             sm={index!=0?6:12}
                                             
                                             xs={index!=0?12:12} 
                                             
                                             key={index}
                                             sx={{justifyContent:'center',display:'flex'}}>
                                                   <BearersDisplayCard isProf={true&cardIndex==0}
                                                                       name={profDetails.name}
                                                                       post={profDetails.post}
                                                                       jobInfo={profDetails.jobInfo}
                                                                       imageLink={profDetails.imageLink}
                                                                       profileLink={profDetails.profileLink}
                                                                       />
                                             </Grid>
                                             )
                                          })
                                    }
                                 
         </Grid>
</div>
                              )
                        })

                  }
              
            </Container>
      )
}
