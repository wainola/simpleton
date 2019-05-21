import React from 'react';
import { Grid, Paper, Typography, withStyles } from '@material-ui/core';
import WorkIcon from '@material-ui/icons/Work';
import MessageIcon from '@material-ui/icons/Message';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import BottomNavigation from '../components/BottomNavigation';

const styles = theme => ({
  navigationMenuMobile: {
    position: 'fixed',
    width: '100%',
    'z-index': '10',
    bottom: '0',
    left: '0',
    padding: '0 !important'
  }
});

const About = props => {
  const { classes, ifMobile } = props;
  return (
    <Grid container spacing={24}>
      <Grid item xs={12}>
        <Paper>
          <Typography component="h4" varian="h4" gutterBottom>
            Acerca de nosotros
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} className={ifMobile ? classes.navigationMenuMobile : ''}>
        <BottomNavigation
          history={props.history}
          routes={[
            { label: 'Servicios', route: '/services', icon: WorkIcon },
            { label: 'Contacto', route: '/contact', icon: MessageIcon },
            { label: 'Inicio', route: '/', icon: ArrowBackIcon }
          ]}
        />
      </Grid>
      <Grid item xs={12} md={6} lg={6}>
        <Paper>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam accusantium nemo quis at,
          quisquam odit dolores voluptatibus numquam! Architecto assumenda enim esse debitis
          eligendi deleniti repellendus provident laborum consequuntur sit!
        </Paper>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(About);
