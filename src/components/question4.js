import React, { Component } from "react";
import {
  Grid, TextField, Button
} from "@material-ui/core";

export default class Question4 extends Component {

  state = {
    text: "{}[]()(())"
  }

  handleChangeState = (name, value) => {
    this.setState({ [name]: value });
  };

  handleActionButton = () => {

    if (this.handleVerifyBrackets())
      alert(
        "Balanced "
      );
    else
      alert(
        "Not Balanced "
      );

  }

  handleVerifyBrackets = () => {

    let array = [];
    let aux = '';

    if (this.state.text.length === 0)
      return true

    for (let i = 0; i < this.state.text.length; i++) {

      aux = this.state.text.charAt(i);

      switch (aux) {

        case ')':
          if (array.length === 0 || array.pop() !== '(')
            return false;
          break;
        case ']':
          if (array.length === 0 || array.pop() !== '[')
            return false;
          break;
        case '}':
          if (array.length === 0 || array.pop() !== '{')
            return false;
          break;
        default:
          array.push(aux);
          break;
      }
    }

    if (array.length === 0) return true;

  }

  render() {
    return (

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
        <Grid item xs={2}>
          <Button variant="contained"
            onClick={this.handleActionButton}
            color="primary"
            fullWidth>
            Verify
          </Button>
        </Grid>
      </Grid>

    )
  }
}