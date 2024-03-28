import { Alert, AlertTitle } from '@mui/material'
import React from 'react'

function Alerts({message, title, type}) {
    const alert = (
        <Alert severity="warning">
            <AlertTitle>{title}</AlertTitle>
            {message}
        </Alert>
    )
    
    const success = (
        <Alert severity="success">
            <AlertTitle>{title}</AlertTitle>
            {message}
        </Alert>
    )
    const error = (
        <Alert severity="error">
            <AlertTitle>{title}</AlertTitle>
            {message}
        </Alert>
    )
  return (
    <div>
        { type == "success" ? success :
          type == "error" ? error :
          type == "warning" ? alert :
          "No Match!" 
        }
    </div>
  )
}

export default Alerts