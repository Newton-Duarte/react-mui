import { Masonry } from "@mui/lab";
import { Box, Paper } from "@mui/material";

const heights = [150, 30, 90, 70, 110, 150, 130, 80, 50, 90, 100, 150, 30, 50, 80];

export const MuiMasonry = () => {
  return (
    <Box sx={{ width: 500, minHeight: 393 }}>
      <Masonry columns={4} spacing={2}>
        {heights.map((height, index) => (
          <Paper
            key={index}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height,
              border: '1px solid'
            }}
          >
            {index + 1}
          </Paper>
        ))}
      </Masonry>
    </Box>
  )
}
