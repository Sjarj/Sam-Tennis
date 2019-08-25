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
            <MDBNav tabs className="mt-5 nav-justified" color="danger">
              <MDBNavItem
                className={`nav-link ${
                  this.state.items["default"] === "1" ? "active" : ""
                }`}
                onClick={this.toggleTabs("default", "1")}
              >
                Tarifs
              </MDBNavItem>
              <MDBNavItem
                className={`nav-link ${
                  this.state.items["default"] === "2" ? "active" : ""
                }`}
                onClick={this.toggleTabs("default", "2")}
              >
                ÉCOLE DE TENNIS
              </MDBNavItem>
              <MDBNavItem
                className={`nav-link ${
                  this.state.items["default"] === "3" ? "active" : ""
                }`}
                onClick={this.toggleTabs("default", "3")}
              >
                COURS COLLECTIFS JEUNES
              </MDBNavItem>
              <MDBNavItem
                className={`nav-link ${
                  this.state.items["default"] === "4" ? "active" : ""
                }`}
                onClick={this.toggleTabs("default", "4")}
              >
                AUTRES
              </MDBNavItem>
            </MDBNav>
            <MDBTabContent activeItem={this.state.items["default"]}>
              <MDBTabPane tabId="1">
                <p className="mt-3">
                  Adultes <span className="light-blue-text">196 €</span>
                </p>
                <p>
                  Couples
                  <span className="red-text"> 310 €</span>
                </p>{" "}
                <p>
                  Supplément Roseraie 4 courts couverts en terre battue : Adulte{" "}
                  <span className="light-blue-text">96 € </span> , Couple{" "}
                  <span className="red-text"> 142 €</span>
                </p>
                <p>
                  Jeunes <span className="light-blue-text">117 €</span>{" "}
                </p>{" "}
                <p>
                  Etudiants <span className="red-text"> 148 €</span>
                </p>
                <p className="red-text">
                  Les forfaits comprennent la licence incluse
                </p>
              </MDBTabPane>
              <MDBTabPane tabId="2">
                <p className="mt-3">
                  Enfants nés en 2014-2015 <br />1 heure par semaine{" "}
                  <span className="light-blue-text">158 €</span> <br />2 heures
                  par semaine <span className="light-blue-text">287 €</span>
                </p>
                <p>
                  Enfants nés en 2012-2013
                  <br /> 1 heure par semaine{" "}
                  <span className="red-text"> 196 €</span> <br />2 heures par
                  semaine
                  <span className="red-text"> 358 €</span>
                </p>
                <p>
                  Enfants nés en 2010-2011 <br />1 heure par semaine{" "}
                  <span className="light-blue-text">236 € </span>
                  <br /> 2 heures par semaine{" "}
                  <span className="light-blue-text">420 €</span>
                </p>
                <p>
                  Enfants nés en 2008-2009
                  <br /> 1 heure par semaine{" "}
                  <span className="red-text">273 € </span>
                  <br /> 2 heures par semaine{" "}
                  <span className="red-text">489 €</span>
                </p>
                <p>
                  <span className="red-text">
                    De 2008 à 2015 inclus, 30 séances, Licence et Cotisation
                    Jeune incluses{" "}
                  </span>
                  . Mercredi matin, Mercredi après-midi, Samedi après-midi sur
                  les courts couverts de la Roseraie.
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
