import React from "react";
import Grid from "@mui/material/Grid";
import Spidy from "../../Assets/eyes.jpg";
import Sink from "../../Assets/infernal.png";
import Face from "../../Assets/kratos.jpg";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Box from "@mui/material/Box";

import "./Show.css";
import { Typography } from "@mui/material";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

import frame1 from '../../Assets/frame_1.png'
import frame2 from '../../Assets/frame_2.png'
import frame3 from '../../Assets/frame_3.png'
import shamba from '../../components/Videos/shambaa.mp4'

AOS.init()
console.log('ooo')

const slideImages = [
  {
    url: Sink,
  },
  {
    url: Spidy,
  },
  {
    url: Face,
  },
];

const Slideshow = () => {
  return (
    <div className="slide-container">
      <Slide>
        {slideImages.map((slideImage, index) => (
          <div className="each-slide" key={index}>
            <div
              style={{
                backgroundImage: `url(${slideImage.url})`,
                height: 480,
                borderRadius: 20,
              }}
            >
              <span>{slideImage.caption}</span>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default function Show() {
  return (
    <Box
      sx={{
        flexGrow: 1,
        backgroundColor: "white",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid container className="container-show">
      
        <Grid item>
          <Card src={shamba} >

            <CardMedia
             component="video"
             height="300"
             image=""
             src={shamba}
             autoPlay
             muted
             />
          </Card>
        </Grid>
        <Grid item className="img-game">
          <Typography style={{fontFamily: 'Libre Baskerville', color: '#023F3A'}}>
            <h1 >Everyone should have access to nutritious food
      </h1>
      <h4>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.
      Aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
      voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      </h4>
          </Typography>
          <Grid item>
          <img src={frame1} />
          <p>Organic making</p>
        
        </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
