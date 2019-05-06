import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import AccountCircle from '@material-ui/icons/AccountCircle';

const styles = theme => ({
  paper: {
    textAlign: 'center',
    height: '100%'
  },
  formFields: {
    'margin-bottom': '10px'
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
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <FormControl className={classes.formFields}>
            <TextField id="input-with-icon-textfield" label="Nombre" />
          </FormControl>
          <br />
          <FormControl className={classes.formFields}>
            <TextField id="input-with-icon-textfield" label="Nombre" />
          </FormControl>
          <br />
          <FormControl className={classes.formFields}>
            <TextField id="input-with-icon-textfield" label="Nombre" />
          </FormControl>
        </Grid>
      </Grid>
    </div>
  );
}

export default withStyles(styles)(Contact);
