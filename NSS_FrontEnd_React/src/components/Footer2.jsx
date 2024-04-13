import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
const bull = (
      <Box
            component="span"
            sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
      >
            •
      </Box>
);
const CardComponent = (props) => (
      <React.Fragment>
            <CardContent>
                  <Typography sx={{ fontSize: 14 }} color="white" gutterBottom>
                        {props.title}
                  </Typography>
                  <Typography variant="h5" component="div" color="white">
                        be{bull}nev{bull}o{bull}lent
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="white">
                        adjective
                  </Typography>
                  <Typography variant="body2" color="white">
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


export default function Footer2() {
  return (
    <Box sx={{ flexGrow: 1 ,backgroundColor:'black'}} position="fixed" bottom='0' width='100%' minHeight='300px'>
      <Grid container  columns={12}>
        {Array.from(Array(4)).map((_, index) => (
          <Grid item xs={12} lg={3} key={index}>
            <CardComponent></CardComponent>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}