import { Box } from "@mui/material"
import { Stack } from "@mui/system"

export const MuiResponsiveness = () => {
  return (
    <Stack
      direction={{
        xs: 'column',
        sm: 'row'
      }}
      spacing={{
        xs: 2,
        sm: 4,
        md: 6,
        lg: 8,
        xl: 10
      }}
    >
      <Box
        sx={{
          height: '300px',
          bgcolor: 'primary.main',
          width: {
            xs: 100, // >= 0px
            sm: 200, // >= 600px
            md: 300, // >= 900px
            lg: 400, // >= 1200px
            xl: 500, // >= 1536px
          }
        }}
      ></Box>
      <Box
        sx={{
          height: '300px',
          bgcolor: 'secondary.main',
          width: {
            xs: 100, // >= 0px
            sm: 200, // >= 600px
            md: 300, // >= 900px
            lg: 400, // >= 1200px
            xl: 500, // >= 1536px
          }
        }}
      ></Box>
    </Stack>
  )
}
