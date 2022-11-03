import { CircularProgress, LinearProgress } from "@mui/material"
import { Stack } from "@mui/system"

export const MuiProgress = () => {
  return (
    <Stack spacing={2}>
      <CircularProgress />
      <CircularProgress color="success" />
      <CircularProgress variant="determinate" value={75} />

      <LinearProgress />
      <LinearProgress color="success" />
      <LinearProgress variant="determinate" value={75} />
    </Stack>
  )
}
