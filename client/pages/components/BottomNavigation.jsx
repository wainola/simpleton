import React from 'react';
import Router from 'next/router';
import { Paper, BottomNavigation, BottomNavigationAction } from '@material-ui/core';

export default ({ routes }) => (
  <Paper>
    <BottomNavigation showLabels>
      {/* USER ṔROGRAMATIC NAV WITH NEXT ROUTER TO HANDLE THE CLICK */}
      {routes.map(item => (
        <BottomNavigationAction
          label={item.label}
          icon={<item.icon />}
          onClick={() => Router.push(item.route)}
        />
      ))}
    </BottomNavigation>
  </Paper>
);
