
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from "../Dashboard"
import Header from "../../components/Header"

export default function Core() {
  return(
    <>
    <Header/>
    <Dashboard></Dashboard>

</>
  );
}
