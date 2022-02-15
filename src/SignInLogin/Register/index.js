import React, { useEffect, useState } from "react";
import { Button, Box, Grid, TextField } from "@mui/material";
import "./style.css";
import FormHelper from "../../utility";
import { create_user, reset_error } from "../../redux/auth-slice";
import { useDispatch, useSelector } from "react-redux";
import { useStoreContext } from "../Context/store";
export default function Register() {
  // Import handleInput function
 
  const [state, dispatch] = useStoreContext();
  //This forms state
  const [formstate, setFormState] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });

  const handle_submit = (event) => {
    event.preventDefault();
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json')
    const myRequest = new Request('http://127.0.0.1:8000/auth/users/', {
    method: 'POST',
    headers: myHeaders,
    body: JSON.stringify(formstate)
    });
    dispatch({ type: 'FETCH', myRequest})
  };

  // useEffect(() => {
  //   return () => {
  //     dispatch(reset_error());
  //   };
  // });

  const handleInput = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    setFormState({
      ...formstate,
      [name]: value,
    });
  };

  return (
    <div className="register-container">
      <form onSubmit={handle_submit} className="register-form">
        <div>
          <p>Welcome to Chat, fill out the form below to register!</p>
        </div>
        <Box sx={{ flexGrow: 1 }}>
          <Grid className="grid-item" container spacing={2}>
            <Grid className="grid-item" item md={6} lg={4}>
              <TextField
                onChange={handleInput}
                size="small"
                variant="outlined"
                name="first_name"
                value={formstate.first_name}
                label="First Name"
                required="true"
              ></TextField>
            </Grid>
            <Grid className="grid-item" item md={6} lg={4}>
              <TextField
                onChange={handleInput}
                size="small"
                variant="outlined"
                name="last_name"
                value={formstate.last_name}
                label="Last Name"
                required="true"
              ></TextField>
            </Grid>
            <Grid className="grid-item" item md={6} lg={4}>
              <TextField
                onChange={handleInput}
                size="small"
                variant="outlined"
                name="email"
                value={formstate.email}
                label="Email"
                required="true"
              ></TextField>
            </Grid>
            <Grid className="grid-item" item md={6} lg={4}>
              <TextField
                onChange={handleInput}
                size="small"
                variant="outlined"
                name="password"
                value={formstate.password}
                label="Password"
                type="password"
                required="true"
              ></TextField>
            </Grid>
          </Grid>
        </Box>
        <div className="form-submit-button-container">
          <Button type="submit" variant="outlined">
            Register
          </Button>
        </div>
      </form>
    </div>
  );
}
