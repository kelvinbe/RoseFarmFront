import React, {useState, useEffect} from "react";

import { styled } from "@mui/material/styles";
import {Paper, Stepper, Step, StepLabel, Typography, Button, CssBaseline} from '@mui/material'
import Header from "../../Header/Header";
import './checkoutStyles.css'
import AddressForm from "../AddressForm";
import PaymentForm from "../PaymentForm";
import { commerce } from '../../../lib/commerce'
import {useSelector} from 'react-redux'
import { Link } from "react-router-dom";
import CircularStatic from "../../Loader/Loader";


const steps = ['Shipping address', 'Payment details']

export default function Checkout() {

  const [activeStep, setActiveStep] = useState(0)
  const [checkoutToken, setCheckoutToken] = useState(null)
  const [cart, setCart] = useState({})
  const [isFinished, setIsFinished] = useState(false)
  const cartFromRedux = useSelector((state) => state.cart)
  const mpesa = useSelector((state) => state.mpesaRes)
  const [isLoading, setLoading] = useState(false)

  // const token = useSelector((state) => state.token)
  // const dispatch = useDispatch()
  const [deliveryData, setDeliveryData] = useState({})

  console.log(deliveryData)


 
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
        console.log(isFinished)
        handleEmptyCart()
    }, 3000)
  };


const Confirmation = () => (
  <> 
  <br/>
      <div>
        <Typography variant='h6' style={{textAlign: 'center'}}>
         {mpesa}.Complete transaction on your phone
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
        //   const fetchCart = async () => {
        //     setCart(await commerce.cart.retrieve())
        //     console.log(cart)
        // }
      
          // const cartData = fetchCart()
          // console.log('cartData', cartData)
          setLoading(true)
          const token =  await commerce?.checkout?.generateToken(cartFromRedux?.id, {type: 'cart'})
          console.log('tokennnnn', token)
          setCheckoutToken(token)
          setLoading(false)
        } catch (error) {
          console.error(error.message)
        } 

    }

    generateToken()
  }, [cartFromRedux, cart])



  const nextStep = () => {
    console.log('hellooo') 
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }
  const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1)

  const next = (data) => {
    // console.log('data', data)
    setDeliveryData(data)
    nextStep()
  }


  

  const Form = () => activeStep === 0 ? <AddressForm checkoutToken={checkoutToken} next={next} /> : <PaymentForm data={deliveryData} checkoutToken={checkoutToken} backStep={backStep} timeOut={timeOut} nextStep={nextStep} cartFromRedux={cartFromRedux} />



  return (
    <React.Fragment>
      <Header />
      <CssBaseline />
      <div className="toolbar" style={{marginTop: 90}}>

      { activeStep !== 2 && isLoading ? <div style={{alignItems: 'center',textAlign: 'center', height: '100vh', display: 'flex', justifyContent: 'center'}}><CircularStatic /></div> : <Boot className="layout">
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
        </Boot> }
      </div>

         
      {/* <FooterContainer /> */}
    </React.Fragment>
  );
}
