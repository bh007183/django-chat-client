import React from 'react'
import SendIcon from "@material-ui/icons/Send"
import IconButton from '@mui/material/IconButton'
import "./style.css"
export default function TextArea() {
    const handleKeyDown = (e) => {
        e.target.style.height = "inherit";
        e.target.style.height = `${Math.min(e.target.scrollHeight, 80)}px`;
      };
  return (
    <form id="messageForm">
          
          
          <textarea
            id="input"
            placeholder="type here..."
           
            rows="2"
            onKeyUp={handleKeyDown}
          ></textarea>
          <div id="formBar">
            <IconButton type="submit">
              <SendIcon />
            </IconButton>
          </div>
        </form>


       
  )
}
