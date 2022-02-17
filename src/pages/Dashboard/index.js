import React from "react";
import "./style.css";
import useMediaQuery from "@mui/material/useMediaQuery";
// import ConversationContainer from '../../components/Conversation';
import TextArea from "../../components/TextArea";
export default function Dashboard() {
  const matches = useMediaQuery("(min-width:600px)");
  console.log(matches);
  return (
    <div id="dash-container">
      <section id="room-list-container"></section>

      {matches && (
        <>
          <section id="conversation-container">
            <h1 style={{ color: "white" }}>{matches}</h1>
            <TextArea />
          </section>
        </>
      )}
    </div>
  );
}
