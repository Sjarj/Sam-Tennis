import React, { Component } from "react"
import { MDBBtn, MDBCollapse, MDBContainer } from "mdbreact"

class CollapseReservation extends Component {
  state = {
    collapseID: "",
  }

  toggleCollapse = collapseID => () => {
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : "",
    }))
  }

  render() {
    return (
      <>
        <h1 className="section-heading text-center mb-5 mt-5 pt-4 font-weight-bold wow fadeIn">
          Réservation
        </h1>
        <MDBContainer className="my-5">
          <MDBBtn
            color="primary"
            href="!#"
            onClick={this.toggleCollapse("basicCollapse")}
            style={{ marginBottom: "1rem" }}
          >
            COLLAPSE LINK
          </MDBBtn>
          <MDBBtn
            color="primary"
            onClick={this.toggleCollapse("basicCollapse")}
            style={{ marginBottom: "1rem" }}
          >
            COLLAPSE BUTTON
          </MDBBtn>
          <MDBCollapse id="basicCollapse" isOpen={this.state.collapseID}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
            </p>
          </MDBCollapse>
        </MDBContainer>
      </>
    )
  }
}

export default CollapseReservation
