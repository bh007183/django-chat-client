import React, { useEffect, useState } from "react";
import { Button, Box, Grid, TextField } from "@mui/material";
import "./style.css";
import FormHelper from "../../utility";
import {create_user, create_profile, reset_success, reset_error} from "../../redux/auth-slice"
import {useDispatch, useSelector} from "react-redux"
export default function Register() {
  // Import handleInput function
  let { handleInput } = new FormHelper();
  const dispatch = useDispatch()
//This forms state
  const [formstate, setFormState] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });





  const handle_submit = (event) =>{
    event.preventDefault()
    dispatch(create_user(formstate))
  }



  useEffect(() => {
    return () => {
      dispatch(reset_error())
      dispatch(reset_success())
    };
  });
  



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
                onChange={(event) =>
                  handleInput(formstate, setFormState, event)
                }
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
                onChange={(event) =>
                  handleInput(formstate, setFormState, event)
                }
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
                onChange={(event) =>
                  handleInput(formstate, setFormState, event)
                }
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
                onChange={(event) =>
                  handleInput(formstate, setFormState, event)
                }
                size="small"
                variant="outlined"
                name="password"
                value={formstate.password}
                label="Password"
                type="password"
                required="true"
              ></TextField>
            </Grid>
            <Grid className="grid-item" item md={6} lg={4}>
              <TextField
                onChange={(event) =>
                  handleInput(profilestate, setProfileState, event)
                }
                size="small"
                variant="outlined"
                name="callsign"
                value={profilestate.callsign}
                label="Call Sign"
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
