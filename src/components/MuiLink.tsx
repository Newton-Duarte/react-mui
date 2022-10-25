import { Link, Typography } from "@mui/material"
import { Stack } from "@mui/system"

export const MuiLink = () => {
  return (
    <Stack spacing={2} direction="row" m={4}>
      <Link href="#">Link</Link>
      <Link href="#" color="secondary" underline="none">Secondary</Link>
      <Link href="#" variant="body2">Body 2 Link</Link>
      <Typography variant="h6">
        <Link href="#">H6 Typography Link</Link>
      </Typography>
    </Stack>
  )
}
