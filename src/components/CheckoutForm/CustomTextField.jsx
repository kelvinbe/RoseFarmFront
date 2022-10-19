import React from "react";

import { TextField, Grid } from "@mui/material";
import { useFormContext, Controller } from "react-hook-form";

const FormInput = ({ name, label, required }) => {
  const { control } = useFormContext();
  return (
    <Grid item xs={12} sm={6}>
      <Controller
      control={control}
      fullWidth
      name={name}
        render={({ field }) => (
          <TextField label={label} required variant="standard" />
        )}
        
      />
    </Grid>
  );
};

export default FormInput;
