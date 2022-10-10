import React from 'react'
import Grid from "@mui/material/Grid";
import Upwave from '../../Assets/Upwave.svg'
import DownWave from '../../Assets/DownWave.svg'
import Form from './Form';
import './SignUp.css'


export default function SignUp() {

   
  return (
    <Grid container className='container'>
        <Grid item className="imageUp">
            <div className='itemUp'>
                <img src={Upwave} alt='up' />
            </div>

            <div className='textUp'>
                Sign up
            </div>
        </Grid>

        <Grid item className='formUp'>
            <Form />
        </Grid>


        <Grid item className="imageDown">
            <div className='itemDown'>
                <img src={DownWave} alt='down' />
            </div>
        </Grid>


        </Grid>
  )
}
