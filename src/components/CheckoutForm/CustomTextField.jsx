import React from "react";

import { TextField, Grid } from "@mui/material";
import { useFormContext, Controller } from "react-hook-form";

const FormInput = ({ name, label, required }) => {
  const { control } = useFormContext();



  return (
    <Grid item xs={12} sm={6}>
      <Controller
      
        render={({ field }) => (
          <TextField {...field} label={label} required variant="standard" />
        )}
        control={control}
        name={name}
        fullWidth
      />
    </Grid>
  );
};

export default FormInput;
