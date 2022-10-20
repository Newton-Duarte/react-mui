import { useState } from 'react';
import { Rating } from '@mui/material'
import { Stack } from '@mui/system'
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export const MuiRating = () => {
  const [value, setValue] = useState<number | null>(3.5);
  const [value2, setValue2] = useState<number | null>(5);

  const handleChange = (_event: React.ChangeEvent<{}>, newValue: number | null) => {
    setValue(newValue);
  };

  const handleChange2 = (_event: React.ChangeEvent<{}>, newValue: number | null) => {
    setValue2(newValue);
  };

  console.log({ value, value2 });

  return (
    <Stack spacing={4}>
      <Stack spacing={2}>
        <Rating
          value={value}
          onChange={handleChange}
          precision={0.5}
          size="large"
          icon={<FavoriteIcon fontSize="inherit" color="error" />}
          emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
          readOnly
        />
      </Stack>
      <Stack spacing={2}>
        <Rating
          value={value2}
          onChange={handleChange2}
          size="large"
          icon={<FavoriteIcon fontSize="inherit" color="error" />}
          emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
          highlightSelectedOnly
        />
      </Stack>
    </Stack>
  )
}
