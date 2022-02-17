import React from 'react'

import TextArea from "../../components/TextArea"

import "./style.css"

export default function Dashboard() {
    
  return (
    <div id="dash-container" >
        <section id="room-list-container">

        </section>
        <section id="conversation-container">


        <TextArea/>
        </section>

    </div>
  )
}
