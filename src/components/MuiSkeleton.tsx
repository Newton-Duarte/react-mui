import { Skeleton } from "@mui/material"
import { Stack } from "@mui/system"

export const MuiSkeleton = () => {
  return (
    <Stack spacing={1} width="250px">
      <Skeleton />
      <Skeleton variant="circular" width={40} height={40} />
      <Skeleton variant="rectangular" width={250} height={125} />
    </Stack>
  )
}
