import React, { Component } from "react";
import {
  Grid, Button, Divider
} from "@material-ui/core";
import '././styles.css'
import Question1 from "./question1"
import Question2 from "./question2"
import Question3 from "./question3"
import Question4 from "./question4"
import Question5 from "./question5"
import Question6 from "./question6"
import Question7 from "./question7"

export default class Employee extends Component {

  state = {
    question: 1
  }


  handleChangeState = (name, value) => {
    this.setState({ [name]: value });
  };

  handleChangeQuestion = (question) => {
    this.handleChangeState("question", question);
  }

  render() {
    return (

      <Grid container justify="center" alignItems="center" >
        <Grid item xs={8}>
          <Grid container justify="center" spacing={2}>
            <Grid item xs={1}>
              <Button variant="contained"
                color="primary"
                disabled={this.state.question === 1}
                onClick={() => this.handleChangeQuestion(1)}
              >
                1
              </Button>
            </Grid>
            <Grid item xs={1}>
              <Button variant="contained"
                color="primary"
                disabled={this.state.question === 2}
                onClick={() => this.handleChangeQuestion(2)}
              >
                2
              </Button>
            </Grid>
            <Grid item xs={1}>
              <Button variant="contained"
                color="primary"
                disabled={this.state.question === 3}
                onClick={() => this.handleChangeQuestion(3)}
              >
                3
              </Button>
            </Grid>
            <Grid item xs={1}>
              <Button variant="contained"
                color="primary"
                disabled={this.state.question === 4}
                onClick={() => this.handleChangeQuestion(4)}
                fullWidth>
                4
              </Button>
            </Grid>
            <Grid item xs={1}>
              <Button variant="contained"
                color="primary"
                disabled={this.state.question === 5}
                onClick={() => this.handleChangeQuestion(5)}
                fullWidth>
                5
              </Button>
            </Grid>
            <Grid item xs={1}>
              <Button variant="contained"
                color="primary"
                disabled={this.state.question === 6}
                onClick={() => this.handleChangeQuestion(6)}
                fullWidth>
                6
              </Button>
            </Grid>
            <Grid item xs={1}>
              <Button variant="contained"
                color="primary"
                disabled={this.state.question === 7}
                onClick={() => this.handleChangeQuestion(7)}
                fullWidth>
                7
              </Button>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Divider style={{ marginBottom: 32, marginTop: 32 }}></Divider>
          </Grid>
          <Grid item xs={12}>
            {this.state.question === 1 ?
              <Question1></Question1>
              : this.state.question === 2 ?
                <Question2></Question2>
                : this.state.question === 3 ?
                  <Question3></Question3>
                  : this.state.question === 4 ?
                    <Question4></Question4>
                    : this.state.question === 5 ?
                      <Question5></Question5>
                      : this.state.question === 6 ?
                        <Question6></Question6>
                        : this.state.question === 7 &&
                        <Question7></Question7>

            }
          </Grid>
        </Grid>
      </Grid>)
  }
}