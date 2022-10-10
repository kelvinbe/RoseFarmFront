import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Console from "../../Assets/Console.svg";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Header from "../Header/Header";
import BasicAlerts from "../Alert/Alert";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Far from '../../Assets/Farmi.png'

import "./Land.css";

AOS.init()

const Boot = styled("img")(({ theme }) => ({
  padding: theme.spacing(1),
  [theme.breakpoints.down("sm")]: {
    width: 759,
  },

  [theme.breakpoints.up("md")]: {
    width: 760,
  },
  [theme.breakpoints.up("lg")]: {
    width: 733,
  },
}));




export default function Land() {
  const [alert, setAlert] = useState(true)

  useEffect(() => {
    console.log('hey')
    setTimeout(() => {
      setAlert(false)
    }, 5000)

  })
  

  return (
    <Box
      sx={{
        flexGrow: 1,
        background:"linear-gradient(90deg, rgba(9,36,0,1) 1%, rgba(10,161,65,1) 38%, rgba(255,255,255,1) 100%)",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Header />
      <Grid container className="container-land">
        <Grid item className="text-land" style={{width: '609px'}}>
        {alert && <BasicAlerts/>}

          <h1 style={{fontFamily: 'Libre Baskerville'}}>Organic farming reimagined
with RoseFarm</h1>
          <h4 >
            Best Avocados Produce and other farm related products coming to you today.
          </h4>
        </Grid>
        <Grid item>
          <Boot src={Far} />
        </Grid>
      </Grid>
    </Box>
  );
}
