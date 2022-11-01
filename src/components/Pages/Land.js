import React, {useEffect} from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Header from "../Header/Header";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Far from '../../Assets/Farmi.png'
import { Store } from 'react-notifications-component';



import "./Land.css";

AOS.init()

const Boot = styled("img")(({ theme }) => ({
  padding: theme.spacing(1),
  [theme.breakpoints.down("sm")]: {
    width: '395px'
  },

  [theme.breakpoints.up("md")]: {
    width: '500px',
  },
  [theme.breakpoints.up("lg")]: {
    width: '728px',
  },
}));

const notification = {
  title: "WepApp in Progress",
  message: "Development is ongoing",
  type: "info",
  insert: "top",
  container: "top-right",
  animationIn: ["animate__animated animate__fadeIn"], // `animate.css v4` classes
  animationOut: ["animate__animated animate__fadeOut"] // `animate.css v4` classes
};







export default function Land() {
  // const [alert, setAlert] = useState(true)

  useEffect(() => {

    setTimeout(() => {

    })
    Store.addNotification({
      ...notification,
      container: 'top-right',
      dismiss: {
        duration: 5000
      }
    })

  })
  

  return (
    <Box
      sx={{
        flexGrow: 1,
        background:"linear-gradient(90deg, rgba(9,36,0,1) 1%, rgba(10,161,65,1) 38%, rgba(255,255,255,1) 100%)",
        // height: "100vh", 
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Header />
      <Grid container className="container-land">
        
        <Grid item className="text-land" style={{width: '609px'}}>

          <h1 style={{fontFamily: 'Libre Baskerville'}}>Organic farming reimagined
with RoseFarm</h1>
          <h4 >
            Best Avocados Produce and other farm related products coming to you today.
          </h4>
        </Grid>
        <Grid item>
          <Boot src={Far} alt='farm' />
        </Grid>
      </Grid>
    </Box>
  );
}
