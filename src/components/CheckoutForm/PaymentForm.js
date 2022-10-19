import React, { useState } from 'react'
import { Typography, Button, Divider} from '@mui/material'
import Review from './Review'
import {Elements, CardElement, ElementsConsumer} from '@stripe/react-stripe-js'
import {loadStripe} from '@stripe/stripe-js'
import Checkbox from '@mui/material/Checkbox';








const stripePromise = loadStripe('...')


const PaymentForm = ({checkoutToken, backStep, timeOut, nextStep}) => {
  console.log('checkoutInPayment', checkoutToken)

  const [showStripe, setStripe] = useState(false)
  const [showMpesa, setMpesa] = useState(true)
  // const [isFinished, setIsFinished] = useState(false)

  const handleClick = () => {

    setMpesa(false)
    setStripe(true)
  }
  const handleClickM = () => {

    setStripe(false)

    setMpesa(true)  
  }



  const handleCheckOut = () => {

   
    timeOut()
    nextStep()

 
  }
  

  return (
    <>
    
    <Review checkoutToken={checkoutToken} />
    <Divider/>
    <Typography variant='h6' gutterBottom style={{margin: '20px 0'}}>
    Payment Method:
     Card : <Checkbox onClick={handleClick} checked={showStripe}/>
     Mpesa : <Checkbox onClick={handleClickM} defaultChecked checked={showMpesa}/>
    </Typography>
   {showStripe ? <Elements stripe={stripePromise}>
        <ElementsConsumer>

          {({ elements, stripe}) => (
              <form>
                <CardElement />
                <br/> <br/>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                  <Button variant='outlined' onClick={backStep}>Back</Button>
                  <Button type='submit' variant='contained'  disabled={!stripe} color='primary' onClick={handleCheckOut}>
                    
                    Pay {checkoutToken.subtotal.formatted_with_symbol}
                    
                    </Button>
                </div>
              </form>
          )}
        </ElementsConsumer>
    </Elements>: <>
      <Typography>
        Use the following Mpesa Till Number 43897652
      </Typography>
      <br/>
       <div style={{display: 'flex', justifyContent: 'space-between'}}>
       <Button variant='outlined' onClick={backStep}>Back</Button>
       <Button type='submit' variant='contained' color='primary' onClick={handleCheckOut}>
         
         Pay {checkoutToken.subtotal.formatted_with_symbol}
         
         </Button>
     </div>
     </>}


    </>
  )
}

export default PaymentForm