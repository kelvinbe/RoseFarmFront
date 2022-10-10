import { Grid } from "@mui/material";
import React from "react";
import Loader from "./Loader";
import Typewriter from 'typewriter-effect';



const LoaderPage = () => {
  return (
    <Grid container style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#a20606'}}>
    

      <Grid item className="loader-fit">
        <Loader />
    
<Typewriter
  options={{
    strings: ['Gaming Zone', 'Loading...'],
    autoStart: true,
    loop: true,
    cursor: ''

  }}
/>
  
           </Grid>
    </Grid>
  );
}

export default LoaderPage
