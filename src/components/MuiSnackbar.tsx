import { Alert, AlertProps, Button, Snackbar } from "@mui/material"
import { forwardRef, SyntheticEvent, useState } from "react"

const SnackbarAlert = forwardRef<HTMLDivElement, AlertProps>(
  function SnackbarAlert(props, ref) {
    return <Alert elevation={6} ref={ref} {...props} />
  }
)

export const MuiSnackbar = () => {
  const [open, setOpen] = useState(false);

  const handleClose = (event?: SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') return;

    setOpen(false);
  }

  return (
    <>
      <Button onClick={() => setOpen(true)}>Submit</Button>
      <Snackbar open={open} onClose={handleClose} autoHideDuration={6000} anchorOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }}>
        <SnackbarAlert onClose={handleClose} severity="success">
          Form submitted successfully!
        </SnackbarAlert>
      </Snackbar>
    </>
  )
}
