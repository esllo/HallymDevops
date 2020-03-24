import { Paper, Grid, CssBaseline, Box } from '@material-ui/core';
import { Fragment, useState } from 'react';

const Index = () => {
  return (
    <Fragment>
      <Box m={2}>
        <Grid container>
          <Grid item md={2}></Grid>
          <Grid item xs={12} md={8}>
            <Paper elevation={3}></Paper>
          </Grid>
        </Grid>
      </Box>
    </Fragment>
  );
};

export default Index;
