import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Grid, FormControl, TextField, Button } from '@material-ui/core';

import LoadComplete from './LoadComplete';

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
  },
  inlineFields: {
    display: 'flex',
    'flex-direction': 'row',
    'align-items': 'flex-end'
  }
});

function Contact(props) {
  const [open, setOpen] = React.useState(false);
  const [isComplete, setComplete] = React.useState(false);

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  function handleBlur() {
    console.log('handleBlur');
    setComplete(!isComplete);
  }

  const { classes } = props;

  console.log('props', props);

  return (
    <div>
      <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={12} className={classes.formContainer}>
          <FormControl className={classes.formFields}>
            <div className={classes.inlineFields}>
              <LoadComplete isComplete={isComplete} />
              <TextField id="input-with-icon-textfield" label="Nombre" onBlur={handleBlur} />
            </div>
          </FormControl>
          <FormControl className={classes.formFields}>
            <div className={classes.inlineFields}>
              <LoadComplete isComplete={isComplete} />
              <TextField id="input-with-icon-textfield" label="Apellido" />
            </div>
          </FormControl>
          <FormControl className={classes.formFields}>
            <div className={classes.inlineFields}>
              <LoadComplete isComplete={isComplete} />
              <TextField id="input-with-icon-textfield" label="Email" />
            </div>
          </FormControl>
          <FormControl className={classes.formFields}>
            <div className={classes.inlineFields}>
              <LoadComplete isComplete={isComplete} />
              <TextField id="input-with-icon-textfield" label="Teléfono" />
            </div>
          </FormControl>
          <FormControl className={classes.formFields}>
            <div className={classes.inlineFields}>
              <LoadComplete isComplete={isComplete} />
              <TextField id="input-with-icon-textfield" label="Motivo de consulta" />
            </div>
          </FormControl>
          <FormControl className={classes.formFields}>
            <div className={classes.inlineFields}>
              <LoadComplete isComplete={isComplete} />
              <TextField id="input-with-icon-textfield" label="Dirección" />
            </div>
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
