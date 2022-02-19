import React from "react";
import SendIcon from "@material-ui/icons/Send";
import IconButton from "@mui/material/IconButton";
import useMediaQuery from "@mui/material/useMediaQuery";
import "./style.css";
export default function ConversationArea() {
  const handleKeyDown = (e) => {
    e.target.style.height = "inherit";
    e.target.style.height = `${Math.min(e.target.scrollHeight, 80)}px`;
  };
  const matches = useMediaQuery("(min-width:600px)");
  return (
    <>
      {matches && (
        <section id="conversation-container">
          <h1 style={{ color: "white" }}>{matches}</h1>
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
        </section>
      )}
    </>
  );
}
