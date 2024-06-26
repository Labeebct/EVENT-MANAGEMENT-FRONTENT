import React from 'react'
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

const BasicAlert = ({type,msg,variant}) => {
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert severity={type}>{msg}</Alert>
    </Stack>
  )
}

export default BasicAlert