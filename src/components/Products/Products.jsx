import React, { useState, useEffect } from "react";

import Grid from "@mui/material/Grid";
import Product from "./Product/Product";
import Header from "../Header/Header";
import "./productStyles.css";
// import farm from "../../Assets/Farm.png";
// import farm1 from "../../Assets/Farm_1.png";
// import farm2 from "../../Assets/Farm_2.png";
import { commerce } from "../../lib/commerce";
// import Cart from "../Cart/Cart";
import { useSelector, useDispatch } from "react-redux";
import CircularStatic from "../Loader/Loader";
import { Store } from 'react-notifications-component';
import { ReactNotifications } from 'react-notifications-component'




// const products = [
//   {
//     id: 1,
//     name: "shoes",
//     description: "Running shoes",
//     price: "$5",
//     images: farm,
//   },
//   {
//     id: 2,
//     name: "shoes",
//     description: "Running shoes",
//     price: "$10",
//     images: farm1,
//   },
//   {
//     id: 3,
//     name: "shoes",
//     description: "Running shoes",
//     price: "$5",
//     images: farm2,
//   },
// ];



const notification = {
  title: "Added item to cart",
  message: "You added new item to cart",
  type: "info",
  insert: "top",
  container: "top-right",
  animationIn: ["animate__animated animate__fadeIn"], // `animate.css v4` classes
  animationOut: ["animate__animated animate__fadeOut"] // `animate.css v4` classes
};

const Products = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const results = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  

  const fetchProducts = async () => {
    try {
      if(products.length === 0){
      setLoading(true);

      }else{
        setLoading(false)
      }
      console.log('products', products)
      const { data } = await commerce.products.list();
      setProducts(data);
    } catch (error) {}
  };

  const handleAddToCart = async (productId, quantity) => {
    const { cart } = await commerce.cart.add(productId, quantity);
    console.log("cartttt", cart);


    Store?.addNotification({
      ...notification,
      container: 'top-left',
      dismiss: {
        duration: 5000
      }
    })
    

    setCart(cart);
   
  };

  useEffect(() => { 
    const fetchCart = async () => {
      setCart(await commerce.cart.retrieve());
      console.log(cart);
      console.log(results);
      console.log(dispatch);
    };
    fetchProducts();
    const fetchData = async () => {
      fetchCart();
    };

   

    fetchData();
  }, [cart, results, dispatch]);


  useEffect(() => {



  }, [])

  return (
    <div className="products">
      <Header totalItems={cart?.total_items} />
      <ReactNotifications />

        <Grid
          container
          marginTop={10}
          justify="center"
          spacing={4}
          style={{ padding: "20px", justifyContent: 'center', }}
        >
       {loading ? <div style={{alignItems: 'center',textAlign: 'center', height: '100vh', display: 'flex', justifyContent: 'center'}}><CircularStatic /></div> : products.map((product) => {
            return (
              <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                <Product product={product} onAddToCart={handleAddToCart} />
              </Grid>
            );
          })}
        </Grid>
    
    </div>
  );
};

export default Products;
