import React, {useState, useEffect} from "react";

import { styled } from "@mui/material/styles";
import {Paper, Stepper, Step, StepLabel, Typography} from '@mui/material'
import Header from "../../Header/Header";
import FooterContainer from "../../Footer/footer";
import './checkoutStyles.css'
import AddressForm from "../AddressForm";
import PaymentForm from "../PaymentForm";
import { commerce } from '../../../lib/commerce'
import {useSelector, useDispatch} from 'react-redux'


const steps = ['Shipping address', 'Payment details']

export default function Checkout() {

  const [activeStep, setActiveStep] = useState(0)
  const [checkoutToken, setCheckoutToken] = useState(null)
  const [cart, setCart] = useState({})
  const results = useSelector((state) => state.cart )
  const dispatch = useDispatch()


  const fetchCart = async () => {
      setCart(await commerce.cart.retrieve())
  }


  const Form = () => activeStep === 0 ? <AddressForm /> : <PaymentForm />

  const Confirmation = () => (
    <div>
      Confirmation
    </div>
  )


  useEffect(() => {
    const generateToken = async () => {
        try {
          const cartData = fetchCart()
          console.log('cartData', cartData)

          const token =  await commerce.checkout.generateToken(cart.id, {type: 'cart'})
          console.log('tokennnnn', token)
          setCheckoutToken(token)
        } catch (error) {
          
        }

    }

    generateToken()
  }, [])
  
  return (
    <React.Fragment>
      <Header />
      <div className="toolbar" style={{marginTop: 90}}>

        <main className="layout">
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

        {activeStep === steps.length ? <Confirmation /> : <Form />}
        </Paper>
        </main>
      </div>

         
      {/* <FooterContainer /> */}
    </React.Fragment>
  );
}
