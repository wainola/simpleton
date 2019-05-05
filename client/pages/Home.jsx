import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Head from './Head';
import Services from './Services';
import Contact from './Contact';

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary
  }
});

const Home = props => {
  const { classes } = props;
  return (
    <React.Fragment>
      <Head />
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography component="h2" variant="h2" gutterBottom color="primary">
              Natalia Scheuer Abogada
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <Paper className={classes.paper}>
            <Typography component="h4" variant="h4" gutterBottom>
              Servicios
            </Typography>
            <Services />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <Paper className={classes.paper}>
            <Typography component="h4" variant="h4" gutterBottom>
              Contacto
            </Typography>
            <Contact />
          </Paper>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default withStyles(styles)(Home);

// DIVORCIOS
// DIVORCIO MUTUO ACUERDO
// DIVORCIOS UNILATERALES

// SEPARACION JUDIFICIAL
// LUQUIDACION DE SOCIEDAD CONYUGAL

// REGULACION DE ALIMENTOS
// RELACION DIRECTA Y REGULAR
// CUIDADO PERSONAL

// TRANSACCIONES
