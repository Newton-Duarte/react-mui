import { useState } from 'react';
import { InputAdornment, TextField } from '@mui/material'
import { Stack } from '@mui/system'

export const MuiTextField = () => {
  const [value, setValue] = useState('');

  return (
    <Stack spacing={4}>
      <Stack direction="row" spacing={2}>
        <TextField label="Name" variant="outlined" />
        <TextField label="Name" variant="filled" />
        <TextField label="Name" variant="standard" />
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField label="secondary" size="small" color="secondary" />
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField
          type="password"
          label="Form Input"
          error={!value}
          helperText={!value ? 'Required' : 'do not share your password with anyone'}
          value={value}
          onChange={({ target }) => setValue(target.value)}
          required
        />
        <TextField type="password" label="Password" helperText="do not share your password with anyone" />
        <TextField type="password" label="Read Only" InputProps={{ readOnly: true }} />
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField
          label="Amount"
          InputProps={
            { startAdornment: <InputAdornment position="start">$</InputAdornment>}
          }
        />
        <TextField
          label="Weight"
          InputProps={
            { startAdornment: <InputAdornment position="end">kg</InputAdornment>}
          }
        />
      </Stack>
    </Stack>
  )
}
