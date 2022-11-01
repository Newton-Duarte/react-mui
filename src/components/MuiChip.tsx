import { Avatar, Chip } from "@mui/material"
import { Stack } from "@mui/system"
import FaceIcon from '@mui/icons-material/Face';

export const MuiChip = () => {
  return (
    <Stack direction="row" spacing={1}>
      <Chip label="Chip" color="primary" size="small" icon={<FaceIcon />} />
      <Chip
        label="Chip outlined"
        color="secondary"
        size="small"
        variant="outlined"
        avatar={<Avatar>N</Avatar>}
      />
      <Chip label="Click" color="success" onClick={() => alert('Clicked')} />
      <Chip
        label="Delete"
        color="error"
        onClick={() => alert('Clicked')}
        onDelete={() => alert('Delete')}
      />
    </Stack>
  )
}
