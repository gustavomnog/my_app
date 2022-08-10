import { Snackbar } from '@material-ui/core'

import MuiAlert from '@material-ui/lab/Alert'

const Toasty = ({ open, severity, onClose, text }) => {
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }

    onClose()
  }

  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
      <MuiAlert onClose={handleClose} severity={severity}>
        {text}
      </MuiAlert >
    </Snackbar>
  )
}


export default Toasty