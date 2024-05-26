import { Card, Container, Typography } from '@mui/material';
import * as React from 'react';
import { useMediaQuery } from '@mui/material';
import Grid from '@mui/material/Grid';
import BearersDisplayCard from './BearersDisplayCard';
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
                       <span style={{textAlign:'center'}}>OUR</span>
                        <span style={{color:'#e0583b',
                                      textAlign:'center',
                                    marginLeft:props.isSmallMobile?'0px':'20px'}}>
                               FACULTY 
                              </span>
                  </Typography>
      )


export default function OfficeBearers(){

      const isLargeScreen = useMediaQuery('(min-width:960px)');
      const isSmallMobile = useMediaQuery('(min-width:320px) and (max-width:480px)');

      return (
            <Container maxWidth='100%'
                        sx={{backgroundColor:'#EEF7FF',
                              paddingTop:'30px'
                        }}
            >
                  <Heading isLargeScreen={isLargeScreen} 
                           isSmallMobile={isSmallMobile}/>

<Grid container width='80%' margin={'auto'} marginBottom={'30px'} sx={{justifyContent:'center',display:'flex'}}>
                        <Grid item lg={12}  spacing={2} sx={{justifyContent:'center',display:'flex'}}>
             <BearersDisplayCard/>
                        </Grid>
                        <Grid item lg={4} sm={6} xs={12} spacing={2} sx={{justifyContent:'center',display:'flex'}}>
             <BearersDisplayCard/>
                        </Grid>
                        <Grid item lg={4} sm={6} xs={12} spacing={2} sx={{justifyContent:'center',display:'flex'}}>
             <BearersDisplayCard/>
                        </Grid>
                        <Grid item lg={4} sm={6} xs={12} spacing={2} sx={{justifyContent:'center',display:'flex'}}>
             <BearersDisplayCard/>
                        </Grid>
</Grid>
            </Container>
      )
}
