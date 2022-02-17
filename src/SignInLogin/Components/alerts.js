import React from 'react'
import Alert from '@mui/material/Alert';

export default function Alerts({severity, message}) {
  return (
    <Alert severity={severity}>{message}</Alert>
  )
}
