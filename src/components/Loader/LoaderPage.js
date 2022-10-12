import { Grid } from "@mui/material";
import React from "react";
import Loader from "./Loader";
import Typewriter from 'typewriter-effect';



const LoaderPage = () => {
  return (
    <Grid container style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: 'green'}}>
    

      <Grid item className="loader-fit">
        <Loader />
    

  
           </Grid>
    </Grid>
  );
}

export default LoaderPage
