import React, { Component } from "react"
import {
  MDBContainer,
  MDBCollapse,
  MDBCardBody,
  MDBCollapseHeader,
  MDBCol,
  MDBView,
  MDBMask,
  MDBAnimation,
  MDBRow,
  MDBIcon,
} from "mdbreact"

class Prices extends Component {
  state = {
    collapseID: "",
  }

  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : "",
    }))

  render() {
    const { collapseID } = this.state
    return (
      <MDBContainer>
        <MDBAnimation reveal type="fadeIn" delay="0.2">
          <h1
            id="tarifs"
            className="section-heading text-center  mt-5 mb-4 font-weight-bold "
          >
            TARIFS
          </h1>
        </MDBAnimation>
        <MDBContainer className="mt-5">
          <MDBRow>
            <div className="col-lg-6">
              <MDBAnimation reveal type="fadeIn" delay="0.4">
                <div className="row mb-3">
                  <div className="col-md-1 col-2">
                    <i className="fas fa-users purple-text fa-2x"></i>
                  </div>
                  <div className="col-md-11 col-10">
                    <h5 className="font-weight-bold purple-text mb-2">
                      Cours collectifs adulte
                    </h5>
                    <p>
                      à partir de <strong>19 ans </strong>. Consulter nos
                      éducateurs
                    </p>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-1 col-2">
                    <i className="fas fa-map-marker blue-text fa-2x"></i>
                  </div>
                  <div className="col-md-11 col-10">
                    <h5 className="font-weight-bold blue-text mb-2">
                      Cotisation vacances
                    </h5>

                    <ul style={{ listStyle: `none` }} className="pl-0">
                      <li>
                        Adultes <strong>104 €</strong>
                      </li>
                      <li>
                        Jeunes et Etudiants <strong>60 € </strong>
                      </li>
                      <li>
                        Couples <strong>152 €</strong>
                      </li>
                    </ul>
                  </div>
                </div>
              </MDBAnimation>
            </div>
            <div className="col-lg-6">
              <MDBAnimation reveal type="fadeIn" delay="0.4">
                <div className="row mb-3">
                  <div className="col-md-1 col-2">
                    <i className="far fa-clock pink-text fa-2x"></i>
                  </div>
                  <div className="col-md-11 col-10">
                    <h5 className="font-weight-bold pink-text mb-2">
                      Location horaire
                    </h5>
                    <p className="">
                      Extérieur - Non Adhérent <strong>14 €</strong>
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-1 col-2">
                    <i className="fas fa-child indigo-text fa-2x"></i>
                  </div>
                  <div className="col-md-11 col-10">
                    <h5 className="font-weight-bold indigo-text mb-2">
                      Carte parentale
                    </h5>
                    <p className="mb-0">
                      Permettant 1 parent de jouer avec 1 de ses enfants
                      adhérent <strong>99 €</strong>
                    </p>
                  </div>
                </div>
              </MDBAnimation>
            </div>
          </MDBRow>
          <div className="row my-5 tarifs">
            <MDBCol lg="6">
              <MDBAnimation reveal type="fadeIn" delay="0.6">
                <MDBCollapseHeader onClick={this.toggleCollapse("collapse1")}>
                  <span className="indigo-text font-weight-bolder">
                    <em>TARIFS 2019 - 2020</em>
                  </span>{" "}
                  {collapseID === "collapse1" ? (
                    <MDBIcon
                      icon="angle-down"
                      rotate="270"
                      style={{ float: `right` }}
                      className="indigo-text"
                    />
                  ) : (
                    <MDBIcon
                      icon="angle-down"
                      style={{ float: `right` }}
                      className="indigo-text"
                    />
                  )}
                </MDBCollapseHeader>
                <MDBCollapse id="collapse1" isOpen={collapseID}>
                  <MDBCardBody>
                    <ul style={{ listStyle: `none` }}>
                      <li>
                        Adultes Licence incluse <strong>196 €</strong>
                      </li>
                      <li>
                        Couples Licences incluses <strong>310 €</strong>
                      </li>
                      <li>
                        Supplément Roseraie 4 courts couverts terre battue :
                        Adulte <strong>96 €</strong> Couple{" "}
                        <strong>142 € .</strong>
                      </li>
                      <li>
                        Jeunes jusqu'en 2001 inclus, Licence incluse
                        <strong>117 €</strong>
                      </li>
                      <li>
                        Etudiants Licence incluse
                        <strong>148 €</strong>
                      </li>
                    </ul>
                  </MDBCardBody>
                </MDBCollapse>

                <MDBCollapseHeader
                  onClick={this.toggleCollapse("collapse2")}
                  style={{ backgroundColor: "red" }}
                >
                  <span className="indigo-text font-weight-bolder">
                    {" "}
                    <em>ÉCOLE DE TENNIS 2019-2020</em>
                  </span>{" "}
                  {collapseID === "collapse2" ? (
                    <MDBIcon
                      icon="angle-down"
                      rotate="270"
                      style={{ float: `right` }}
                      className="indigo-text"
                    />
                  ) : (
                    <MDBIcon
                      icon="angle-down"
                      style={{ float: `right` }}
                      className="indigo-text"
                    />
                  )}
                </MDBCollapseHeader>
                <MDBCollapse id="collapse2" isOpen={collapseID}>
                  <MDBCardBody>
                    <p>
                      2019-2020 de 2008 à 2015 inclus, 30 séances, Licence et
                      Cotisation Jeune incluses. Mercredi matin, Mercredi
                      après-midi, Samedi après-midi sur les courts couverts de
                      la Roseraie.
                    </p>
                    <ul style={{ listStyle: `none` }}>
                      <li>
                        Enfants nés en 2014-2015 1 heure par semaine{" "}
                        <strong>158 € </strong> 2 heures par semaine{" "}
                        <strong>287 €</strong>
                      </li>
                      <li>
                        Enfants nés en 2012-2013 1 heure par semaine{" "}
                        <strong>196 € </strong> 2 heures par semaine{" "}
                        <strong>358 € </strong>
                      </li>
                      <li>
                        Enfants nés en 2010-2011 1 heure par semaine{" "}
                        <strong>236 € </strong> 2 heures par semaine{" "}
                        <strong>420 €.</strong>
                      </li>
                      <li>
                        Enfants nés en 2008-2009 1 heure par semaine{" "}
                        <strong>273 € </strong> 2 heures par semaine{" "}
                        <strong>489 €</strong>
                      </li>
                    </ul>
                  </MDBCardBody>
                </MDBCollapse>

                <MDBCollapseHeader onClick={this.toggleCollapse("collapse3")}>
                  <span className="indigo-text font-weight-bolder">
                    <em>COURS COLLECTIFS JEUNES 2019-2020 </em>
                  </span>{" "}
                  {collapseID === "collapse3" ? (
                    <MDBIcon
                      icon="angle-down"
                      rotate="270"
                      style={{ float: `right` }}
                      className="indigo-text"
                    />
                  ) : (
                    <MDBIcon
                      icon="angle-down"
                      style={{ float: `right` }}
                      className="indigo-text"
                    />
                  )}
                </MDBCollapseHeader>
                <MDBCollapse id="collapse3" isOpen={collapseID}>
                  <MDBCardBody>
                    <p>
                      {" "}
                      De 2002 à 2007, 30 séances d'une heure Licence et
                      Cotisation incluses{" "}
                    </p>
                    <ul style={{ listStyle: `none` }}>
                      <li>
                        Mercredi après-midi sur les courts du Stade Robert
                        Brettes 1 heure par semaine <strong>308 € </strong> 2
                        heures par semaine 2 heures par semaine{" "}
                        <strong>545 €</strong>
                      </li>
                      <li>
                        Enfants nés en 2012-2013 1 heure par semaine{" "}
                        <strong>196 € </strong> 2 heures par semaine{" "}
                        <strong>358 € </strong>
                      </li>
                      <li>
                        Samedi matin sur les courts couverts de la Roseraie 1
                        heure par semaine <strong>347 € </strong> 2 heures par
                        semaine 2 heures par semaine <strong>585 €.</strong>
                      </li>
                      <li>
                        Lundis, Mardis, Jeudis et Vendredis soirs à partir de
                        18h sur les courts du Stade Robert Brettes 1 heure par
                        semaine
                        <strong>308 €</strong> 2 heures par semaine 2 heures par
                        semaine <strong>545 €</strong>
                      </li>
                    </ul>
                  </MDBCardBody>
                </MDBCollapse>

                <MDBCollapseHeader onClick={this.toggleCollapse("collapse4")}>
                  <span className="indigo-text font-weight-bolder">
                    {" "}
                    <em>ÉCOLE DE COMPÉTITION</em>
                  </span>{" "}
                  {collapseID === "collapse4" ? (
                    <MDBIcon
                      icon="angle-down"
                      rotate="270"
                      style={{ float: `right` }}
                      className="indigo-text"
                    />
                  ) : (
                    <MDBIcon
                      icon="angle-down"
                      style={{ float: `right` }}
                      className="indigo-text"
                    />
                  )}
                </MDBCollapseHeader>
                <MDBCollapse id="collapse4" isOpen={collapseID}>
                  <MDBCardBody>
                    Enfants sélectionnés par le responsable sportif Cotisation
                    de base Ecole de Tennis ou Cours Collectif Jeunes majorée.
                    Voir Virginie CLERMONTEL ou Marie-Hélène DROUET qui vous
                    fourniront les barèmes et tarifs adaptés. Éventuellement
                    contacter le Bureau de Section Président, Secrétaire,
                    Trésorier.
                  </MDBCardBody>
                </MDBCollapse>

                <MDBCollapseHeader onClick={this.toggleCollapse("collapse5")}>
                  <span className="indigo-text font-weight-bolder">
                    {" "}
                    <em>DROIT D'ENTRÉE</em>
                  </span>{" "}
                  {collapseID === "collapse5" ? (
                    <MDBIcon
                      icon="angle-down"
                      rotate="270"
                      style={{ float: `right` }}
                      className="indigo-text"
                    />
                  ) : (
                    <MDBIcon
                      icon="angle-down"
                      style={{ float: `right` }}
                      className="indigo-text"
                    />
                  )}
                </MDBCollapseHeader>
                <MDBCollapse id="collapse5" isOpen={collapseID}>
                  <MDBCardBody>
                    <ul style={{ listStyle: `none` }} className="pl-0">
                      <li>
                        Adulte <strong>34 €</strong>
                      </li>
                      <li>
                        Jeune <strong>17 €</strong>
                      </li>
                      <li>
                        Couple <strong> 51 € </strong>
                      </li>
                    </ul>
                  </MDBCardBody>
                </MDBCollapse>

                <MDBCollapseHeader onClick={this.toggleCollapse("collapse6")}>
                  <span className="indigo-text font-weight-bolder">
                    {" "}
                    <em>INVITÉ</em>
                  </span>{" "}
                  {collapseID === "collapse6" ? (
                    <MDBIcon
                      icon="angle-down"
                      rotate="270"
                      style={{ float: `right` }}
                      className="indigo-text"
                    />
                  ) : (
                    <MDBIcon
                      icon="angle-down"
                      style={{ float: `right` }}
                      className="indigo-text"
                    />
                  )}
                </MDBCollapseHeader>
                <MDBCollapse id="collapse6" isOpen={collapseID}>
                  <MDBCardBody>
                    <ul style={{ listStyle: `none` }} className="pl-0">
                      <li>
                        Adulte pour une heure. A l'extérieur{" "}
                        <strong>7 € </strong>
                      </li>
                      <li>
                        Jeune pour une heure. A l'extérieur <strong>4 €</strong>
                      </li>
                      <li>
                        Adulte pour une heure. A la Roseraie{" "}
                        <strong>8 €</strong>
                      </li>
                    </ul>
                  </MDBCardBody>
                </MDBCollapse>
              </MDBAnimation>
            </MDBCol>
            <div className="col-lg-6">
              <MDBAnimation reveal type="fadeIn" delay="0.6">
                <MDBView>
                  <img
                    src="https://images.unsplash.com/photo-1570192164067-6f2d28702ae8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
                    alt="court de tennis"
                    className="z-depth-1 img-fluid rounded"
                  />
                  <MDBMask
                    overlay="purple-light"
                    className="flex-center"
                  ></MDBMask>
                </MDBView>
              </MDBAnimation>
            </div>
          </div>
          <p className="text-center text-justify">
            <em>
              RÉDUCTION pour enfants d'une même famille Ecole de Tennis - Cours
              Collectifs Jeunes : 2ème enfant - 10% sur sa cotisation, à partir
              du 3ème - 20% sur leur cotisation.
            </em>
          </p>
        </MDBContainer>
      </MDBContainer>
    )
  }
}

export default Prices
