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
            <h1
              className="section-heading text-center mb-5 mt-5 pt-4 font-weight-bold wow fadeIn"
              data-wow-delay="0.2s"
            >
              Tarifs
            </h1>

            <p className="text-center w-responsive mx-auto wow fadeIn my-5 lead">
              <strong className="red-text">RÉDUCTION </strong> pour enfants
              d'une même famille{" "}
              <trong className="light-blue-text">
                Ecole de Tennis - Cours Collectifs Jeunes
              </trong>{" "}
              : 2ème enfant - 10% sur sa cotisation, à partir du 3ème - 20% sur
              leur cotisation.
            </p>
            <MDBNav tabs className="mt-5 nav-justified" color="danger">
              <MDBNavItem
                className={`nav-link ${
                  this.state.items["default"] === "1" ? "active" : ""
                }`}
                onClick={this.toggleTabs("default", "1")}
              >
                TARIFS
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
                <MDBRow>
                  <MDBCol size="6" className="my-4">
                    <p className="mt-3">
                      <strong className="red-text">
                        Enfants nés en 2014-2015
                      </strong>{" "}
                      <hr style={{ maxWidth: "18rem" }} className="my-3" />1
                      heure par semaine{" "}
                      <strong className="light-blue-text">158 €</strong> <br />2
                      heures par semaine{" "}
                      <strong className="light-blue-text">287 €</strong>
                    </p>
                  </MDBCol>
                  <MDBCol size="6" className="my-4">
                    <p className="mt-3">
                      <strong className="red-text">
                        Enfants nés en 2012-2013
                      </strong>
                      <hr style={{ maxWidth: "18rem" }} className="my-3" />1
                      heure par semaine{" "}
                      <strong className="light-blue-text"> 196 €</strong> <br />
                      2 heures par semaine
                      <strong className="light-blue-text"> 358 €</strong>
                    </p>
                  </MDBCol>
                  <MDBCol size="6" className="my-4">
                    <p>
                      <strong className="red-text">
                        Enfants nés en 2010-2011
                      </strong>{" "}
                      <hr style={{ maxWidth: "18rem" }} className="my-3" />1
                      heure par semaine{" "}
                      <strong className="light-blue-text">236 € </strong>
                      <br /> 2 heures par semaine{" "}
                      <strong className="light-blue-text">420 €</strong>
                    </p>
                  </MDBCol>
                  <MDBCol size="6" className="my-4">
                    <p>
                      <strong className="red-text">
                        Enfants nés en 2008-2009
                      </strong>
                      <hr style={{ maxWidth: "18rem" }} className="my-3" />1
                      heure par semaine{" "}
                      <strong className="light-blue-text">273 € </strong>
                      <br /> 2 heures par semaine{" "}
                      <strong className="light-blue-text">489 €</strong>
                    </p>
                  </MDBCol>
                  <p>
                    <strong className="red-text">
                      De 2008 à 2015 inclus, 30 séances, Licence et Cotisation
                      Jeune incluses{" "}
                    </strong>
                    . Mercredi matin, Mercredi après-midi, Samedi après-midi sur
                    les courts couverts de la Roseraie.
                  </p>
                </MDBRow>
              </MDBTabPane>
              <MDBTabPane tabId="3">
                <MDBRow>
                  <MDBCol xs="1" sm="4" className="my-4">
                    <p>
                      <strong className="red-text">
                        Mercredi après-midi sur les courts du Stade Robert
                        Brettes
                      </strong>{" "}
                      <hr style={{ maxWidth: "18rem" }} className="my-3" />1
                      heure par semaine
                      <strong className="light-blue-text"> 308 €</strong>
                      <br /> 2 heures par semaine{" "}
                      <strong className="light-blue-text">545 €</strong>
                    </p>
                  </MDBCol>
                  <MDBCol xs="1" sm="4" className="my-4">
                    <p>
                      <strong className="red-text">
                        Samedi matin sur les courts couverts de la Roseraie
                      </strong>{" "}
                      <hr style={{ maxWidth: "18rem" }} className="my-3" />1
                      heure par semaine
                      <strong className="light-blue-text"> 347 €</strong>
                      <br /> 2 heures par semaine{" "}
                      <strong className="light-blue-text"> 585 €</strong>
                    </p>
                  </MDBCol>
                  <MDBCol xs="1" sm="4" className="my-4">
                    <p>
                      <strong className="red-text">
                        Lundis, Mardis, Jeudis et Vendredis soirs à partir de
                        18h sur les courts du Stade Robert Brettes
                      </strong>
                      <hr style={{ maxWidth: "18rem" }} className="my-3" />1
                      heure par semaine
                      <strong className="light-blue-text"> 308 €</strong>
                      <br /> 2 heures par semaine{" "}
                      <strong className="light-blue-text"> 545 €</strong>
                    </p>
                  </MDBCol>
                  <MDBCol size="12">
                    <p className="text-center">
                      De<strong className="red-text"> 2002 à 2007</strong>,{" "}
                      <strong className="light-blue-text">30</strong> séances
                      d'une heure Licence et Cotisation incluses.
                    </p>
                  </MDBCol>
                </MDBRow>
              </MDBTabPane>
              <MDBTabPane tabId="4">
                <strong className="red-text">COURS COLLECTIFS ADULTES</strong>
                <p className="mt-2">
                  à partir de 19 ans <br />
                  Consulter nos éducateurs
                </p>
                <hr />
                <strong className="red-text"> DROIT D'ENTRÉE</strong>
                <p className="mt-2">
                  {" "}
                  <strong>Adulte </strong>
                  <strong className="light-blue-text">34 € </strong>
                </p>
                <p>
                  <strong>Jeune </strong>
                  <strong className="light-blue-text"> 17 €</strong>
                </p>
                <p>
                  <strong>Couple</strong>{" "}
                  <strong className="light-blue-text"> 51 €</strong>
                </p>
                <hr />
                <strong className="red-text">INVITÉ</strong>
                <p>
                  <strong>Adulte </strong>pour une heure.
                  <br /> A l'extérieur
                  <strong className="light-blue-text"> 7 €</strong>
                </p>
                <p>
                  <strong>Jeune</strong> pour une heure.
                  <br /> A l'extérieur
                  <strong className="light-blue-text"> 4 € </strong>
                </p>
                <p>
                  <strong>Adulte</strong> pour une heure. <br /> A la Roseraie
                  <strong className="light-blue-text"> 8 €</strong>
                </p>
                <hr />
                <strong className="red-text">COTISATION VACANCES</strong>
                <br />
                du 1er Juin au 30 Septembre - Licence Non incluse
                <p className="mt-3">
                  <strong>Adultes</strong>{" "}
                  <strong className="light-blue-text"> 104 €</strong>
                </p>
                <p>
                  <strong>Jeunes et Etudiants </strong>{" "}
                  <strong className="light-blue-text"> 60 €</strong>
                </p>
                <p>
                  <strong>Couples</strong>{" "}
                  <strong className="light-blue-text">152 €</strong>
                </p>
                <hr />
                <strong className="red-text"> LOCATION HORAIRE</strong>
                <p>
                  <strong>Extérieur - Non Adhérent </strong>
                  <strong className="light-blue-text">14 €</strong>
                </p>
                <hr />
                <strong className="red-text">CARTE PARENTALE </strong>Licence
                Non incluse
                <p>
                  Permettant à 1 parent de jouer avec 1 de ses enfants adhérent
                  <strong className="light-blue-text"> 99 €</strong>
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
