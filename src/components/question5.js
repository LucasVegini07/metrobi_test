import React, { Component } from "react";
import {
  Grid, Typography, Button
} from "@material-ui/core";

export default class Question5 extends Component {

  handleSolver = () => {

    let min = Math.ceil((-1.0 + Math.sqrt(1 + 8 * 100)) / 2.0)

    alert(
      "Minimum number of trials in worst case with 2 eggs and 100 floors is: " + min
    );

  }


  render() {
    return (
      <Grid container justify="center" alignItems="center" spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h6" style={{ textAlign: "center" }}>
            2 Eggs and 100 Floors
          </Typography>
        </Grid>
        <Grid item xs={1}>
          <Button
            variant="contained"
            onClick={this.handleSolver}
            color="primary"
            fullWidth>
            Solver
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" style={{ textAlign: "center" }}>
            I had some difficulty in finding a solution algorithm for this challenge and I used this site below as a basis for solution
          </Typography>
        </Grid>
        https://www.freecodecamp.org/news/how-to-solve-the-google-recruiters-puzzle-about-throwing-eggs-from-a-building-de6e7ef1755d/
      </Grid >
    )
  }
}