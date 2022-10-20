import { FormControlLabel, Switch } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'

export const MuiSwitch = () => {
  const [value, setValue] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.checked);
  };

  console.log(value);

  return (
    <Box>
      <FormControlLabel
        label="Dark mode"
        control={<Switch size="small" color="secondary" checked={value} onChange={handleChange} />}
      />
    </Box>
  )
}
