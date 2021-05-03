import React, { Component } from "react";
import {
  Grid,
  LinearProgress,
  Typography,
  Button
} from "@material-ui/core";

export default class Question6 extends Component {

  state = {
    achillesProgress: 0,
    tortoiseProgress: 50,
    timeNeeded: 0,
    time: 120,
    aux: 1,
  }

  handleChangeState = (name, value) => {
    this.setState({ [name]: value });
  };


  handleParadox = () => {

    //let's assume that the acchiles take 1 minute to reach the first 50% of the turtle

    let achillesProgress = this.state.achillesProgress;
    let tortoiseProgress = this.state.tortoiseProgress;
    let divider = 1;

    divider = Math.pow(2, this.state.aux)
    achillesProgress = tortoiseProgress;
    tortoiseProgress = tortoiseProgress + (50 * 1 / divider)

    this.handleChangeState("achillesProgress", achillesProgress)
    this.handleChangeState("tortoiseProgress", tortoiseProgress)
    this.handleChangeState("timeNeeded", this.state.timeNeeded + (this.state.time / divider))
    this.handleChangeState("aux", this.state.aux + 1)

  }

  render() {
    return (

      <Grid container justify="flex-start" alignItems="center" spacing={2}>
        <Grid item xs={12}>
          <Grid container justify="center">
            <Grid item xs={1}>
              <Button variant="contained"
                onClick={this.handleParadox}
                color="primary">
                Try
                </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Typography>
            Achilles : {this.state.achillesProgress}%
        </Typography>
        </Grid>
        <Grid item xs={12}>
          <LinearProgress variant="determinate" value={this.state.achillesProgress} />
        </Grid>
        <Grid item xs={12}>
          <Typography>
            Tortoise : {this.state.tortoiseProgress}%
        </Typography>
        </Grid>
        <Grid item xs={12}>
          <LinearProgress variant="determinate" value={this.state.tortoiseProgress} />
        </Grid>
        <Grid item xs={12}>
          <Typography>
            Time it took to acchiles gets where he is, assuming that on the first try it took 60 seconds.
 {this.state.timeNeeded} seconds!
          </Typography>
        </Grid>

      </Grid>

    )
  }
}