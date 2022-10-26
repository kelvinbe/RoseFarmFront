import React, { useEffect, useState } from 'react'
import { Typography, Button, Divider} from '@mui/material'
import Review from './Review'
import {Elements, CardElement, ElementsConsumer} from '@stripe/react-stripe-js'
import {loadStripe} from '@stripe/stripe-js'
import Checkbox from '@mui/material/Checkbox';
import axios from 'axios'
import {useSelector, useDispatch} from 'react-redux'
// import * as dotenv from '../../../.env'







const stripePromise = loadStripe('...')


const PaymentForm = ({checkoutToken, backStep, timeOut, nextStep, data}) => {
  console.log('checkoutInPayment', checkoutToken)

  const [showStripe, setStripe] = useState(false)
  const [showMpesa, setMpesa] = useState(true)
  const [phone, setPhone] = useState('')
  const [amount, setAmount] = useState(`${checkoutToken.subtotal.raw}`)
  // const [mpesaRespo, setMpesaRes] = useState(false)
  const mpesa = useSelector((state) => state.mpesaRes)
  const dispatch = useDispatch()
  console.log('phone', phone)
  console.log('mpesa', mpesa)
  console.log('mpesa', setAmount)




  const handleClick = () => {

    setMpesa(false)
    setStripe(true)
  }
  const handleClickM = () => {

    setStripe(false)

    setMpesa(true)  
  }


  useEffect(() => {

  setPhone(data.phone)




  }, [data.phone])

  // const localhost = 'http://localhost:8000/token'
  const production = 'https://rosefarmapi.onrender.com/token'


  const handleCheckOut = async () => {
    

    await axios.post(production,{
      amount,
      phone

    }).then((res) => {
      // setMpesaRes(res.data)

      dispatch({type: 'GET_MPESA_DATA', data: res.data.CustomerMessage}) 
      timeOut()

      nextStep()
      console.log('mpesaResponse', res.data.CustomerMessage)
    }).catch((err) => {
      console.log(err)
    })
    
    

 
  }
  

  return (
    <>
    
    <Review checkoutToken={checkoutToken} data={data} />
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
        Payment from the given Phone Number {data.phone}
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