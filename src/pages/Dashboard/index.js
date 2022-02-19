import React from "react";
import "./style.css";
import RoomButton from "../../components/RoomButton"
import Stack from '@mui/material/Stack';
// import ConversationContainer from '../../components/Conversation';
import ConversationArea from "../../components/Conversation";

export default function Dashboard() {

  return (
    <div id="dash-container">
    <section id="room-list-container">
    <Stack spacing={1} direction="column">
      <br></br>
      <RoomButton/>
      <RoomButton/>
    </Stack>

    </section>

    <ConversationArea/>
    </div>
  );
}
