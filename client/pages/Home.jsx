import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Typography, Paper, Grid } from '@material-ui/core';

import Head from './Head';
import BottomNavigation from './components/BottomNavigation';
import Services from './components/Services';
import Contact from './components/Contact';
import checkIfMobile from '../Services/checkIfMobile';

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary
  },
  mainTitleContainer: {
    height: '70%',
    display: 'flex',
    'align-items': 'center',
    'justify-content': 'center',
    textAlign: 'center',
    padding: theme.spacing.unit * 2,
    background: '#C93756',
    color: 'white',
    'text-transform': 'uppercase'
  },
  mainTitle: {
    color: 'white',
    'font-size': '20px'
  },
  navigationMenuMobile: {
    position: 'fixed',
    width: '100%',
    'z-index': '10',
    bottom: '0',
    left: '0',
    padding: '0 !important'
  },
  contactContainer: {
    'margin-bottom': '15%'
  },
  contactTitle: {
    'font-size': '1.5rem',
    'text-transform': 'uppercase'
  }
});

const Home = props => {
  const { classes } = props;

  let ifMobile;

  if (process.browser) {
    ifMobile = checkIfMobile();
  }

  return (
    <React.Fragment>
      <Head />
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <Paper className={classes.mainTitleContainer}>
            <Typography component="h4" variant="h4" gutterBottom className={classes.mainTitle}>
              Natalia Scheuer Abogada
            </Typography>
          </Paper>
        </Grid>
        {/* CHECK IF WE ARE ON MOBILE DEVICES
            IF WE ARE ON THE BOTTOM DISMISS. SCROLL UP AND APPEARS
         */}
        <Grid item xs={12} className={ifMobile ? classes.navigationMenuMobile : ''}>
          <BottomNavigation />
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <Services />
        </Grid>
        <Grid item xs={12} md={6} lg={6} className={classes.contactContainer}>
          <Paper className={classes.paper}>
            <Typography component="h4" variant="h4" gutterBottom className={classes.contactTitle}>
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
