import React, { Component } from "react"
import {
  MDBContainer,
  MDBTabPane,
  MDBTabContent,
  MDBNav,
  MDBNavItem,
} from "mdbreact"
import CustomLink from "./customLink"

class BalleJaune extends Component {
  state = {
    items: {
      default: "1",
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
      <MDBContainer className="mt-5">
        <h2 className="text-center">La réservation</h2>
        <hr style={{ width: `50%`, marginLeft: `25%` }} />
        <p>Emplacement réserver au formulaire balle jaune .</p>
      </MDBContainer>
    )
  }
}

export default BalleJaune
