import React from 'react'
import { Container, Typography, Button, Grid } from "@mui/material";
import './cartStyles.css'

const Cart = ({cart}) => {
    console.log('cart', cart?.line_items?.length)
    const isEmpty = !cart?.line_items?.length === 0;

    const EmptyCart = () => {
       return <Typography variant='subtitle1'>
            You have no items in your shopping cart, start adding some!
        </Typography>
    }

    const FilledCart = () => {
       return <>
        <Grid container spacing={3}>
        {cart?.line_items?.map((item) => (
            <Grid item xs={12} sm={4} key={item.id}>
                <div>{item.name}</div>
            </Grid>
        ))}
        </Grid>
        <div className='cardDetails'>
            <Typography variant='h4'>

                SubTotal: {cart?.subtotal?.formatted_with_symbol}
            </Typography>
            <div>
<Button className='emptyButton' style={{marginRight: 20}} size="large" type='button' variant='contained' color='secondary'>Empty Cart</Button>
<Button className='emptyButton' size="large" type='button' variant='contained' color='primary'>Checkout</Button>
            </div>
        </div>
        </>
    }


  return (
    <Container>
        <div className='toolbar'>
            <Typography className='title'> Your Shopping Cart</Typography>
            {isEmpty ? <EmptyCart/> : <FilledCart/>}

        </div>


    </Container>
  )
}

export default Cart