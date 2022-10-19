import React from "react";
import Grid from "@mui/material/Grid";
import Spidy from "../../Assets/eyes.jpg";
import Sink from "../../Assets/infernal.png";
import Face from "../../Assets/kratos.jpg";

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

AOS.init()
console.log('ooo')



export default function Show() {
  return (
    <Box
      sx={{
        flexGrow: 1,
        backgroundColor: "white",
        height: "138vh",
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
          <img src={frame1}/>
          <p>Organic making</p>
          <Grid item style={{display: 'flex', justifyContent: 'center'}}>
            <div>
            <img style={{margin: 30}} src={frame2} />
          <p>Certified Products</p>
          </div>
            <div>
            <img style={{margin: 30}} src={frame3}  />
          <p style={{marginLeft: 10}}>Fast Delivery</p>
          </div>

          </Grid>
        </Grid>
        </Grid>
        <Grid item>
          <img src={farm} width={384} />
          <Grid item>
            <img style={{margin: 20}} src={farm1} />
            <img style={{margin: 20}} src={farm2} />

          </Grid>
        
        </Grid>
      </Grid>
    </Box>
  );
}
