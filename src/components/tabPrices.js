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
                  Adultes <strong className="light-blue-text">196 €</strong>
                </p>
                <p>
                  Couples
                  <strong className="red-text"> 310 €</strong>
                </p>{" "}
                <p>
                  Supplément Roseraie 4 courts couverts en terre battue : Adulte{" "}
                  <strong className="light-blue-text">96 € </strong> , Couple{" "}
                  <strong className="red-text"> 142 €</strong>
                </p>
                <p>
                  Jeunes <strong className="light-blue-text">117 €</strong>{" "}
                </p>{" "}
                <p>
                  Etudiants <strong className="red-text"> 148 €</strong>
                </p>
                <strong className="red-text">
                  Les forfaits comprennent la licence incluse
                </strong>
              </MDBTabPane>
              <MDBTabPane tabId="2">
                <p className="mt-3">
                  <strong className="red-text">Enfants nés en 2014-2015</strong>{" "}
                  <hr style={{ maxWidth: "18rem" }} className="my-2" />1 heure
                  par semaine <strong className="light-blue-text">158 €</strong>{" "}
                  <br />2 heures par semaine{" "}
                  <strong className="light-blue-text">287 €</strong>
                </p>
                <p>
                  <strong className="red-text">Enfants nés en 2012-2013</strong>
                  <hr style={{ maxWidth: "18rem" }} className="my-2" />1 heure
                  par semaine{" "}
                  <strong className="light-blue-text"> 196 €</strong> <br />2
                  heures par semaine
                  <strong className="light-blue-text"> 358 €</strong>
                </p>
                <p>
                  <strong className="red-text">Enfants nés en 2010-2011</strong>{" "}
                  <hr style={{ maxWidth: "18rem" }} className="my-2" />1 heure
                  par semaine{" "}
                  <strong className="light-blue-text">236 € </strong>
                  <br /> 2 heures par semaine{" "}
                  <strong className="light-blue-text">420 €</strong>
                </p>
                <p>
                  <strong className="red-text">Enfants nés en 2008-2009</strong>
                  <hr style={{ maxWidth: "18rem" }} className="my-2" />1 heure
                  par semaine{" "}
                  <strong className="light-blue-text">273 € </strong>
                  <br /> 2 heures par semaine{" "}
                  <strong className="light-blue-text">489 €</strong>
                </p>
                <p>
                  <strong className="red-text">
                    De 2008 à 2015 inclus, 30 séances, Licence et Cotisation
                    Jeune incluses{" "}
                  </strong>
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
