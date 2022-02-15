import React, { useEffect, useState } from "react";
import Fab from "@mui/material/Fab";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import FormHelper from "../../utility";
import {Link} from "react-router-dom"
import "./style.css";
import {user_login} from "../../redux/auth-slice";
import {useDispatch, useSelectore} from "react-redux"
import { useStoreContext } from "../Context/store";
export default function Login() {
  
  const [state, dispatch] = useStoreContext()
  console.log(state)
  console.log(useStoreContext())

  // const dispatch = useDispatch()

  const [formstate, setFormState] = useState({
    email: "",
    password: "",
  });

  const handle_login = (event) =>{
    event.preventDefault()
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json')
    const myRequest = new Request('http://127.0.0.1:8000/auth/jwt/create/', {
    method: 'POST',
    headers: myHeaders,
    body: JSON.stringify(formstate)
    });
    
    dispatch({ type: 'FETCH', myRequest})
  }

  const handleInput = (event) =>{
    let name = event.target.name;
    let value = event.target.value;
    setFormState({
      ...formstate, [name]: value
    })
    
  }

  return (
    <main className="login-create-container">
      <section className="top-wave"></section>
      <section className="center-contain">
        <div>
          <h1 className="center-align entry-title">Login</h1>
          <h6></h6>
          <div className="entry-form-wraper">
            <form onSubmit={handle_login} className="entry-form">
              <div className="form-content-wraper align">
                <div className="entry-input-contain">
                  <input
                    placeholder="Email"
                    onChange={handleInput}
                    id="top-input"
                    style={{ display: "block" }}
                    name="email"
                    value={formstate.email}
                  ></input>
                  <input
                    type="password"
                    placeholder="Password"
                    onChange={handleInput}
                    id="bottom-input"
                    style={{ display: "block" }}
                    name="password"
                    value={formstate.password}
                  ></input>
                </div>
                <Fab
                  type="submit"
                  id="login-botton"
                  color="primary"
                  aria-label="edit"
                >
                  <ArrowForwardIcon />
                </Fab>
              </div>
            </form>
          </div>
        </div>
        <Link id="register-link" to="/register">Register</Link>
      </section>
      <section className="bottom-wave"></section>
    </main>
  );
}
