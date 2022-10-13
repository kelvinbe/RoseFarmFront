import React from 'react'
import {InputLable, Select, MenuItem, Button, Grid, Typography} from '@mui/material'
import {useForm, FormProvider} from 'react-hook-form'
import FormInput from './CustomTextField'

const AddressForm = () => {

  const methods = useForm()

  return (
    <>
      <Typography variant='h6' gutterBottom>
        Shipping Address
      </Typography>
      <FormProvider {...methods}>
        <form onSubmit=''>
        <Grid container spacing={3}>
          <FormInput required name='firstname' lable='First name'/>
        </Grid>
        </form>
      </FormProvider>


    </>
  )
}

export default AddressForm