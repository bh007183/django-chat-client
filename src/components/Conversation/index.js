import useMediaQuery from '@mui/material/useMediaQuery';
import React from 'react'
import TextArea from "../../components/TextArea"
import "./style.css"

export default function ConversationContainer() {
    const matches = useMediaQuery('(max-width:600px)');
  return (
    <section id="conversation-container">
        <h1 style={{color: 'white'}}>{matches}</h1>
        <TextArea/>
    </section>
  )
}
