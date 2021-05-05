import React, { Component } from "react";
import {
  Grid, Button, Typography
} from "@material-ui/core";

export default class Question7 extends Component {

  state = {
    carrotTypes: [{ kg: 5, price: 100 }, { kg: 7, price: 150 }, { kg: 3, price: 70 }],
    capacity: 38,
    carrotAmount: [0, 0, 0],
  }

  handleChangeState = (name, value) => {
    this.setState({ [name]: value });
  };

  handleSolveProblem = () => {

    let maxEfficent;
    let amount = 0;

    let carrotTypes = this.state.carrotTypes;
    let capacity = this.state.capacity;
    let efficent = [];
    let carrotAmount = this.state.carrotAmount;


    for (let i = 0; i < carrotTypes.length; i++) {
      efficent.push(carrotTypes[i].price / carrotTypes[i].kg);
    }

    for (let i = 0; i < 2; i++) {
      maxEfficent = Math.max(...efficent)
      if (capacity >= carrotTypes[efficent.indexOf(maxEfficent)].kg) {
        amount = parseInt(capacity / carrotTypes[efficent.indexOf(maxEfficent)].kg)
        capacity = capacity - (amount * carrotTypes[efficent.indexOf(maxEfficent)].kg);
        carrotAmount[efficent.indexOf(maxEfficent)] = amount;
      }
      efficent[efficent.indexOf(maxEfficent)] = 0;
    }

    alert(
      "The maximum amount that this bag can have is: " + (carrotTypes[0].price * carrotAmount[0] + carrotTypes[1].price * carrotAmount[1] + carrotTypes[2].price * carrotAmount[2])
    );

  }

  render() {
    return (
      < Grid container justify="center" alignItems="center" spacing={2} >
        <Grid item xs={1}>
          <Button variant="contained"
            onClick={this.handleSolveProblem}
            color="primary">
            Solve
          </Button>
        </Grid>
        <Grid item xs={12}>
          {this.state.carrotTypes.map((item, index) =>
            <Typography variant="h6" style={{ textAlign: "center" }} key={index}>
              Carrot {index} - Weight: {item.kg} - Price: {item.price}
            </Typography>
          )}
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" style={{ textAlign: "center" }}>
            Bag capacity: {this.state.capacity}
            </Typography>
        </Grid>
      </Grid >)
  }
}