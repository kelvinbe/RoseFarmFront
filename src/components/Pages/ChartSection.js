import React from "react";
import Grid from "@mui/material/Grid";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

import "./Show.css";
import { Typography } from "@mui/material";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

import frame1 from '../../Assets/frame_1.png'
import shamba from '../../components/Videos/shambaa.mp4'
import { styled } from "@mui/material/styles";


AOS.init()
console.log('ooo')

const Boot = styled("Box")(({ theme }) => ({
  padding: theme.spacing(1),
  [theme.breakpoints.down("sm")]: {
    height: "140vh",
  },

  [theme.breakpoints.up("md")]: {
    height: '100vh'
    
  },
  [theme.breakpoints.up("lg")]: {
    height: '100vh'
  },
}));





export default function Show() {
  return (
    <Boot
      sx={{
        flexGrow: 1,
        backgroundColor: "white",
        height: "140vh",
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
             loop
             muted
             />
          </Card>
        </Grid>
        <Grid item className="img-game">
          <Typography style={{fontFamily: 'san-sarif !important', color: '#023F3A'}}>
            <h1 >Everyone should have access to nutritious food</h1>
      <h4>
      A whole farm bio-economic model can evaluate new farm configurations of 
      existing and novel crops as well as animal-types under various future scenarios. 
      These future configurations can be evaluated using a variety of indicators: 
      agronomic; economic; nutritional; and environmental. 
      Through these models we seek to provide good quality
      nutritious food for the people.
      </h4>
          </Typography>
          <Grid item>
          <img src={frame1} alt='img' />
          <p>Organic making</p>
        
        </Grid>
        </Grid>
      </Grid>
    </Boot>
  );
}
