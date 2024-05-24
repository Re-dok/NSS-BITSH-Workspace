import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Container } from '@mui/material';
import CustomButton from './CustomButton';
import { useEffect, useState } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import "../assets/Styles/DisplayCard.css";

const childFactory = (direction) => (child) => {
  return React.cloneElement(child, {
    classNames: direction,
  });
};



export default function MajorDisplayCard(props) {
  const [contentDirection, setContentDirection] = useState("FromLeft");
  const [imageDirection, setImageDirection] = useState("iFromRight");

  // Determines whether this card should be toward the right or left
  const [leftwards, setLeftwards] = useState(true);
  useEffect(() => {
    const isLeft = props.index % 2 === 0;
    setLeftwards(isLeft);
    setContentDirection(isLeft ? "FromLeft" : "FromRight");
    setImageDirection(isLeft ? "iFromRight" : "iFromLeft");
  }, [props.index]);

  const [trigger, setTrigger] = useState(false);

  return (
    <Box paddingX={"5%"} paddingY={'15px'}>
      <button onClick={() => setTrigger(!trigger)}>Click to trigger</button>
      <Card style={{ border: "none", boxShadow: "none" }}>
        <Box
          style={{
            display: 'flex',
            flexGrow: 1,
            backgroundColor: '#333232',
            paddingX: '5px',
            paddingBottom: '20px',
            borderRadius: 0,
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
          border={0}
          sx={{
            flexDirection: {
              xs: 'column',
              lg: leftwards ? 'row' : 'row-reverse'
            }
          }}
        >
          {/* container is needed so that the flex propertes are not disturbed by the TransitonGroups "display" property */}
          <Container>
          <TransitionGroup childFactory={childFactory(contentDirection)}>
            <CSSTransition key={trigger} timeout={500} classNames={contentDirection}>
              <CardContent
                style={{
                  display: 'inline-flex',
                  flexDirection: 'column',
                  alignItems: leftwards ? 'start' : 'end'
                }}
              >
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  fontSize={'2rem'}
                  color={'#e66137'}
                >
                  {props.contentYear}
                </Typography>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  fontSize={'2.5rem'}
                  color={'white'}
                >
                  {props.contentHeading}
                </Typography>
                <Typography
                  variant="body2"
                  color={'white'}
                  paddingY={'10px'}
                  fontSize={'1rem'}
                  textAlign={leftwards ? 'left' : 'right'}
                >
                  {props.contentText}
                </Typography>
                <CustomButton />
              </CardContent>
            </CSSTransition>
          </TransitionGroup>
          </Container>

          {/* container is needed so that the flex propertes are not disturbed by the TransitonGroups "display" property */}
          <Container>
          <TransitionGroup childFactory={childFactory(imageDirection)}>
            <CSSTransition key={trigger} timeout={500} classNames={imageDirection}>
            
              <CardMedia
                component="img"
                image={props.imgL}
                sx={{
                  width: '48%',
                  minWidth: '600px',
                }}
                alt="Event Image"
              />
             
            </CSSTransition>
          </TransitionGroup>
          </Container>
        </Box>
      </Card>
    </Box>
  );
}
