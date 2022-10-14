import React, {useState, useEffect} from 'react'
import { Container, Typography, Button, Grid } from "@mui/material";
import './cartStyles.css'
import CartItem from './CartItem/CartItem';
import { commerce } from '../../lib/commerce';
import Header from '../Header/Header';
import {Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux'



const Cart = () => {

    const [cart, setCart] = useState({})
    const results = useSelector((state) => state.cart )
    const dispatch = useDispatch()


    const fetchCart = async () => {
        const cartData = await commerce.cart.retrieve()
        setCart(cartData)
        dispatch({type: 'GET_CART', data: cartData})   
        console.log('dataaa', results) 

    }
    const handleUpdateCartQty = async (productId, quantity) => {

        const {cart} = await commerce.cart.update(productId, {quantity})

        setCart(cart)
    }

    const handleEmptyCart = async () => {
        const {cart} = await commerce.cart.empty()


        setCart(cart)
    }

    const handleRemoveFromCart = async (productId) => {

        const {cart} = await commerce.cart.remove(productId)

        setCart(cart)
    }


    useEffect(() => {

       fetchCart()
        

    })
    console.log('cartFromRedux', results)
    console.log('cartLocalSTate', cart)
    const isEmpty = !cart?.line_items?.length === 0;

    const EmptyCart = () => {
       return <Typography variant='subtitle1'>
            You have no items in your shopping cart, start adding some!
            <Link to='/buy' className='link'>start adding some!</Link>
        </Typography>
    }

    const FilledCart = () => {
       return <>
        <Grid container spacing={3}>
        {cart?.line_items?.map((item) => (
            <Grid item xs={12} sm={4} key={item.id}>
                <CartItem item={item} handleUpdateCartQty={handleUpdateCartQty} handleRemoveFromCart={handleRemoveFromCart} handleEmptyCart={handleEmptyCart}/>
            </Grid>
        ))}
        </Grid>
        <div className='cardDetails'>
            <Typography variant='h4'>

                SubTotal: {cart?.subtotal?.formatted_with_symbol}
            </Typography>
            <div>
<Button className='emptyButton' style={{marginRight: 20}} size="large" type='button' variant='contained' color='secondary' onClick={handleEmptyCart}>Empty Cart</Button>
<Button component={Link} to='/checkout' className='emptyButton' size="large" type='button' variant='contained' color='primary'>Checkout</Button>
            </div>
        </div>
        </>
    }


  return (
    <>
    <Header />
    <Container>
        <div className='toolbar'>
            <Typography className='title' variant='h3' gutterBottom> Your Shopping Cart</Typography>
            {isEmpty ? <EmptyCart/> : <FilledCart/>}

        </div>


    </Container>
    </>
  )
}

export default Cart