import React, { Component } from "react"
import { BrowserRouter as Router } from "react-router-dom"
import {
  MDBContainer,
  MDBTabPane,
  MDBTabContent,
  MDBNav,
  MDBNavItem,
  MDBNavLink,
  MDBIcon,
  MDBTooltip,
  MDBBtn,
} from "mdbreact"

class Pills extends Component {
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
      <Router>
        <MDBContainer>
          <MDBNav pills color="primary">
            <MDBNavItem>
              <MDBNavLink
                to="#"
                active={this.state.items["default"] === "1"}
                onClick={this.togglePills("default", "1")}
              >
                Loisir
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink
                to="#"
                active={this.state.items["default"] === "2"}
                onClick={this.togglePills("default", "2")}
              >
                Link
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink
                to="#"
                active={this.state.items["default"] === "3"}
                onClick={this.togglePills("default", "3")}
              >
                Link
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink
                to="#"
                active={this.state.items["default"] === "4"}
                onClick={this.togglePills("default", "4")}
              >
                Help
              </MDBNavLink>
            </MDBNavItem>
          </MDBNav>
          <MDBTabContent activeItem={this.state.items["default"]}>
            <MDBTabPane tabId="1">
              <p>
                <strong>
                  LA RÉSERVATION DES COURTS EXTÉRIEURS COMME DES COURTS
                  COUVERTS, S'EFFECTUE LA VEILLE OU LE JOUR MÊME :
                </strong>
                <ul className="mt-2">
                  <li>
                    Sur place au <span className="light-blue-text">Club</span>
                    <span className="red-text"> House</span>.
                  </li>
                  <li>
                    {" "}
                    Par téléphone en appelant le{" "}
                    <span className="light-blue-text">Club</span>
                    <span className="red-text"> House</span> au 05.56.97.43.85{" "}
                    <MDBTooltip placement="top">
                      <MDBBtn tag="a" size="sm" floating gradient="blue">
                        <MDBIcon icon="question" />
                      </MDBBtn>

                      <div>
                        Les Horaires d'ouverture de notre Club House sont les
                        suivants :{" "}
                        <p>
                          Le Matin tous les jours de 9h à 12h30 [sauf le Mardi
                          fermé]
                        </p>
                        <p>
                          L'Après-midi : De Avril à Septembre. 14h à 20h du
                          Lundi au Samedi, de 14h à 19h le Dimanche.
                        </p>
                        <p>
                          {" "}
                          de Octobre à Mars. 14h à 19h du Lundi au Samedi, de
                          14h à 18h le Dimanche.
                        </p>
                      </div>
                    </MDBTooltip>
                  </li>
                  <li>
                    {" "}
                    Par <span className="red-text">internet</span> , voir la
                    page RESERVATION{" "}
                  </li>
                </ul>
              </p>
              <p>
                _ Nos courts extérieurs sont disponibles pour du Loisir chaque
                jour toute la journée{" "}
                <strong>
                  sauf les terres battues indisponibles du début de la période
                  de gel jusqu'à leur réfection au printemps
                </strong>
                .
              </p>
              <p>
                _ Nos courts couverts compte tenu de l'école de tennis des
                courts collectifs adultes et jeunes sont disponibles pour le
                loisir suivant des créneaux différents en période et hors
                période scolaire.
              </p>
              <p>
                _ Si vous voulez jouer mais n'avez pas de partenaire,
                <span className="light-blue-text"> Marie Hélène </span>
                et <span className="red-text">Virginie</span> vous en trouvent
                un et nous sommes en train de constituer un classeur des membres
                du Club consultable librement par tous{" "}
                <strong>classement par sexe et par niveau de jeu</strong>.
              </p>
            </MDBTabPane>
            <MDBTabPane tabId="2">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil
                odit magnam minima, soluta doloribus reiciendis molestiae
                placeat unde eos molestias. Quisquam aperiam, pariatur. Tempora,
                placeat ratione porro voluptate odit minima.
              </p>
            </MDBTabPane>
            <MDBTabPane tabId="3">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil
                odit magnam minima, soluta doloribus reiciendis molestiae
                placeat unde eos molestias. Quisquam aperiam, pariatur. Tempora,
                placeat ratione porro voluptate odit minima.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil
                odit magnam minima, soluta doloribus reiciendis molestiae
                placeat unde eos molestias. Quisquam aperiam, pariatur. Tempora,
                placeat ratione porro voluptate odit minima.
              </p>
            </MDBTabPane>
            <MDBTabPane tabId="4">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil
                odit magnam minima, soluta doloribus reiciendis molestiae
                placeat unde eos molestias. Quisquam aperiam, pariatur. Tempora,
                placeat ratione porro voluptate odit minima.
              </p>
            </MDBTabPane>
          </MDBTabContent>
        </MDBContainer>
      </Router>
    )
  }
}

export default Pills
