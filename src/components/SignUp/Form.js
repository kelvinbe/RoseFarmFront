import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { signUp } from "../Auth/AuthApi";

import "./Form.css";

export default function Form() {
  const initialValues = {firstName: "", lastName: "", email: "", password: "", confirmPassword: ""};
  const [formValues, setFormValues] = useState(initialValues)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleChange = (e) => {
    const {name, value} = e.target
    setFormValues({...formValues, [name]: value})
    
  }

  const submitAuth = async (e) => {
    e.preventDefault()  

    const data = await signUp(formValues)
    // console.log('data', data.result)
    // const user = data?.result
    // console.log('data', )
    

    dispatch({ type: "GET_USER_AUTH", data})
    navigate('/login')
    console.log("value", formValues);
  };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
      onSubmit={submitAuth}
    >
      <div>
        <div className="userText">
          <TextField
            type="text"
            label="First Name"
            name='firstName'
            value={formValues.firstName}
            onChange={handleChange}
            helperText="Enter your first name."
          />
          <TextField
            type="text"
            name='lastName'
            label="Last Name"
            value={formValues.lastName}
            onChange={handleChange}
            helperText="Enter your last name."
          />
        </div>
      </div>
      <div className="email">
        <TextField
          type="email"
          name='email'
          label="Email"
          value={formValues.email}
          onChange={handleChange}
          style={{ margin: 30 }}
          helperText="Enter your email address."
        />
        <TextField
          type="password"
          label="Password"
          name='password'
          value={formValues.password}
          onChange={handleChange}
          style={{ margin: 30 }}
          helperText="Enter your password."
        />
      </div>
      <div>
        <TextField
          type="password"
          label="Confirm Password"
          name='confirmPassword'
          value={formValues.confirmPassword}
          onChange={handleChange}
          style={{ margin: 40 }}
          helperText="Confirm your password."
        />
      </div>
      <div>
        <Button
          style={{ backgroundColor: "#7A0BC0" }}
          variant="contained"
          type='submit'
        >
          Sign up
        </Button>
      </div>
    </Box>
  );
}
