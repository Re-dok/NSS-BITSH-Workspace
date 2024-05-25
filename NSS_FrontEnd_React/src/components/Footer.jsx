import * as React from 'react';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import ListItemButton from '@mui/material/ListItemButton';
import ListSubheader from '@mui/material/ListSubheader';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import CallTwoToneIcon from '@mui/icons-material/CallTwoTone';
import EmailTwoToneIcon from '@mui/icons-material/EmailTwoTone';
import FooterCardData from "../assets/Data/FooterCardData.json"
import { Container, LinearProgress } from "@mui/material"

// const CardComponent = (props) => (
//       <React.Fragment>
//             <CardContent>
//                   <Typography sx={{ fontSize: 22 }} color="white" gutterBottom>
//                         Contacts
//                   </Typography>
//                   <Typography variant="body2" sx={{ fontSize: 15 }} >
//                         Shamirpet-Keesara Road,<br></br>
//                         Jawahar Nagar, Shameerpet,<br></br>
//                         Hyderabad, Telangana 500078
//                   </Typography>
//                   <List sx={{ marginTop: '10px' }}>
//                         <ListItem disablePadding>
//                               <ListItemIcon>
//                                     <EmailTwoToneIcon fontSize='small' sx={{ color: 'white' }} />
//                               </ListItemIcon>
//                               <ListItemText primary="nss@hyderabad.bits-piani.ac.in" />
//                         </ListItem>
//                         <ListItem disablePadding>
//                               <ListItemIcon>
//                                     <CallTwoToneIcon fontSize='small' sx={{ color: 'white' }} />
//                               </ListItemIcon>
//                               <ListItemText primary="+91 7032199226" />
//                         </ListItem>
//                   </List>
//             </CardContent>
//       </React.Fragment>
// );
const BottomFooter = () => (
      <React.Fragment>
            <div style={{ height: '30px', backgroundColor: '#222323', color: 'white', textAlign: 'center', justifyContent: 'center', padding: '5px' }}>
                  © 2020 NSS BITS Pilani Hyderbad. All Rights Reserved.
            </div>
      </React.Fragment>
)
export default function Footer() {

      const [cardDatalocal, setCardDatalocal] = React.useState([]);
      React.useEffect(() => {
            setCardDatalocal(FooterCardData.FooterCardData);
      }, [])
      if (cardDatalocal.length === 0) {
            return <LinearProgress />;
      }
      // console.log(cardDatalocal);
      return (
            <>
                  <Grid container width='100%' minHeight='350px' zIndex={'3'} >
                        <Grid item xs={12} sm={6} md={3}
                              sx={{
                                    backgroundColor: '#222323',
                                    color: 'white',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    minHeight: '235px',
                                    padding: '40px'
                              }}>

                              <Box sx={{ minWidth: 275 }}
                              >
                                    <CardContent>
                                          <Typography sx={{ fontSize: 22 }} color="white" gutterBottom>
                                                Contacts
                                          </Typography >
                                          <Typography variant="body2"
                                                sx={{
                                                      fontSize: 15,
                                                      marginTop: '15px'
                                                }} >
                                                Shamirpet-Keesara Road,<br></br>
                                                Jawahar Nagar, Shameerpet,<br></br>
                                                Hyderabad, Telangana 500078
                                          </Typography>
                                          <List sx={{ marginTop: '5px' }}>
                                                <ListItem disablePadding>
                                                      <ListItemIcon>
                                                            <EmailTwoToneIcon fontSize='small' sx={{ color: 'white' }} />
                                                      </ListItemIcon>
                                                      <ListItemText primary="nss@hyderabad.bits-piani.ac.in" />
                                                </ListItem>
                                                <ListItem disablePadding>
                                                      <ListItemIcon>
                                                            <CallTwoToneIcon fontSize='small' sx={{ color: 'white' }} />
                                                      </ListItemIcon>
                                                      <ListItemText primary="+91 7032199226" />
                                                </ListItem>
                                          </List>
                                    </CardContent>
                              </Box>
                        </Grid>

                        {
                              cardDatalocal.slice(0,2).map((cardData, index) => {
                                    // console.log(cardData);
                                    return (
                                          <Grid
                                                key={index}
                                                item xs={12} sm={6} md={3}
                                                sx={{
                                                      backgroundColor: index == 0 ?
                                                            {
                                                                  xs: '#222323',
                                                                  lg: '#e0583b'
                                                            }
                                                            : '#e0583b',
                                                      borderTop: index == 0 ? {
                                                            xs: 'solid white',
                                                            sm: 'none'
                                                      } : 'none',
                                                      color: 'white',
                                                      display: 'flex',
                                                      justifyContent: {
                                                            xs: 'start',
                                                            lg: 'center'
                                                      },
                                                      alignItems: 'center',
                                                      minHeight: '235px',
                                                      padding: '30px'
                                                }}>
                                                <List
                                                      subheader={
                                                            <ListSubheader
                                                                  sx={{
                                                                        fontSize: 22,
                                                                        color: 'white',
                                                                        backgroundColor: index == 0 ?
                                                                              {
                                                                                    xs: '#222323',
                                                                                    lg: '#e0583b'
                                                                              }
                                                                              : '#e0583b'
                                                                  }}
                                                                  component="div">
                                                                  {cardData.cardTitle}
                                                            </ListSubheader>}
                                                >
                                                      {
                                                            cardData.cardLinksList.map((cardLink, linkIndex) => {
                                                                  
                                                                  return (
                                                                        <ListItem key={linkIndex}
                                                                              disablePadding
                                                                              height='10px'
                                                                              sx={{
                                                                                    ':hover': {
                                                                                          borderRadius:'5px',
                                                                                          backgroundColor: index == 0 ?
                                                                                                {
                                                                                                      xs: '#e0583b',
                                                                                                      lg: '#353a40'
                                                                                                }
                                                                                                : '#353a40'
                                                                                    }
                                                                              }}
                                                                        >
                                                                              <ListItemButton href={cardLink[1]}
                                                                                    target='_blank'>
                                                                                    <ListItemText
                                                                                          primary={cardLink[0]} />
                                                                              </ListItemButton>
                                                                        </ListItem>
                                                                  )
                                                            })
                                                      }
                                                </List>

                                          </Grid>)
                              })
                        }


                        {/* <CardComponent sx={{ minWidth: 275 }}></CardComponent> */}
                        <Grid item xs={12} sm={6} md={3}
                              sx={{
                                    backgroundColor: '#e0583b',
                                    color: 'white',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    minHeight: '235px'
                              }}>

<Box sx={{ minWidth: 275 }}
                              >
                                    <CardContent>
                                          <List 
                                          subheader={
                                                <ListSubheader
                                                      sx={{
                                                            fontSize: 22,
                                                            color: 'white',
                                                            backgroundColor:'#e0583b'
                                                      }}
                                                      component="div">
                                                Contacts
                                                </ListSubheader>
                                          }
                                          sx={{ marginTop: '5px' }}>
                                                {cardDatalocal[1].cardLinksList.map((socialLink,socialLinkIndex)=>{
                                                      return(
                                                            <ListItem 
                                                            key={socialLinkIndex}
                                                            disablePadding>
                                                      <ListItemIcon>
                                                            <EmailTwoToneIcon fontSize='small' sx={{ color: 'white' }} />
                                                      </ListItemIcon>
                                                      <ListItemText primary={socialLink[0]} />
                                                </ListItem>
                                                      )
                                                })}
                                                
                                          </List>
                                    </CardContent>
                              </Box>

                        </Grid>
                  </Grid>
                  <BottomFooter />
            </>
      );
}