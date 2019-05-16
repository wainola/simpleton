import React, { useState } from 'react';
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
  const [formChecked, setFormChecked] = React.useState({
    nombre: false,
    apellido: false,
    email: false,
    telefono: false,
    razon: false,
    direccion: false
  });
  const [allChecked, setAllChecked] = React.useState(false);
  const [isComplete, setComplete] = React.useState(false);

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  function handleBlur(evt) {
    console.log('handleBlur', evt.target);
    if (evt.target.name !== 'direccion') {
      return setFormChecked({
        ...formChecked,
        [evt.target.name]: !formChecked[evt.target.name]
      });
    }

    setFormChecked({
      ...formChecked,
      [evt.target.name]: !formChecked[evt.target.name]
    });
  }

  function handleFocus(evt) {
    return setFormChecked({
      ...formChecked,
      [evt.target.name]: !formChecked[evt.target.name]
    });
  }

  const { classes } = props;

  console.log('props', props);

  return (
    <div>
      <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={12} className={classes.formContainer}>
          <FormControl className={classes.formFields}>
            <div className={classes.inlineFields}>
              <LoadComplete isComplete={formChecked.nombre} name="nombre" />
              <TextField
                id="input-with-icon-textfield"
                label="Nombre"
                onBlur={!formChecked.nombre ? handleBlur : () => {}}
                onFocus={handleFocus}
                name="nombre"
              />
            </div>
          </FormControl>
          <FormControl className={classes.formFields}>
            <div className={classes.inlineFields}>
              <LoadComplete isComplete={formChecked.apellido} name="apellido" />
              <TextField
                id="input-with-icon-textfield"
                label="Apellido"
                name="apellido"
                onBlur={!formChecked.apellido ? handleBlur : () => {}}
                onFocus={handleFocus}
              />
            </div>
          </FormControl>
          <FormControl className={classes.formFields}>
            <div className={classes.inlineFields}>
              <LoadComplete isComplete={formChecked.email} name="email" />
              <TextField
                id="input-with-icon-textfield"
                label="Email"
                name="email"
                onBlur={!formChecked.email ? handleBlur : () => {}}
                onFocus={handleFocus}
              />
            </div>
          </FormControl>
          <FormControl className={classes.formFields}>
            <div className={classes.inlineFields}>
              <LoadComplete isComplete={formChecked.telefono} name="telefono" />
              <TextField
                id="input-with-icon-textfield"
                label="Teléfono"
                name="telefono"
                onBlur={!formChecked.telefono ? handleBlur : () => {}}
                onFocus={handleFocus}
              />
            </div>
          </FormControl>
          <FormControl className={classes.formFields}>
            <div className={classes.inlineFields}>
              <LoadComplete isComplete={formChecked.razon} name="razon" />
              <TextField
                id="input-with-icon-textfield"
                label="Motivo de consulta"
                name="razon"
                onBlur={!formChecked.razon ? handleBlur : () => {}}
                onFocus={handleFocus}
              />
            </div>
          </FormControl>
          <FormControl className={classes.formFields}>
            <div className={classes.inlineFields}>
              <LoadComplete isComplete={formChecked.direccion} name="direccion" />
              <TextField
                id="input-with-icon-textfield"
                label="Dirección"
                name="direccion"
                onBlur={!formChecked.direccion ? handleBlur : () => {}}
                onFocus={handleFocus}
              />
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
