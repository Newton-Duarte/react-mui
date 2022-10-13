import { Box, MenuItem, TextField } from "@mui/material"
import React, { useState } from "react"

export const MuiSelect = () => {
  const [value, setValue] = useState<string[]>([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const val = event.target.value;
    setValue(typeof val === 'string' ? val.split(',') : val);
  };

  return (
    <Box width="250px">
      <TextField
        label="Select country"
        select value={value}
        onChange={handleChange}
        fullWidth
        SelectProps={{ multiple: true }}
      >
        <MenuItem value="IN">India</MenuItem>
        <MenuItem value="US">USA</MenuItem>
        <MenuItem value="BR">Brazil</MenuItem>
      </TextField>
    </Box>
  )
}
