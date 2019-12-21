import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import Container from '../products/Products';
import Products from '../products/Products';


  
  const Dashboard = () => {
  
return ( 
<div >
      <Grid
        container
        spacing={4}
      >
        <Grid
          item
          lg={3}
          sm={6}
          xl={3}
          xs={12}
        >
          

          <Products />
        </Grid>
        <Grid
          item
          lg={4}
          md={6}
          xl={3}
          xs={12}
        >
         
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;

   