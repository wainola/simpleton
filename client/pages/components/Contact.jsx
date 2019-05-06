import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Grid, FormControl, TextField, Button } from '@material-ui/core';

const styles = theme => ({
  paper: {
    textAlign: 'center',
    height: '100%'
  },
  formFields: {
    margin: '10px',
    width: '75%'
  },
  formContainer: {
    display: 'flex',
    'flex-direction': 'column',
    'justify-content': 'center',
    'align-items': 'center'
  }
});

function Contact(props) {
  const [open, setOpen] = React.useState(false);

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  const { classes } = props;

  console.log('props', props);

  return (
    <div>
      <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={12} className={classes.formContainer}>
          <FormControl className={classes.formFields}>
            <TextField id="input-with-icon-textfield" label="Nombre" />
          </FormControl>
          <FormControl className={classes.formFields}>
            <TextField id="input-with-icon-textfield" label="Apellido" />
          </FormControl>
          <FormControl className={classes.formFields}>
            <TextField id="input-with-icon-textfield" label="Email" />
          </FormControl>
          <FormControl className={classes.formFields}>
            <TextField id="input-with-icon-textfield" label="Teléfono" />
          </FormControl>
          <FormControl className={classes.formFields}>
            <TextField id="input-with-icon-textfield" label="Motivo de consulta" />
          </FormControl>
          <FormControl className={classes.formFields}>
            <TextField id="input-with-icon-textfield" label="Dirección" />
          </FormControl>
          <FormControl className={classes.formFields}>
            <Button color="primary">Guardar</Button>
          </FormControl>
        </Grid>
      </Grid>
    </div>
  );
}

export default withStyles(styles)(Contact);
