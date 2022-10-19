import React, { useState } from "react";
import {
  InputLabel,
  Select,
  MenuItem,
  Button,
  Grid,
  Typography,
} from "@mui/material";
import { useForm, FormProvider } from "react-hook-form";
import FormInput from "./CustomTextField";
import {Link} from 'react-router-dom';
import { styled } from "@mui/material/styles";



const Boot = styled("form")(({ theme }) => ({
  padding: theme.spacing(1),
  [theme.breakpoints.down("sm")]: {
    width: '346px',  
  },

  [theme.breakpoints.up("md")]: {
    // width: 760,
  },
  [theme.breakpoints.up("lg")]: {

    
  },
}));


const AddressForm = ({checkoutToken, next}) => {
  const counties = ['Kiambu, Gatundu']
  const shippingOptions = ['Pick up at Gatundu']


  const methods = useForm();
  const [county, setCounty] = useState(counties)
  const [shipingOption, setShippingOption] = useState(shippingOptions)
  

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Delivery Address
      </Typography>
      <FormProvider {...methods}>
        <Boot onSubmit={methods.handleSubmit((data) => next({...data, county, shipingOption}))}>
          <Grid container spacing={3}>
            <FormInput required name="firstName" label="First name" />
            <FormInput required name="lastName" label="Last name" />
            <FormInput required name="email" label="Email" />
            <FormInput required name="city" label="City" />
            <Grid item xs={12} sm={6}>
              <InputLabel>Delivery County</InputLabel>
              <Select value={county} fullWidth onChange={(e) => setCounty(e.target.value)}>
                <MenuItem key="" value={county}>
                  {county}
                </MenuItem>
              </Select>
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel>Shipping Options</InputLabel>
              <Select value={shipingOption} fullWidth onChange={(e) => setShippingOption(e.target.value)}>
                <MenuItem key="" value={shipingOption}>
                  {shipingOption}
                </MenuItem>
              </Select>
            </Grid>
          </Grid>
          <br />
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <Button variant='outlined' component={Link} to='/cart'>
            Back to Cart
          </Button>
          <Button type='submit' variant="contained" color='primary'>
              Next
          </Button>

        </div>
        </Boot>
      </FormProvider>
    </>
  );
};

export default AddressForm;
