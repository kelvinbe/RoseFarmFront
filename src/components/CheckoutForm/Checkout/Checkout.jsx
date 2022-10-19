import React, {useState, useEffect} from "react";

import { styled } from "@mui/material/styles";
import {Paper, Stepper, Step, StepLabel, Typography, Button, CssBaseline} from '@mui/material'
import Header from "../../Header/Header";
import FooterContainer from "../../Footer/footer";
import './checkoutStyles.css'
import AddressForm from "../AddressForm";
import PaymentForm from "../PaymentForm";
import { commerce } from '../../../lib/commerce'
import {useSelector, useDispatch} from 'react-redux'
import { Link } from "react-router-dom";
import Loader from "../../Loader/Loader";


const steps = ['Shipping address', 'Payment details']

export default function Checkout() {

  const [activeStep, setActiveStep] = useState(0)
  const [checkoutToken, setCheckoutToken] = useState(null)
  const [cart, setCart] = useState({})
  const [isFinished, setIsFinished] = useState(false)
  const cartFromRedux = useSelector((state) => state.cart)
  const token = useSelector((state) => state.token)
  const dispatch = useDispatch()
  const [deliveryData, setDeliveryData] = useState({})


  const fetchCart = async () => {
      setCart(await commerce.cart.retrieve())
  }

  const handleEmptyCart = async () => {
    const {cart} = await commerce.cart.empty()

    console.log(' i was removed')
    setCart(cart)
}

const Boot = styled("main")(({ theme }) => ({
  padding: theme.spacing(1),
  [theme.breakpoints.down("sm")]: {
    // width: '346px',  
  },

  [theme.breakpoints.up("md")]: {
    // width: 760,
  },
  [theme.breakpoints.up("lg")]: {
    marginLeft: '241px !important',
    marginRight: '241px !important'
    
  },
}));


  const timeOut = () => {
    setTimeout(() => {
        setIsFinished(true)
        handleEmptyCart()
    }, 3000)
  };


  const Confirmation = () => (
   
  <> 
  <br/>
      <div>
        <Typography variant='h5' style={{textAlign: 'center'}}>
          Thank you for your purchase. Your order is being processed
        </Typography>
      </div>
      <br />
      <Button component={Link} to='/' variant='outlined' type='button'>
        Back to Home
      </Button>
    </>
  )


  useEffect(() => {
    const generateToken = async () => {
        try {
          const cartData = fetchCart()
          console.log('cartData', cartData)
          const token =  await commerce?.checkout?.generateToken(cartFromRedux?.id, {type: 'cart'})
          console.log('tokennnnn', token)
          setCheckoutToken(token)
        } catch (error) {
          console.error(error.message)
        } 

    }

    generateToken()
  }, [cartFromRedux])

  const nextStep = () => {
    console.log('hellooo') 
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }
  const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1)

  const next = (data) => {
    setDeliveryData(data)
    nextStep()
  }


  

  const Form = () => activeStep === 0 ? <AddressForm checkoutToken={checkoutToken} next={next} /> : <PaymentForm checkoutToken={checkoutToken} backStep={backStep} timeOut={timeOut} nextStep={nextStep} cartFromRedux={cartFromRedux} />



  return (
    <React.Fragment>
      <Header />
      <CssBaseline />
      <div className="toolbar" style={{marginTop: 90}}>

        <Boot className="layout">
        <Paper className="paper">
        <Typography variant='h4' align='center'>
        Checkout
        </Typography>
        <Stepper activeStep={activeStep} className='stepper'>
          {steps.map((step) => (
              <Step key={step}>

                <StepLabel>{step}</StepLabel>
              </Step>
          ))}
        </Stepper>

        {activeStep === steps.length ? <Confirmation /> : checkoutToken && <Form />}
        </Paper>
        </Boot>
      </div>

         
      {/* <FooterContainer /> */}
    </React.Fragment>
  );
}
