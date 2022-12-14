import React, {useRef, useEffect} from "react";
import Grid from "@mui/material/Grid";
// import Box from "@mui/material/Box";
import Header from "../Header/Header";

import "./CountUp.css";
import { Typography } from "@mui/material";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Tomatoes from '../../Assets/Tomatoes.png'
import Carrots from '../../Assets/Carrots.png'
import Ladyfingers from '../../Assets/Ladyfingers.png'
import { styled } from "@mui/material/styles";


AOS.init()



export default function CountUpSection() {


  const Boot = styled("Grid")(({ theme }) => ({
    padding: theme.spacing(1),
    [theme.breakpoints.down("sm")]: {
      // width: 759,  
      marginBottom: '80px'

    },
  
    [theme.breakpoints.up("md")]: {
      width: 760,
    },
    [theme.breakpoints.up("lg")]: {
      width: '1019px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      marginBottom: '80px'
    },
  }));

  const Box = styled("Box")(({ theme }) => ({
    padding: theme.spacing(1),
    [theme.breakpoints.down("sm")]: {
      height: "230vh",
    },
  
    [theme.breakpoints.up("md")]: {
      height: '100vh'
      
    },
    [theme.breakpoints.up("lg")]: {
      height: '100vh'
    },
  }));

    const myRef = useRef()
    // const [countIsVisible, setCountIsVisible] = useState()

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            // const entry= entries[0]
            // setCountIsVisible(entry.isIntersecting)
        })
        observer.observe(myRef.current)
    }, [])



  return (
    <Box
      sx={{
        flexGrow: 1,
        backgroundColor: "white",
        height: "230vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Header />
      <Grid container className="container-landing">
        <Typography className="text-end-count" gutterBottom style={{marginBottom: -65}}>
          <h1 >Rediscover the taste</h1>
          <h4 >Crops grown with your health in mind</h4>
        </Typography>
        <Boot item xs={12} >
        <Grid ref={myRef} item xs={12} className="count">
          <img src={Tomatoes} alt='img'/>
        </Grid>
        <Grid item xs={12} className="count">

          <img src={Carrots} alt='img'/>
        </Grid>
        <Grid item xs={12} className="count">
        <img src={Ladyfingers} alt='img'/>

        </Grid>
        </Boot>
      </Grid>
    </Box>
  );
}