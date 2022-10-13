import React, {useState} from "react";

import { styled } from "@mui/material/styles";
import {Paper, Stepper, Step, StepLabel, Typography} from '@mui/material'
import Header from "../../Header/Header";
import FooterContainer from "../../Footer/footer";
import './checkoutStyles.css'
import AddressForm from "../AddressForm";
import PaymentForm from "../PaymentForm";

const steps = ['Shipping address', 'Payment details']

export default function Checkout() {

  const [activeStep, setActiveStep] = useState(0)

  const Form = () => activeStep === 0 ? <AddressForm /> : <PaymentForm />

  const Confirmation = () => (
    <div>
      Confirmation
    </div>
  )
  
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
