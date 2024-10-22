import React from 'react'
import './Signup.css'
import { TextField, Button, MenuItem, Grid, Paper, Typography } from '@mui/material';
import { useState } from "react";



function Signup() {
const[formData,setFormData]=useState({
    name: '',
    address: '',
    number: '',
    email: '',
    gender: '',
    dob: '',
    course: ''
})
const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Data stored successfully:\n${JSON.stringify(formData, null, 2)}`);  };

  const handleReset = () => {
    setFormData({
      name: '',
      address: '',
      mobile: '',
      email: '',
      gender: '',
      dob: '',
      course: ''
    });
  };


  return (
    <div style={{backgroundImage: "url('/e1.jpg')" ,backgroundSize: "cover",backgroundPosition: "center",width: "100%",height: "100vh"}}>
 <div style={{ width: "600px",height: "700px",marginLeft:"200px",position: "absolute",top: "50%",left: "35%",transform: "translate(-50%, -50%)", borderRadius:"50px"}} className='under'>
    <h1 className='text-center fw-bolder'> Registration Form </h1>
    <form className='mt-5' onSubmit={handleSubmit} onReset={handleReset}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              style={{width:"80%" ,marginLeft:"60px"}}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              style={{width:"80%" ,marginLeft:"60px"}}  required/>
               
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Mobile Number"
              name="number"
              value={formData.number}
              onChange={handleChange}
              
              style={{width:"80%" ,marginLeft:"60px"}}   required/>
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={{width:"80%" ,marginLeft:"60px"}}   required/>
          </Grid>
          <Grid item xs={12}>
            <TextField
              select
              label="Gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
             
              style={{width:"80%" ,marginLeft:"60px"}}   required
            >
              <MenuItem value=""><em>Select</em></MenuItem>
              <MenuItem value="Male">Male</MenuItem>
              <MenuItem value="Female">Female</MenuItem>
              <MenuItem value="Other">Other</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              type='date'

              style={{width:"80%" ,marginLeft:"60px"}}   required

            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              select
              label="Course"
              name="course"
             
              value={formData.course}
              onChange={handleChange}
              style={{width:"80%" ,marginLeft:"60px"}}   required


            >
              <MenuItem value=""><em>Select</em></MenuItem>
              <MenuItem value="Biology">Biology</MenuItem>
              <MenuItem value="Computer Science">Computer Science</MenuItem>
              <MenuItem value="Commerce">Commerce</MenuItem>
              <MenuItem value="Humanities">Humanities</MenuItem>
            </TextField>
          </Grid>
           <Grid item xs={12} style={{ marginTop: 20 }}>
            <Button variant="contained" color="success" type="submit"  style={{ marginLeft:"200px" }}>
              Submit
            </Button>
            <Button variant="outlined" className='bg-danger text-light' type="reset" style={{ marginLeft:"20px" }}>
              Reset
            </Button>
          </Grid>
          


</Grid>
          </form>
        </div> 
           </div>
  
  )
}

export default Signup