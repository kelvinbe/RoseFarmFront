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


const AddressForm = () => {
  const counties = ['Kiambu']

  const methods = useForm();
  const [county, setCounty] = useState(counties)

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Delivery Address
      </Typography>
      <FormProvider {...methods}>
        <form onSubmit="">
          <Grid container spacing={3}>
            <FormInput required name="firstName" label="First name" />
            <FormInput required name="lastName" label="Last name" />
            <FormInput required name="email" label="Email" />
            <FormInput required name="city" label="City" />
            {/* <Grid item xs={12} sm={6}>
              <InputLabel>Delivery County</InputLabel>
              <Select value="" fullWidth onChange>
                <MenuItem key="" value="">
                  Select Me
                </MenuItem>
              </Select>
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel>Shipping Options</InputLabel>
              <Select value="" fullWidth onChange>
                <MenuItem key="" value="">
                  Select Me
                </MenuItem>
              </Select>
            </Grid> */}
          </Grid>
        </form>
      </FormProvider>
    </>
  );
};

export default AddressForm;
