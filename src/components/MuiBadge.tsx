import { Badge } from "@mui/material"
import { Stack } from "@mui/system"
import MailIcon from '@mui/icons-material/Mail'

export const MuiBadge = () => {
  return (
    <Stack direction="row" spacing={2}>
      <Badge badgeContent={5} color="primary">
        <MailIcon />
      </Badge>
      <Badge badgeContent={0} color="secondary" showZero>
        <MailIcon />
      </Badge>
      <Badge badgeContent={100} color="primary">
        <MailIcon />
      </Badge>
      <Badge badgeContent={200} color="primary" max={999}>
        <MailIcon />
      </Badge>
      <Badge variant="dot" badgeContent={5} color="primary">
        <MailIcon />
      </Badge>
      <Badge variant="dot" badgeContent={5} color="primary" invisible>
        <MailIcon />
      </Badge>
    </Stack>
  )
}
