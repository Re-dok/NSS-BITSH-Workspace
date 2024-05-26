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
import SubFooterOne from './SubFooterOne';
import SubFooterTwo from './SubFooterTwo';
import FacebookTwoToneIcon from '@mui/icons-material/FacebookTwoTone';
import SubFooterThree from './SubFooterThree';
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
      // <React.Fragment>
            <div style={{ height: '30px', backgroundColor: '#222323', color: 'white', textAlign: 'center', justifyContent: 'center', padding: '5px'}}>
                  © 2020 NSS BITS Pilani Hyderbad. All Rights Reserved.
            </div>
      // {/* </React.Fragment> */}
)
export default function Footer() {

      
      return (
            <>
                  <Grid container width='100%' minHeight='340px' zIndex={'3'} >
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

                              <SubFooterOne></SubFooterOne>

                        </Grid>

                        <SubFooterTwo></SubFooterTwo>

                        <Grid item xs={12} sm={6} md={3}
                              sx={{
                                    backgroundColor: '#e0583b',
                                    color: 'white',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    minHeight: '235px'
                              }}>

                           <SubFooterThree></SubFooterThree>
                        </Grid>
                  </Grid>
                  <BottomFooter />
            </>
      );
}