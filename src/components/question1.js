import React, { Component } from "react";
import {
  Grid,
  TextField,
  Button,
  Typography
} from "@material-ui/core";

import '././styles.css'

export default class Question1 extends Component {
  state = {
    text: "",
    array: [],
    duplicated: [],
  }

  handleChangeState = (name, value) => {
    this.setState({ [name]: value });
  };

  handleAddValue = () => {

    let array = this.state.array;
    array.push(this.state.text);
    this.handleChangeState("text", "");
    this.getDuplicatedValue();

  }

  getDuplicatedValue = () => {

    let newArray = this.state.array.sort();
    let duplicated = [];
    for (let i = 0; i < newArray.length; i++) {
      if (newArray[i] === newArray[i + 1])
        duplicated.push(newArray[i]);
    }

    this.handleChangeState("duplicated", duplicated);

  }

  render() {
    return (
      <>
        <Grid container justify="center" alignItems="center" spacing={2}>
          <Grid item xs={2}>
            <TextField
              label="input"
              margin="dense"
              variant="outlined"
              name="text"
              fullWidth
              value={this.state.text}
              onChange={(e) =>
                this.handleChangeState(e.target.name, e.target.value)
              }
            ></TextField>
          </Grid>
          <Grid item xs={1}>
            <Button
              variant="contained"
              onClick={this.handleAddValue}
              color="primary"
              fullWidth>
              Add
          </Button>
          </Grid>
        </Grid>
        <Grid container direction="column" justify="center" alignItems="center" spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h6" >
              Value: {this.state.array.map((item) => " - " + item + ";")}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6" >
              Duplicated value: {this.state.duplicated.map((item) => " - " + item + ";")}
            </Typography>
          </Grid>
        </Grid>
      </>
    )
  }
}