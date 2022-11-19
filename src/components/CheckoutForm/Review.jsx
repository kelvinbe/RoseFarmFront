import React from 'react'
import {Typography, List, ListItem, ListItemText} from '@mui/material'

const Review = ({checkoutToken, data}) => {
    // console.log('checkoutInReview', checkoutToken)
    console.log('dataInReview', data)

  return (
    <>

    <Typography variant='h6' gutterBottom>
        Order summary
    </Typography>
    <List disablePadding>
        <ListItem styles={{padding: '2px 0'}} key={'Names'}>
        <ListItemText primary={'First Name:'}/>
        <ListItemText primary={data.firstName} style={{textAlign: 'end'}}/>     
        </ListItem>
        <ListItem styles={{padding: '2px 0'}} key={'Last'}>
        <ListItemText primary={'Last Name:'}/>
        <ListItemText primary={data.lastName} style={{textAlign: 'end'}}/>
            
        </ListItem>
        <ListItem styles={{padding: '3px 0'}} key={'email'}>
        <ListItemText primary={'Email:'}/>
        <ListItemText style={{textAlign: 'end'}} primary={data.email}/>
            
        </ListItem>
         
        <ListItem styles={{padding: '3px 0'}} key={'county'}>
        <ListItemText primary={'County:'}/>
        <ListItemText style={{textAlign: 'end'}} primary={data.county[0]}/>  
        </ListItem>
        <ListItem styles={{padding: '3px 0'}} key={'City'}>
        <ListItemText primary={'City:'}/>
        <ListItemText style={{textAlign: 'end'}} primary={data.city}/>
            
        </ListItem>
        <ListItem styles={{padding: '3px 0'}} key={'Ship'}>
        <ListItemText primary={'Shipping Options:'}/>
        <ListItemText style={{textAlign: 'end'}} primary={data.shipingOption[0]}/>
            
        </ListItem>
       
        {checkoutToken?.line_items.map((product) => {
        return  <ListItem styles={{padding: '10px 0'}} key={product.name}>
                <ListItemText primary={product.name} secondary={`Quantity: ${product.quantity}`}/>
                <Typography variant='body2'>{product.line_total.formatted_with_symbol}</Typography>
            </ListItem>
        })}
        <ListItem style={{padding: '10px'}}>
            <ListItemText primary='Total' />
            <Typography variant='subtitle1' style={{fontWeight: 700}}>
                {checkoutToken.subtotal.formatted_with_symbol}
            </Typography>
        </ListItem>
    </List>
    
    </>
  )
}

export default Review