import React from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  withMobileDialog
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({});

const ResponsiveDialog = props => {
  const { open, handleClose } = props;
  return (
    <Dialog open={open} onClose={handleClose} aria-labelledby="responsive-dialog-title">
      <DialogTitle id="responsive-dialog-title">
        Sus datos fueron enviados correctamente!
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          Sus datos fueron agendados correctamente. Pronto le enviaremos un correo con su hora.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary" autoFocus name="close-dialog">
          Cerrar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default withStyles(styles)(withMobileDialog()(ResponsiveDialog));
