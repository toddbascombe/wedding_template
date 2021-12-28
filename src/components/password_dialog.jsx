/* eslint-disable react/no-unescaped-entities */
import * as React from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import { styled } from '@mui/material/styles'

const PasswordField = styled(TextField)({
  '& label.Mui-focused': {
    color: 'white'
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'white'
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'white'
    },
    '&:hover fieldset': {
      borderColor: 'white',
      'border-width': '2px'
    },
    '&.Mui-focused fieldset': {
      borderColor: 'white'
    }
  }
})

const PasswordDialog = () => {
  const [open, setOpen] = React.useState(true)

  const handleClose = (_value, reason) => {
    if (reason !== 'backdropClick') setOpen(false)
  }

  return (
    <Dialog
      id="password_dialog"
      open={open}
      onClose={handleClose}
      disableEscapeKeyDown={true}
    >
      <DialogTitle id="password_dialog_title">
        Hola! 👋🏼 What's the password friend?
      </DialogTitle>
      <DialogContent id="password_dialog_field_content">
        <PasswordField
          id="password_dialog_field"
          autoFocus
          margin="dense"
          label="Password"
          type="password"
          fullWidth
          variant="outlined"
        />
      </DialogContent>
      <DialogActions>
        <Button id="password_dialog_btn" onClick={handleClose}>
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default PasswordDialog
