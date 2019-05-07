import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import {
  Typography,
  Paper,
  Grid,
  BottomNavigation,
  BottomNavigationAction
} from '@material-ui/core';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Head from './Head';
import Services from './components/Services';
import Contact from './components/Contact';

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
    textAlign: 'center',
    padding: theme.spacing.unit * 2,
    background: '#C93756',
    color: 'white',
    'text-transform': 'uppercase'
  },
  mainTitle: {
    color: 'white',
    'font-size': '1.5rem'
  },
  navigationMenu: {
    position: 'fixed',
    width: '100%',
    'z-index': '10',
    bottom: '0',
    left: '0',
    padding: '0 !important'
  }
});

const Home = props => {
  const { classes } = props;

  console.log('props home', props);
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
        {/* CHECK IF WE ARE ON MOBILE DEVICES */}
        <Grid item xs={12} className={classes.navigationMenu}>
          <Paper>
            <BottomNavigation showLabels>
              <BottomNavigationAction label="Servicios" icon={<RestoreIcon />} />
              <BottomNavigationAction label="Contacto" icon={<FavoriteIcon />} />
              <BottomNavigationAction label="Acerca de" icon={<LocationOnIcon />} />
            </BottomNavigation>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <Services />
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
