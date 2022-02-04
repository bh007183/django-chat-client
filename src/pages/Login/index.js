import React, { useEffect, useState } from "react";
import Fab from "@mui/material/Fab";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import FormHelper from "../../utility";
import {Link} from "react-router-dom"
import "./style.css";
import {user_login} from "../../redux/user-slice";
import {useDispatch, useSelectore} from "react-redux"

export default function Login() {
  let { handleInput } = new FormHelper();
  const dispatch = useDispatch()

  const [formstate, setFormState] = useState({
    email: "",
    password: "",
  });

  const handle_login = (event) =>{
    event.preventDefault()
    dispatch(user_login(formstate))
  }

  return (
    <main className="login-create-container">
      <section className="top-wave"></section>
      <section className="center-contain">
        <div>
          <h1 className="center-align entry-title">Login</h1>
          <div className="entry-form-wraper">
            <form onSubmit={handle_login} className="entry-form">
              <div className="form-content-wraper align">
                <div className="entry-input-contain">
                  <input
                    placeholder="Email"
                    onChange={(event) =>
                      handleInput(formstate, setFormState, event)
                    }
                    id="top-input"
                    style={{ display: "block" }}
                    name="email"
                    value={formstate.email}
                  ></input>
                  <input
                    type="password"
                    placeholder="Password"
                    onChange={(event) =>
                      handleInput(formstate, setFormState, event)
                    }
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
