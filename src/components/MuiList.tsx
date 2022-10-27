import { Avatar, Box, Divider, List, ListItem, ListItemAvatar, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import MailIcon from '@mui/icons-material/Mail';

export const MuiList = () => {
  return (
    <>
      <Box sx={{ width: '400px', bgcolor: '#efefef' }} mb={5}>
        <List disablePadding>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <MailIcon />
              </ListItemIcon>
              <ListItemText primary="List item 1" secondary="Secondary text" />
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <MailIcon />
              </ListItemIcon>
              <ListItemText primary="List item 2" secondary="Secondary text" />
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <MailIcon />
              </ListItemIcon>
              <ListItemText primary="List item 3" secondary="Secondary text" />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
      <Box sx={{ width: '400px', bgcolor: '#efefef' }}>
        <List>
          <ListItem>
            <ListItemIcon>
              <ListItemAvatar>
                <Avatar>
                  <MailIcon />
                </Avatar>
              </ListItemAvatar>
            </ListItemIcon>
            <ListItemText primary="List item 1" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <ListItemAvatar>
                <Avatar>
                  <MailIcon />
                </Avatar>
              </ListItemAvatar>
            </ListItemIcon>
            <ListItemText primary="List item 2" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <ListItemAvatar>
                <Avatar>
                  <MailIcon />
                </Avatar>
              </ListItemAvatar>
            </ListItemIcon>
            <ListItemText primary="List item 3" />
          </ListItem>
        </List>
      </Box>
    </>
  )
}
