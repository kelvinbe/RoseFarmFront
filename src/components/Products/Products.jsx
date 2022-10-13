import React, {useState, useEffect} from 'react'

import Grid from "@mui/material/Grid";
import Product from './Product/Product'
import Header from '../Header/Header';
import './productStyles.css'
import farm from '../../Assets/Farm.png'
import farm1 from '../../Assets/Farm_1.png'
import farm2 from '../../Assets/Farm_2.png'
import { commerce } from '../../lib/commerce';
import Cart from '../Cart/Cart';




const products = [

    {
        id: 1, name: 'shoes', description: 'Running shoes', price: '$5', images: farm
    }, 
    {
        id: 2, name: 'shoes', description: 'Running shoes', price: '$10', images: farm1
    }, 
    {
        id: 3, name: 'shoes', description: 'Running shoes', price: '$5', images: farm2
    },

]

const Products = () => {

    const [products, setProducts] = useState([])
    const [cart, setCart] = useState({})


    const fetchCart = async () => {
        setCart(await commerce.cart.retrieve())
    }

    const fetchProducts = async () => {
        const {data} = await commerce.products.list()
        setProducts(data)
    }

    const handleAddToCart = async(productId, quantity) => {

        console.log('hello there')
        const {cart} = await commerce.cart.add(productId, quantity)
        setCart(cart)
    }

  
    useEffect(() => {
        fetchProducts();
        fetchCart()
    }, [])


   return (
    <div>
   <Header totalItems={cart?.total_items} />
   <Grid container marginTop={10} justify="center" spacing={4}>
            {
            products.map((product) => {
                    return <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                    <Product product={product} onAddToCart={handleAddToCart} />
                    </Grid> 
                })
            }

    </Grid>
        
        </div>)


}


export default Products