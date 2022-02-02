import { React } from "react";
import Fab from "@mui/material/Fab";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "./style.css";

export default function Login() {
  return (
    <main className="login-create-container">
      <section className="top-wave"></section>
      <section className="center-contain">
        <div>
          <h1 className="center-align entry-title">Login</h1>
          <form className="entry-form align">
            <div className="entry-input-contain">
              <input id="top-input" style={{ display: "block" }}></input>

              <input id="bottom-input" style={{ display: "block" }}></input>
            </div>
            <Fab color="secondary" aria-label="edit">
              <ArrowForwardIcon />
            </Fab>
          </form>
        </div>
      </section>
      <section className="bottom-wave"></section>
    </main>
  );
}
