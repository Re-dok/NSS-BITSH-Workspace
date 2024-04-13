import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const bull = (
      <Box
            component="span"
            sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
      >
      </Box>
);
const CardComponent = (props) => (
      <React.Fragment>
            <CardContent>
                  <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        {props.title}
                  </Typography>
                  <Typography variant="h5" component="div">
                        be{bull}nev{bull}o{bull}lent
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        adjective
                  </Typography>
                  <Typography variant="body2">
                        {props.description}
                        <br />
                        {'"a benevolent smile"'}
                  </Typography>
            </CardContent>
            <CardActions>
                  <Button size="small">Learn More</Button>
            </CardActions>
      </React.Fragment>
);
const contacts = ['Home', 'Events', 'About Us', 'Office Bearers', 'Contact Us'];

export default function Footer() {
      return (
            <Grid container position="static" bottom={0}  width='100%' minHeight='300px' >
                  <Grid item xs={12} sm={6} md={3}
                              sx={{ backgroundColor: '#222323',
                                     color: 'white', 
                                     display: 'flex',
                                     justifyContent: 'center',
                                     alignItems: 'center',
                                     minHeight:'235px'
                               }}>
                              <CardComponent sx={{ minWidth: 275}}></CardComponent> 
                  </Grid>
                  <Grid item xs={12} sm={6} md={3}
                              sx={{  backgroundColor: {
                                    xs: '#222323',
                                    lg: '#e0583b'
                                  },
                                     color: 'white', 
                                     display: 'flex',
                                     justifyContent: 'center',
                                     alignItems: 'center',
                                     minHeight:'235px'
                                     
                               }}>
                              <CardComponent sx={{ minWidth: 275}}></CardComponent> 
                  </Grid>
                  <Grid item xs={12} sm={6} md={3}
                              sx={{ backgroundColor: '#e0583b',
                                     color: 'white', 
                                     display: 'flex',
                                     justifyContent: 'center',
                                     alignItems: 'center',
                                     minHeight:'235px'
                               }}>
                              <CardComponent sx={{ minWidth: 275}}></CardComponent> 
                  </Grid>
                  <Grid item xs={12} sm={6} md={3}
                              sx={{ backgroundColor: '#e0583b',
                                     color: 'white', 
                                     display: 'flex',
                                     justifyContent: 'center',
                                     alignItems: 'center',
                                     minHeight:'235px'
                               }}>
                              <CardComponent sx={{ minWidth: 275}}></CardComponent> 
                  </Grid>
            </Grid>

      );
}