import React from 'react'
import { Typography, Button, Card, CardActions, CardContent, CardMedia } from '@mui/material'

import './cardItemStyles.css'

    const CartItem = ({item, handleUpdateCartQty, handleRemoveFromCart, handleEmptyCart}) => {
  return (
    <Card>
        <CardMedia image={item?.image.url} alt={item.name} className='media' />
        <CardContent className='cartContent'>
            <Typography variant='h4'>{item.name}</Typography>
            <Typography variant='h5'>{item.line_total.formatted_with_symbol}</Typography>
        </CardContent>

        <CardActions className='cardActions'>
                <div className='buttons'>
                    <Button type='button' size='small' onClick={() => handleRemoveFromCart(item.id, item.quantity - 1)}>-</Button>
                        <Typography>
                            {item.quantity}
                        </Typography>
                    <Button type='button' size='small' onClick={() => handleUpdateCartQty(item.id, item.quantity + 1)}>+</Button>
                </div>
                <Button variant='contained' type='button' color='secondary' onClick={() => handleEmptyCart(item.id)}>
                    Remove
                </Button>
        </CardActions>  


    </Card>
  )
}

export default CartItem