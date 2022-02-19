import React from 'react'
import "./style.css"
import Button from '@mui/material/Button';

export default function RoomButton() {
  let condition = true
  return (

    <>
    { condition ? <Button className="glow-on-hover">
      Room Name
    </Button>
    :
    <Button size="large"variant="contained">
      Room Name
    </Button>
    }
    </>
  )
}
