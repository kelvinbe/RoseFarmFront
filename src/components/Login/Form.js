import React, {useState} from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { signIn } from "../Auth/AuthApi";

import './Form.css'

export default function Form() {

  const initialValues = {email: "", password: ""};
  const [formValues, setFormValues] = useState(initialValues)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleChange = (e) => {
    const {name, value} = e.target
    setFormValues({...formValues, [name]: value})
    
  }



  const submitAuth = async (e) => {
    e.preventDefault()  
    // const user = localStorage.getItem('profile')

    const data = await signIn(formValues)
    console.log('data', data.result)
    dispatch({ type: "GET_USER_AUTH", data })
    navigate('/')
    console.log("value", formValues);
  };
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
      onSubmit={submitAuth}
    >

      <div className='emailLogin'>
        <TextField
          type='text'
          label="Email"
          value={formValues.email}
          onChange={handleChange}
          name='email'
          style={{margin: 30}}
          helperText="Enter your email address."

        />
        <TextField
          type='password'
          label="Password"
          value={formValues.password}
          onChange={handleChange}
          name='password'
          style={{margin: 30}}
          helperText="Enter your password."


        />
      </div>
      <div style={{textAlign: 'center'}}>
      <Button type='submit' style={{backgroundColor: '#7A0BC0',width: 308}} variant="contained">Login</Button>

      </div>
    </Box>
  );


    }

