import React, { Component } from "react"
import { Link } from "gatsby"
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBTabPane,
  MDBTabContent,
  MDBNav,
  MDBNavItem,
  MDBIcon,
} from "mdbreact"

class PillsInscription extends Component {
  state = {
    items: {
      vertical: "1",
    },
  }

  togglePills = (type, tab) => e => {
    e.preventDefault()
    if (this.state.items[type] !== tab) {
      let items = { ...this.state.items }
      items[type] = tab
      this.setState({
        items,
      })
    }
  }

  render() {
    return (
      <>
        <h1 className="section-heading text-center mb-5 mt-5 pt-4 font-weight-bold wow fadeIn">
          Inscription
        </h1>
        <MDBContainer className="my-5">
          <MDBRow>
            <MDBCol md="3">
              <MDBNav pills color="danger" className="flex-column">
                <MDBNavItem>
                  <Link
                    to="#"
                    className={`nav-link Ripple-parent ${
                      this.state.items["vertical"] === "1" ? "active" : ""
                    }`}
                    onClick={this.togglePills("vertical", "1")}
                  >
                    Downloads <MDBIcon icon="download" className="ml-2" />
                  </Link>
                </MDBNavItem>
                <MDBNavItem>
                  <Link
                    to="#"
                    className={`nav-link Ripple-parent ${
                      this.state.items["vertical"] === "2" ? "active" : ""
                    }`}
                    onClick={this.togglePills("vertical", "2")}
                  >
                    Orders & invoices
                    <MDBIcon icon="file-alt" className="ml-2" />
                  </Link>
                </MDBNavItem>
                <MDBNavItem>
                  <Link
                    to="#"
                    className={`nav-link Ripple-parent ${
                      this.state.items["vertical"] === "3" ? "active" : ""
                    }`}
                    onClick={this.togglePills("vertical", "3")}
                  >
                    Billing Details
                    <MDBIcon icon="address-card" className="ml-2" />
                  </Link>
                </MDBNavItem>
              </MDBNav>
            </MDBCol>
            <MDBCol md="9">
              <MDBTabContent activeItem={this.state.items["vertical"]}>
                <MDBTabPane tabId="1">
                  <MDBCardBody>
                    <MDBCardTitle>Downloads</MDBCardTitle>
                    <MDBCardText>Completely legal</MDBCardText>
                  </MDBCardBody>
                </MDBTabPane>
                <MDBTabPane tabId="2">
                  <MDBCardBody>
                    <MDBCardTitle>Orders & Invoices</MDBCardTitle>
                    <MDBCardText>
                      "Hello? Is it me you're looking for?"
                    </MDBCardText>
                  </MDBCardBody>
                </MDBTabPane>
                <MDBTabPane tabId="3">
                  <MDBCardBody>
                    <MDBCardTitle>Billing Details</MDBCardTitle>
                    <MDBCardText>
                      Time to pay{" "}
                      <MDBBtn className="ml-3" color="primary">
                        pay
                      </MDBBtn>
                    </MDBCardText>
                  </MDBCardBody>
                </MDBTabPane>
              </MDBTabContent>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </>
    )
  }
}

export default PillsInscription
