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
        <p className="text-center w-responsive mx-auto wow fadeIn my-5 lead">
          Les inscriptions s'effectuent à notre secrétariat au{" "}
          <strong className="light-blue-text">Club </strong>
          <strong className="red-text">House</strong> et correspondent sauf pour
          les inscriptions Vacances et celles en cours de saison à une adhésion
          pour la saison sportive de début Octobre à fin Septembre. Cette
          adhésion permet la pratique du Tennis dans notre Club toute l'année.
        </p>
        <MDBContainer className="my-5">
          <MDBRow>
            <MDBCol md="6">
              <h5 className="h5-responsive text-justify text-center light-blue-text my-5">
                {" "}
                Inscriptions ou ré-inscriptions à l'Ecole de Tennis et aux Cours
                Collectifs.
              </h5>
              <ul>
                <li className="my-4">
                  Elles peuvent être effectuées depuis le{" "}
                  <strong className="light-blue-text">1er juin</strong>{" "}
                  <strong className="red-text">2019</strong> pour la saison
                  suivante, ce qui nous permet de répondre au mieux aux souhaits
                  des parents en terme de lieu et d'horaire demandés pour les
                  leçons.
                </li>
                <li className="my-4">
                  Elles s'accompagnent normalement du règlement correspondant
                  [un paiement fractionné est possible], les règlements ne sont
                  encaissés qu'au moment du démarrage effectif des cours en
                  Octobre.
                </li>
                <li className="my-4">
                  Les inscriptions s'arrêtent normalement au début des cours fin
                  Septembre début Octobre, mais des inscriptions peuvent être
                  prises en compte en cours de saison.
                </li>
              </ul>
            </MDBCol>
            <MDBCol md="6">sfd</MDBCol>
          </MDBRow>
        </MDBContainer>
      </>
    )
  }
}

export default PillsInscription
