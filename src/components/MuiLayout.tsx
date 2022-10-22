import { Box } from '@mui/material'

export const MuiLayout = () => {
  return (
    <>
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
    </>
  )
}
