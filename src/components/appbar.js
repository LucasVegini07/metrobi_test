import React, { Component } from "react";
import '././styles.css'

import {
  AppBar,
  Toolbar,
  Typography,
  Grid,
} from "@material-ui/core";

export default class Appbar extends Component {

  render() {
    return (

      <AppBar position="static" style={{ marginBottom: 32 }} >
        <Toolbar>
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="center"
          >
            <Grid item xs={6}>
              <Typography variant="h6" style={{
                fontSize: "1.5rem",
              }} > Metrobi's challenge </Typography>

            </Grid>
            <Grid item xs={6}>
              <Grid container justify="flex-end">
                <Typography variant="h6"> Lucas Ramthum Vegini </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    )
  }
}