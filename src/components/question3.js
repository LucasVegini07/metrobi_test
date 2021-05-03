import React, { Component } from "react";
import {
  Grid,
} from "@material-ui/core";
import '././styles.css'

export default class Question3 extends Component {

  render() {
    return (

      <Grid container justify="center" alignItems="center"
      >
        <Grid item xs={8}>
          <Grid container justify="flex-start">
            <Grid item xs={12}>
              <div className="header"
                style={{
                  color: "white",
                  fontSize: "1.5rem",
                  display: "flex",
                  justifyContent: "center"
                }}
              >
                Header
                </div>
            </Grid>
            <Grid item xs={4}>
              <Grid container>
                <div className="hero" style={{
                  color: "white",
                  fontSize: "1.5rem",
                  display: "flex",
                  justifyContent: "center"
                }} >
                  Hero
                </div>
                <div className="sidebar" style={{
                  color: "white",
                  fontSize: "1.5rem",
                  display: "flex",
                  justifyContent: "center"
                }}>
                  Sidebar
                </div>
              </Grid>
            </Grid>
            <Grid item xs={8}>
              <Grid container>
                <div className="maincontent" style={{
                  color: "white",
                  fontSize: "1.5rem",
                  display: "flex",
                  justifyContent: "center"
                }} >
                  Main Content
                </div>
                <div className="extracontent" style={{
                  color: "white",
                  fontSize: "1.5rem",
                  display: "flex",
                  justifyContent: "center"
                }} >
                  Extra Content
                </div>
              </Grid>
            </Grid>
            <Grid item xs={8}>
              <div className="relatedimages" style={{
                color: "white",
                fontSize: "1.5rem",
                display: "flex",
                justifyContent: "center"
              }}>
                Related Images
                </div>
            </Grid>
            <Grid item xs={4}>
              <div className="relatedposts" style={{
                color: "white",
                fontSize: "1.5rem",
                display: "flex",
                justifyContent: "center"
              }} >
                Related Posts
                </div>
            </Grid>
            <Grid item xs={12}>
              <div className="footer" style={{
                color: "white",
                fontSize: "1.5rem",
                display: "flex",
                justifyContent: "center"
              }} >
                Footer
                </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    )
  }
}