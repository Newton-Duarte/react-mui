import { Autocomplete, TextField } from '@mui/material'
import { Stack } from '@mui/system'
import React, { useState } from 'react';

type Skill = {
  id: number;
  label: string;
};

const skills = ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React'];
const skillsOptions = skills.map((skill, index) => ({
  id: index + 1,
  label: skill,
}));

export const MuiAutocomplete = () => {
  const [value, setValue] = useState<string | null>('TypeScript');
  const [value2, setValue2] = useState<Skill | null>(null);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: string | null) => {
    setValue(newValue);
  }

  const handleChange2 = (event: React.ChangeEvent<{}>, newValue: Skill | null) => {
    setValue2(newValue);
  }

  console.log({ value2 });

  return (
    <Stack spacing={2} width="250px">
      <Autocomplete
        options={skills}
        value={value}
        onChange={handleChange}
        renderInput={(params) => <TextField {...params} label="Skills" />}
        freeSolo
      />
      <Autocomplete
        options={skillsOptions}
        value={value2}
        onChange={handleChange2}
        renderInput={(params) => <TextField {...params} label="Skills" />}
      />
    </Stack>
  )
}
