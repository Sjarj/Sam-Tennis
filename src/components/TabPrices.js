import React, { Component } from "react"
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBNav,
  MDBNavItem,
  MDBTabContent,
  MDBTabPane,
} from "mdbreact"

class TabPrices extends Component {
  state = {
    items: {
      default: "1",
    },
  }

  toggleTabs = (type, tab) => e => {
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
      <MDBContainer className="mt-4">
        <MDBRow>
          <MDBCol md="12">
            <h2>Default</h2>
            <MDBNav tabs className="mt-5 nav-justified" color="">
              <MDBNavItem
                className={`nav-link ${
                  this.state.items["default"] === "1" ? "active" : ""
                }`}
                onClick={this.toggleTabs("default", "1")}
              >
                Home
              </MDBNavItem>
              <MDBNavItem
                className={`nav-link ${
                  this.state.items["default"] === "2" ? "active" : ""
                }`}
                onClick={this.toggleTabs("default", "2")}
              >
                Profile
              </MDBNavItem>
              <MDBNavItem
                className={`nav-link ${
                  this.state.items["default"] === "3" ? "active" : ""
                }`}
                onClick={this.toggleTabs("default", "3")}
              >
                Contact
              </MDBNavItem>
            </MDBNav>
            <MDBTabContent activeItem={this.state.items["default"]}>
              <MDBTabPane tabId="1">
                <p>
                  Consequat occaecat ullamco amet non eiusmod nostrud dolore
                  irure incididunt est duis anim sunt officia. Fugiat velit
                  proident aliquip nisi incididunt nostrud exercitation proident
                  est nisi. Irure magna elit commodo anim ex veniam culpa
                  eiusmod id nostrud sit cupidatat in veniam ad. Eiusmod
                  consequat eu adipisicing minim anim aliquip cupidatat culpa
                  excepteur quis. Occaecat sit eu exercitation irure Lorem
                  incididunt nostrud.
                </p>
              </MDBTabPane>
              <MDBTabPane tabId="2">
                <p>
                  Ad pariatur nostrud pariatur exercitation ipsum ipsum culpa
                  mollit commodo mollit ex. Aute sunt incididunt amet commodo
                  est sint nisi deserunt pariatur do. Aliquip ex eiusmod
                  voluptate exercitation cillum id incididunt elit sunt. Qui
                  minim sit magna Lorem id et dolore velit Lorem amet
                  exercitation duis deserunt. Anim id labore elit adipisicing ut
                  in id occaecat pariatur ut ullamco ea tempor duis.
                </p>
              </MDBTabPane>
              <MDBTabPane tabId="3">
                <p>
                  Est quis nulla laborum officia ad nisi ex nostrud culpa Lorem
                  excepteur aliquip dolor aliqua irure ex. Nulla ut duis ipsum
                  nisi elit fugiat commodo sunt reprehenderit laborum veniam eu
                  veniam. Eiusmod minim exercitation fugiat irure ex labore
                  incididunt do fugiat commodo aliquip sit id deserunt
                  reprehenderit aliquip nostrud. Amet ex cupidatat excepteur
                  aute veniam incididunt mollit cupidatat esse irure officia
                  elit do ipsum ullamco Lorem. Ullamco ut ad minim do mollit
                  labore ipsum laboris ipsum commodo sunt tempor enim
                  incididunt. Commodo quis sunt dolore aliquip aute tempor irure
                  magna enim minim reprehenderit. Ullamco consectetur culpa
                  veniam sint cillum aliqua incididunt velit ullamco sunt
                  ullamco quis quis commodo voluptate. Mollit nulla nostrud
                  adipisicing aliqua cupidatat aliqua pariatur mollit voluptate
                  voluptate consequat non.
                </p>
              </MDBTabPane>
            </MDBTabContent>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    )
  }
}

export default TabPrices
