import React, { Component } from "react";
import {
  Grid,
  Button,
  Typography
} from "@material-ui/core";
import '././styles.css'

export default class Question2 extends Component {

  state = {
    array: ["a", "b", "c", "d", "e"],
    auxArray: [],
  }

  handleChangeState = (name, value) => {
    this.setState({ [name]: value });
  };


  handleTimer = () => {

    this.handleChangeState("auxArray", []);

    let array = [];

    for (let i = 0; i < this.state.array.length; i++) {
      setTimeout(() => {
        array.push(this.state.array[i]);
        this.handleChangeState("auxArray", array);
      }, 1000 * Math.pow(2, i))
    }
  }

  render() {
    return (
      <Grid container direction="column"
        justify="center" alignItems="center" spacing={2}>
        <Grid item xs={2}>
          <Button
            variant="contained"
            onClick={this.handleTimer}
            color="primary"
          >
            Start
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" >
            Value: {this.state.auxArray.map((item) => " - " + item + ";")}
          </Typography>
        </Grid>
      </Grid>
    )
  }
}