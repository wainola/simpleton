import React from 'react';
import { Paper, BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

export default () => (
  <Paper>
    <BottomNavigation showLabels>
      {/* USER ṔROGRAMATIC NAV WITH NEXT ROUTER TO HANDLE THE CLICK */}
      <BottomNavigationAction label="Servicios" icon={<RestoreIcon />} />
      <BottomNavigationAction label="Contacto" icon={<FavoriteIcon />} />
      <BottomNavigationAction label="Acerca de" icon={<LocationOnIcon />} />
    </BottomNavigation>
  </Paper>
);
