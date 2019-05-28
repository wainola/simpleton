import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Grid, FormControl, TextField, Button } from '@material-ui/core';
import validations from '../../Services/validators';
import Api from '../Api';

import LoadComplete from './LoadComplete';
import ResponsiveDialog from './Dialog';

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
  const [formChecked, setFormChecked] = React.useState({
    nombre: false,
    apellido: false,
    email: false,
    telefono: false,
    razon: false,
    direccion: false
  });
  const [formValues, setFormValues] = React.useState({
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    razon: '',
    direccion: ''
  });
  const [allChecked, setAllChecked] = React.useState(false);
  const [isComplete, setComplete] = React.useState(false);
  const [nodeForm, setNodeForm] = React.useState(null);
  const [open, setOpen] = React.useState(false);

  function handleClose() {
    setOpen(false);
  }

  function handleOpen() {
    console.log('openDialog');
    setOpen(true);
  }

  function handleBlur(evt) {
    if (evt.target.value !== '') {
      setFormChecked({
        ...formChecked,
        [evt.target.name]: !formChecked[evt.target.name]
      });
    }
  }

  function handleFocus(evt) {
    // console.log(':::', evt.target.value);
    if (evt.target.value !== '') {
      setFormChecked({
        ...formChecked,
        [evt.target.name]: !formChecked[evt.target.name]
      });
    }
  }

  function handleChange(evt) {
    evt.preventDefault();
    if (evt.target.name === 'direccion' && formChecked[evt.target.name]) {
      setAllChecked(!allChecked);
    }
    setFormValues({
      ...formValues,
      [evt.target.name]: evt.target.value
    });
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    console.log('formValues', formValues);
    console.log(
      'validations',
      validations(formValues),
      validations(formValues).every(item => !!item.isValid)
    );

    const validData = validations(formValues);
    const areAllValid = validData.every(item => !!item.isValid);

    if (areAllValid) {
      console.log('areValid', areAllValid, validData);
      Api.sendClientData(formValues).then(response => {
        if (response.status === 200) {
          handleOpen();
          nodeForm.reset();
          setFormChecked({
            nombre: false,
            apellido: false,
            email: false,
            telefono: false,
            razon: false,
            direccion: false
          });
        }
      });
    }
  }

  function getNode(node) {
    setNodeForm(node);
  }

  const { classes } = props;

  return (
    <div>
      <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={12} className={classes.formContainer}>
          <form onSubmit={handleSubmit} name="contact-form" ref={getNode}>
            <FormControl className={classes.formFields}>
              <div className={classes.inlineFields}>
                <LoadComplete isComplete={formChecked.nombre} name="nombre" />
                <TextField
                  id="input-with-icon-textfield"
                  label="Nombre"
                  onBlur={!formChecked.nombre ? handleBlur : () => {}}
                  onFocus={handleFocus}
                  name="nombre"
                  onChange={handleChange}
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
                  onChange={handleChange}
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
                  onChange={handleChange}
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
                  onChange={handleChange}
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
                  onChange={handleChange}
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
                  onChange={handleChange}
                />
              </div>
            </FormControl>
            <FormControl className={classes.formFields}>
              <Button color="primary" type="submit">
                Guardar
              </Button>
            </FormControl>
            <ResponsiveDialog open={open} handleClose={handleClose} />
          </form>
        </Grid>
      </Grid>
    </div>
  );
}

export default withStyles(styles)(Contact);
