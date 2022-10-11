import React from 'react'
import { Button, ButtonGroup, IconButton, Stack } from '@mui/material'
import SendIcon from '@mui/icons-material/Send';

export const MuiButton = () => {
  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction="row">
        <Button variant="text" href="https://google.com">Text</Button>
        <Button variant="contained">Text</Button>
        <Button variant="outlined">Text</Button>
      </Stack>

      <Stack spacing={2} direction="row">
        <Button variant="contained" color="primary">Primary</Button>
        <Button variant="contained" color="secondary">Secondary</Button>
        <Button variant="contained" color="error">Error</Button>
        <Button variant="contained" color="warning">Warning</Button>
        <Button variant="contained" color="info">Info</Button>
        <Button variant="contained" color="success">Success</Button>
      </Stack>

      <Stack spacing={2} direction="row">
        <Button variant="text" color="primary">Primary</Button>
        <Button variant="text" color="secondary">Secondary</Button>
        <Button variant="text" color="error">Error</Button>
        <Button variant="text" color="warning">Warning</Button>
        <Button variant="text" color="info">Info</Button>
        <Button variant="text" color="success">Success</Button>
      </Stack>

      <Stack spacing={2} direction="row">
        <Button variant="outlined" color="primary">Primary</Button>
        <Button variant="outlined" color="secondary">Secondary</Button>
        <Button variant="outlined" color="error">Error</Button>
        <Button variant="outlined" color="warning">Warning</Button>
        <Button variant="outlined" color="info">Info</Button>
        <Button variant="outlined" color="success">Success</Button>
      </Stack>

      <Stack display="block" spacing={2} direction="row">
        <Button variant="contained" size="small">Small</Button>
        <Button variant="contained" size="medium">Medium</Button>
        <Button variant="contained" size="large">Large</Button>
      </Stack>

      <Stack spacing={2} direction="row">
        <Button variant="contained" disableRipple startIcon={<SendIcon />}>Send</Button>
        <Button variant="contained" disableElevation endIcon={<SendIcon />}>Send</Button>
        <IconButton color="success" size="small" onClick={() => alert('Sent!')}>
          <SendIcon />
        </IconButton>
      </Stack>

      <Stack direction="row">
        <ButtonGroup variant="outlined" orientation="vertical" size="large" arial-label="alignment button group">
          <Button onClick={() => alert('Left clicked!')}>Left</Button>
          <Button onClick={() => alert('Center clicked!')}>Center</Button>
          <Button onClick={() => alert('Right clicked!')}>Right</Button>
        </ButtonGroup>
      </Stack>
    </Stack>
  )
}
