import React, { Component } from "react";
import {
  Grid, Typography
} from "@material-ui/core";

export default class Employee extends Component {

  render() {
    return (
      <Grid container justify="center" alignItems="center" spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h6" align="justify" style={{ marginBottom: 16 }}>
            1- Considering the worst possible scenario where the eggs resisted until the last floor, we would have made 100 attempts to break the eggs.
          </Typography>
          <Typography variant="h6" align="justify" style={{ marginBottom: 16 }}>
            2- We can adopt a plan where we break the egg on the first floor to gain more floors for the second attempt. However, in any case we would have 2 attempts in this experiment.
          </Typography>
          <Typography variant="h6" align="justify" style={{ marginBottom: 16 }}>
            3- The fact that the number of attempts required is greater when the egg breaks on the first release than when it doesn't break indicates that it is possible to have a greater amount of release, like this:
            We will have a square variation of 20 in 20 where the second throw will always be (20-1) because we withdraw the first attempt.
        </Typography>
          <Typography variant="h6" align="justify" style={{ marginBottom: 16 }}>
            4- Finally, we will have a total of 20 out of 20 removing 1 equal to:
            Attempts = 1, 14, 27, 33, 35, 39, 50, 60, 69, 77, 84, 90, 95, 99
        </Typography>
          <Typography variant="h6" align="justify" style={{ marginBottom: 16 }}>
            5- Thus, we will have a total of 14 attempts that optimize the process.
          </Typography>
        </Grid>
      </Grid >
    )
  }
}