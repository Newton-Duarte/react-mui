import React, { useState } from 'react';
import { Box, Checkbox, FormControl, FormControlLabel, FormGroup, FormHelperText, FormLabel } from '@mui/material'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';

export const MuiCheckbox = () => {
  const [value, setValue] = useState(false);
  const [skills, setSkills] = useState<string[]>([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.checked);
  };

  const handleSkillsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const index = skills.indexOf(event.target.value);

    if (index === -1) {
      setSkills([...skills, event.target.value]);
    } else {
      setSkills(skills.filter((skill) => skill !== event.target.value));
    }
  };

  console.log(skills);

  return (
    <Box>
      <Box>
        <FormControlLabel
          label="I accept terms and conditions"
          control={<Checkbox checked={value} onChange={handleChange} />}
        ></FormControlLabel>
      </Box>
      <Box>
        <Checkbox
          icon={<BookmarkIcon />}
          checkedIcon={<BookmarkBorderIcon />}
          checked={value}
          onChange={handleChange}
        />
      </Box>
      <Box>
        <FormControl error>
          <FormLabel>Skills</FormLabel>
          <FormGroup row>
            <FormControlLabel
              label="HTML"
              value="html"
              control={<Checkbox size="small" color="secondary" checked={skills.includes('html')} onChange={handleSkillsChange} />}
            ></FormControlLabel>
            <FormControlLabel
              label="CSS"
              value="css"
              control={<Checkbox checked={skills.includes('css')} onChange={handleSkillsChange} />}
            ></FormControlLabel>
            <FormControlLabel
              label="JavaScript"
              value="javascript"
              control={<Checkbox checked={skills.includes('javascript')} onChange={handleSkillsChange} />}
            ></FormControlLabel>
          </FormGroup>
          <FormHelperText>Invalid selection</FormHelperText>
        </FormControl>
      </Box>
    </Box>
  )
}
