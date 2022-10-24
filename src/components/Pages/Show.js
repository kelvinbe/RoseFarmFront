import React from "react";
import Grid from "@mui/material/Grid";


import Box from "@mui/material/Box";

import "./Show.css";
import { Typography } from "@mui/material";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import farm from '../../Assets/Farm.png'
import farm1 from '../../Assets/Farm_1.png'
import farm2 from '../../Assets/Farm_2.png'
import frame1 from '../../Assets/frame_1.png'
import frame2 from '../../Assets/frame_2.png'
import frame3 from '../../Assets/frame_3.png'
import { styled } from "@mui/material/styles";


AOS.init()
console.log('ooo')

const Boot = styled("Box")(({ theme }) => ({
  padding: theme.spacing(1),
  [theme.breakpoints.down("sm")]: {
    height: "190vh",
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
        height: "190vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid container className="container-show">
        <Grid item className="img-game">
          <Typography className="text-show">
            <h1 >Mission we are working on</h1>
            <h4 >See what next Gen Games look like from incredible detailed graphics,
              To the surreal power of the consoles imporving not only loading time,
              but player experience overall.

              
               </h4>
          </Typography>
          <Grid item>
          <img src={frame1} alt='img'/>
          <p>Organic making</p>
          <Grid item style={{display: 'flex', justifyContent: 'center'}}>
            <div>
            <img style={{margin: 30}} src={frame2} alt='img'/>
          <p>Certified Products</p>
          </div>
            <div>
            <img style={{margin: 30}} src={frame3}  alt='img'/>
          <p style={{marginLeft: 10}}>Fast Delivery</p>
          </div>

          </Grid>
        </Grid>
        </Grid>
        <Grid item>
          <img src={farm} width={384} alt='img' />
          <Grid item>
            <img style={{margin: 20}} src={farm1} alt='img' />
            <img style={{margin: 20}} src={farm2} alt='img'/>

          </Grid>
        
        </Grid>
      </Grid>
    </Boot>
  );
}
