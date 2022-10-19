import React from 'react'
import { AddShoppingCart } from '@mui/icons-material';
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Typography } from "@mui/material";
import { IconButton} from "@mui/material";


import './styles.css'

const Product = ({product, onAddToCart}) => {
  return (
    <Card className='root'>
        <CardMedia className='media' image={product.image.url} title={Product.name}/>
        <CardContent>
            <div className='cardContent'>
                <Typography variant='h5' gutterBottom>
                    {product.name}
                    <Typography variant='h6' color="textSecondary" gutterBottom>
                    {product.price.formatted_with_symbol}
                </Typography>
                </Typography> 
                
            </div>
            <Typography dangerouslySetInnerHTML={{__html: product.description}}/>
               
        </CardContent>
        <CardActions disableSpacing className='cardActions'>
            <IconButton aria-label='Add to Cart' onClick={() => onAddToCart(product.id, 1)}>
        <AddShoppingCart />
            </IconButton>
        </CardActions>
    </Card>
  )
}

export default Product