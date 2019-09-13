import React, { Component } from "react"
import { Link } from "gatsby"
import {
  MDBContainer,
  MDBTabPane,
  MDBTabContent,
  MDBNav,
  MDBNavItem,
  MDBIcon,
  MDBRow,
  MDBCol,
} from "mdbreact"

class CollapseReservation extends Component {
  state = {
    activeItemClassicTabs3: "1",
  }

  toggleClassicTabs3 = tab => e => {
    e.preventDefault()
    if (this.state.activeItemClassicTabs3 !== tab) {
      this.setState({
        activeItemClassicTabs3: tab,
      })
    }
  }

  render() {
    return (
      <MDBContainer>
        <h1
          className="section-heading text-center mb-5 mt-5 pt-4 font-weight-bold wow fadeIn"
          data-wow-delay="0.2s"
        >
          Réservation
        </h1>
        <p className="text-center w-responsive mx-auto wow fadeIn my-5 lead">
          La réservation des courts extérieurs comme des courts couverts,
          s'effectue la veille ou le jour même :
        </p>
        <div className="classic-tabs">
          <MDBNav classicTabs color="primary" className="mt-5">
            <MDBNavItem>
              <Link
                className={`nav-link ${
                  this.state.activeItemClassicTabs3 === "1" ? "active" : ""
                }`}
                onClick={this.toggleClassicTabs3("1")}
              >
                <MDBIcon icon="phone" size="2x" />
                <br />
                Par téléphone
              </Link>
            </MDBNavItem>
            <MDBNavItem>
              <Link
                className={`nav-link ${
                  this.state.activeItemClassicTabs3 === "2" ? "active" : ""
                }`}
                onClick={this.toggleClassicTabs3("2")}
              >
                <MDBIcon icon="at" size="2x" />
                <br />
                Par internet
              </Link>
            </MDBNavItem>
            <MDBNavItem>
              <Link
                className={`nav-link ${
                  this.state.activeItemClassicTabs3 === "3" ? "active" : ""
                }`}
                onClick={this.toggleClassicTabs3("3")}
              >
                <MDBIcon icon="home" size="2x" />
                <br />
                Au club house
              </Link>
            </MDBNavItem>
            <MDBNavItem>
              <Link
                className={`nav-link ${
                  this.state.activeItemClassicTabs3 === "4" ? "active" : ""
                }`}
                onClick={this.toggleClassicTabs3("4")}
              >
                <MDBIcon icon="star" size="2x" />
                <br />
                Be Awesome
              </Link>
            </MDBNavItem>
          </MDBNav>
          <MDBTabContent
            className="card mb-5"
            activeItem={this.state.activeItemClassicTabs3}
          >
            <MDBTabPane tabId="1">
              <p>
                Par téléphone en appelant le{" "}
                <strong className="light-blue-text">Club </strong>{" "}
                <strong className="red-text">House </strong> au :
                <address>
                  <a href="tel:+330556974385">05.56.97.43.85</a>{" "}
                </address>
                . Les Horaires d'ouverture de notre{" "}
                <strong className="light-blue-text">Club </strong>{" "}
                <strong className="red-text">House </strong> sont les suivants:
              </p>
              <p>
                {" "}
                Le <strong className="light-blue-text">Matin</strong> tous les
                jours de 9h à 12h30 sauf le Mardi fermé.
                <br />
                <strong className="red-text ml-1">L'Après-midi </strong>:
                <ul>
                  <li>
                    De Avril à Septembre. 14h à 20h du Lundi au Samedi, de 14h à
                    19h le Dimanche.
                  </li>
                  <li>
                    De Octobre à Mars. 14h à 19h du Lundi au Samedi, de 14h à
                    18h le Dimanche.
                  </li>
                </ul>
              </p>
            </MDBTabPane>
            <MDBTabPane tabId="2">
              <MDBRow>
                <MDBCol md="6">
                  Nous utilisons le logiciel{" "}
                  <strong>
                    <a href="https://ballejaune.com/fr" target="_blank">
                      Balle Jaune
                    </a>
                  </strong>{" "}
                  qui vous permet :
                  <ul className="my-3">
                    <li>D’accéder aux plannings des courts</li>
                    <li>
                      D’effectuer une réservation pour{" "}
                      <strong className="red-text">1h</strong>
                    </li>
                    <li>
                      De supprimer ou modifier une réservation que l’on a
                      effectuée
                    </li>
                  </ul>
                  Le système est ouvert 7j/7j
                  <ul className="my-3">
                    <li>24h/24h pour la consultation des plannings</li>
                    <li>
                      <strong className="red-text">NOUVEAUX HORAIRES ! </strong>{" "}
                      De <strong className="light-blue-text">8h à 22h </strong>{" "}
                      pour les réservations
                    </li>
                  </ul>
                </MDBCol>
                <MDBCol md="6">qsdqs</MDBCol>
              </MDBRow>
            </MDBTabPane>
            <MDBTabPane tabId="3">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil
                odit magnam minima, soluta doloribus reiciendis molestiae
                placeat unde eos molestias. Quisquam aperiam, pariatur. Tempora,
                placeat ratione porro voluptate odit minima.
              </p>
            </MDBTabPane>
            <MDBTabPane tabId="4">
              <p>
                Quisquam aperiam, pariatur. Tempora, placeat ratione porro
                voluptate odit minima. Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Nihil odit magnam minima, soluta doloribus
                reiciendis molestiae placeat unde eos molestias.
              </p>
            </MDBTabPane>
          </MDBTabContent>
        </div>
      </MDBContainer>
    )
  }
}

export default CollapseReservation
