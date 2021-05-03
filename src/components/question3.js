import React, { Component } from "react";
import '././styles.css'

export default class Question3 extends Component {

  render() {
    return (
      <div className="content" >
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
        <div className="contentColumn">
          <div className="contentItem">
            <div className="hero" style={{
              color: "white",
              fontSize: "1.5rem",
              display: "flex",
              justifyContent: "center",
            }} >
              Hero
                </div>
          </div>
          <div className="contentItem">
            <div className="sidebar" style={{
              color: "white",
              fontSize: "1.5rem",
              display: "flex",
              justifyContent: "center"
            }}>
              Sidebar
                </div>
          </div>
        </div>
        <div className="contentColumn">
          <div className="contentItem">
            <div className="maincontent" style={{
              color: "white",
              fontSize: "1.5rem",
              display: "flex",
              justifyContent: "center"
            }} >
              Main Content
                </div>
          </div>
          <div className="contentItem">
            <div className="extracontent" style={{
              color: "white",
              fontSize: "1.5rem",
              display: "flex",
              justifyContent: "center"
            }} >
              Extra Content
                </div>
          </div>
        </div>
        <div className="contentRow">
          <div className="contentItem">

            <div className="relatedimages" style={{
              color: "white",
              fontSize: "1.5rem",
              display: "flex",
              justifyContent: "center"
            }}>
              Related Images
                </div>
          </div>
          <div className="contentItem">
            <div className="relatedposts" style={{
              color: "white",
              fontSize: "1.5rem",
              display: "flex",
              justifyContent: "center"
            }} >
              Related Posts
                </div>
          </div>
        </div>
        <div className="footer" style={{
          color: "white",
          fontSize: "1.5rem",
          display: "flex",
          justifyContent: "center"
        }} >
          Footer
                </div>
      </div>

      // <div id="content">
      //   <div className="header"
      //     style={{
      //       color: "white",
      //       fontSize: "1.5rem",
      //       display: "flex",
      //       justifyContent: "center"
      //     }}
      //   >
      //     Header
      //   </div>

      //   <did className="contentColumn">
      // <div className="hero" style={{
      //   color: "white",
      //   fontSize: "1.5rem",
      //   display: "flex",
      //   justifyContent: "center"
      // }} >
      //   Hero
      //       </div>
      // <div className="sidebar" style={{
      //   color: "white",
      //   fontSize: "1.5rem",
      //   display: "flex",
      //   justifyContent: "center"
      // }}>
      //   Sidebar
      //       </div>
      //   </did>
      //   <did className="contentColumn">

      //   <div className="maincontent" style={{
      //     color: "white",
      //     fontSize: "1.5rem",
      //     display: "flex",
      //     justifyContent: "center"
      //   }} >
      //     Main Content
      //         </div>
      //   <div className="extracontent" style={{
      //     color: "white",
      //     fontSize: "1.5rem",
      //     display: "flex",
      //     justifyContent: "center"
      //   }} >
      //     Extra Content
      //         </div>

      // </did>

      // </div>



      //   <div className="maincontent" style={{
      //     color: "white",
      //     fontSize: "1.5rem",
      //     display: "flex",
      //     justifyContent: "center"
      //   }} >
      //   Main Content
      //           </div>
      //   <div className="extracontent" style={{
      //     color: "white",
      //     fontSize: "1.5rem",
      //     display: "flex",
      //     justifyContent: "center"
      //   }} >
      //   Extra Content
      //           </div>
      // <div className="relatedimages" style={{
      //   color: "white",
      //   fontSize: "1.5rem",
      //   display: "flex",
      //   justifyContent: "center"
      // }}>
      // Related Images
      //         </div>
      // <div className="relatedposts" style={{
      //   color: "white",
      //   fontSize: "1.5rem",
      //   display: "flex",
      //   justifyContent: "center"
      // }} >
      // Related Posts
      //         </div>
      // <div className="footer" style={{
      //   color: "white",
      //   fontSize: "1.5rem",
      //   display: "flex",
      //   justifyContent: "center"
      // }} >
      // Footer
      //         </div>
      // </div >
    )
  }
}