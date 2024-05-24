import { Box, Table, Typography, Button, SliderThumb, sliderClasses } from "@mui/material";
import Card from '@mui/material/Card';
import { red } from "@mui/material/colors";
import IconButton from '@mui/material/IconButton';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import {TransitionGroup,CSSTransition} from 'react-transition-group';
import React, { useState,useEffect } from "react";

import "../assets/Styles/Carousal.css";

const childFactory = (direction) => (child) => {
      return React.cloneElement(child, {
        classNames: direction,
      });
    };

export default function Carousal() {
      
const imagesPath = './src/assets/Images/';
const imagesNames = ['bitsh.jpg', 'diw4.jpg'];

const [index,setIndex]=useState(0);
const imageUrl = `${imagesPath}${imagesNames[index]}`


      const [direction,setDirection]=useState("slide-left");
      
      const slideLeft=()=>{
            const nextIndex=index-1;
            if(nextIndex<0){
                  setIndex(imagesNames.length - 1);
            }
            else{
                  setIndex(nextIndex);
            }
            setDirection('slide-left');
      };

      const slideRight=()=>{
            setIndex((index+1)%imagesNames.length);
            setDirection('slide-right');
      };

      const handleKeyDown = (event) => {
            if (event.key === 'ArrowLeft') {
                slideLeft();
            } else if (event.key === 'ArrowRight') {
                slideRight();
            }
        };

        useEffect(() => {
          window.addEventListener('keydown', handleKeyDown);
            return () => {
                window.removeEventListener('keydown', handleKeyDown);
            };
        });

      return (
            <Box style={{height:'calc(100vh - 70px)'}}className="image-slider">
                  <Card style={{height: 'calc(100vh - 70px)',borderRadius:"0"}} className="image-wrapper">

                  <IconButton style={{position: 'absolute', left: 0,top:'calc(50vh - 55px)',zIndex:'2'}}>
                              <Box sx={{
                                    ':hover': {
                                          backgroundColor:'#e0583b',
                                          cursor: 'pointer',
                                    },
                                    '@media (min-width: 960px)': {
                                          height: '55px',
                                          width: '55px',
                                    },
                                    '@media (min-width: 320x)': {
                                          height: '35px',
                                          width: '35px',
                                    },
                                    backgroundColor: '#f1623a',
                                    height: '25px',
                                    width: '25px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius: '50%',
                              }}>
                                    <ArrowLeftIcon sx={{ color: 'white', 
                                                         fontSize: '20px',
                                                         '@media (min-width: 960px)': {
                                                         fontSize: '40px'
                                                      },
                                                '@media (min-width: 320x)': {
                                                      fontSize: '20px'
                                                }, }}
                                                onClick={slideLeft} />
                              </Box>
                  </IconButton>   

                        <TransitionGroup childFactory={childFactory(direction)}>
                        <CSSTransition key={index}
                                       timeout={495}
                                       classNames={direction}
                                       >

                        <Box  display='flex'
                              flexDirection='column'
                              position='absolute'
                              height='calc(100vh - 70px)'
                              style={{ backgroundImage:`url(${imageUrl})`,
                                       backgroundSize:'cover',
                                       backgroundPosition: 'center',
                                       maxWidth: '100%',
                                       maxHeight:'calc(100vh - 70px)'}}                            
                              width='100%'
                              justifyContent='center'
                              alignItems='center'
                        >                  
                              <Box style={{
                                    backgroundColor: 'rgb(0, 0, 0, 0.2)',
                                    padding: '10px',
                                    borderRadius: '5px',
                                    backdropFilter: 'blur(5px)',
                                    width:'75%',
                                    display:'block'
                              }} >
                                          <Typography variant="h2" color="white"sx={{
                                                 '@media (max-height: 320px), (max-width: 480px)': {
                                                            fontSize:'40px'
                                                      }}} >This is a <span style={{color:"#f1633b"}}>word</span></Typography>
                              </Box> 
                              <Typography variant="h6" 
                                          sx={{
                                                display:'block',
                                                position:'relative',
                                                top:'25%',
                                                '@media (max-height: 320px)': {
                                                      top:'10%'
                                                }
                                          }}
                                          color="white">
                              Team 2021
                                    <Typography variant="caption" 
                                                color='white'
                                                sx={{
                                                      display:'flex',
                                                      fontSize: '15px',
                                                      alignItems:"center",'@media (max-height: 320px)': {
                                                            fontSize:'10px'
                                                      },
                                                      justifyContent:'center'}}
                                                gutterBottom>
                                          NSS BPHC
                                    </Typography>
                              </Typography>
                        </Box>
                        </CSSTransition>
                        </TransitionGroup>

                        <IconButton style={{ position: 'absolute', right: 0,top:'calc(50vh - 55px)'}}>
                              <Box sx={{
                                    ':hover': {
                                          backgroundColor:'#e0583b',
                                          cursor: 'pointer',
                                    },
                                    '@media (min-width: 960px)': {
                                          height: '55px',
                                          width: '55px',
                                    },
                                    '@media (min-width: 320x)': {
                                          height: '35px',
                                          width: '35px',
                                    },
                                    backgroundColor: '#f1623a',
                                    height: '25px',
                                    width: '25px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius: '50%',
                              }}>
                                    <ArrowRightIcon sx={{ color: 'white', 
                                                         fontSize: '20px',
                                                         '@media (min-width: 960px)': {
                                                         fontSize: '40px'
                                                      },
                                                '@media (min-width: 320x)': {
                                                      fontSize: '20px'
                                                }, }}
                                                onClick={slideRight} />
                              </Box>
                  </IconButton>   
                  </Card>
            </Box>

      )
} 