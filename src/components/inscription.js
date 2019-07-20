import React, { Component } from "react"
import {
  MDBContainer,
  MDBCollapse,
  MDBCard,
  MDBCardBody,
  MDBCollapseHeader,
} from "mdbreact"

class CollapsePage extends Component {
  state = {
    collapseID: "collapse1",
  }

  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : "",
    }))

  render() {
    const { collapseID } = this.state
    return (
      <MDBContainer className="mt-5">
        <h2 className="text-center">L'inscription</h2>
        <hr style={{ width: `50%`, marginLeft: `25%` }} />
        <MDBContainer className="mt-5">
          <MDBCard className="mt-3">
            <MDBCollapseHeader onClick={this.toggleCollapse("collapse1")}>
              <span style={{ color: "white" }}>
                Inscriptions de nouveaux adhérents.
                <i
                  className={
                    collapseID === "collapse1"
                      ? "fa fa-angle-down rotate-icon"
                      : "fa fa-angle-down"
                  }
                />
              </span>
            </MDBCollapseHeader>
            <MDBCollapse id="collapse1" isOpen={collapseID}>
              <MDBCardBody>
                Elles sont possibles tout au long de la saison accompagnées du
                règlement correspondant. En fonction de la date d'inscription
                des dérogations à nos tarifs sont possibles.
              </MDBCardBody>
            </MDBCollapse>
          </MDBCard>

          <MDBCard>
            <MDBCollapseHeader onClick={this.toggleCollapse("collapse2")}>
              <span style={{ color: "white" }}>
                Inscriptions et/ou ré-inscriptions à l'Ecole de Tennis et aux
                Cours Collectifs.
                <i
                  className={
                    collapseID === "collapse2"
                      ? "fa fa-angle-down rotate-icon"
                      : "fa fa-angle-down"
                  }
                />
              </span>
            </MDBCollapseHeader>
            <MDBCollapse id="collapse2" isOpen={collapseID}>
              <MDBCardBody>
                <ul>
                  <li>
                    Elles peuvent être effectuées depuis le 1er juin 2019 pour
                    la saison suivante, ce qui nous permet de répondre au mieux
                    aux souhaits des parents en terme de lieu et d'horaire
                    demandés pour les leçons .{" "}
                  </li>
                  <li>
                    {" "}
                    Elles s'accompagnent normalement du règlement correspondant
                    [un paiement fractionné est possible], les règlements ne
                    sont encaissés qu'au moment du démarrage effectif des cours
                    en Octobre.{" "}
                  </li>{" "}
                  <li>
                    Les inscriptions s'arrêtent normalement au début des cours
                    [fin Septembre début Octobre], mais des inscriptions peuvent
                    être prises en compte en cours de saison.
                  </li>
                </ul>
              </MDBCardBody>
            </MDBCollapse>
          </MDBCard>

          <MDBCard>
            <MDBCollapseHeader onClick={this.toggleCollapse("collapse3")}>
              <span style={{ color: "white" }}>
                Inscriptions autres
                <i
                  className={
                    collapseID === "collapse3"
                      ? "fa fa-angle-down rotate-icon"
                      : "fa fa-angle-down"
                  }
                />
              </span>
            </MDBCollapseHeader>
            <MDBCollapse id="collapse3" isOpen={collapseID}>
              <MDBCardBody>
                Elles sont possibles tout au long de la saison accompagnées du
                règlement correspondant. En fonction de la date d'inscription
                des dérogations à nos tarifs sont possibles.
              </MDBCardBody>
            </MDBCollapse>
          </MDBCard>
        </MDBContainer>
      </MDBContainer>
    )
  }
}

export default CollapsePage
