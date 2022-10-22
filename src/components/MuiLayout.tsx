import { Box, Divider, Grid } from '@mui/material'
import { Stack } from '@mui/system'

export const MuiLayout = () => {
  return (
    <>
      <Stack
        sx={{ border: '1px solid' }}
        direction="row"
        spacing={2}
        divider={<Divider orientation="vertical" flexItem />}
        p={2}
      >
        <Box
          component="section"
          sx={{
            backgroundColor: 'primary.main',
            color: 'white',
            width: '150px',
            height: '150px',
            padding: '16px',
            cursor: 'pointer',
            '&:hover': {
              backgroundColor: 'primary.light'
            }
          }}
        >
          Newton Duarte
        </Box>
        <Box
          display="flex"
          width="150px"
          height="150px"
          bgcolor="success.light"
          p={2}
        ></Box>
      </Stack>
      <Grid container my={4} rowSpacing={2} columnSpacing={1}>
        <Grid item xs={6}>
          <Box bgcolor="primary.light" p={2}>
            Item 1
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box bgcolor="primary.light" p={2}>
            Item 2
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box bgcolor="primary.light" p={2}>
            Item 3
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box bgcolor="primary.light" p={2}>
            Item 4
          </Box>
        </Grid>
      </Grid>
    </>
  )
}
