import React, { Component } from "react"
import { Link } from "gatsby"
import {
  MDBContainer,
  MDBTabPane,
  MDBTabContent,
  MDBNav,
  MDBNavItem,
  MDBIcon,
  MDBTooltip,
  MDBBtn,
  MDBRow,
  MDBCol,
  MDBMedia,
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
      <MDBContainer>
        <MDBNav pills color="primary">
          <MDBNavItem>
            <Link
              to="#"
              className={`nav-link Ripple-parent ${
                this.state.items["default"] === "1" ? "active" : ""
              }`}
              onClick={this.togglePills("default", "1")}
            >
              Loisir
            </Link>
          </MDBNavItem>
          <MDBNavItem>
            <Link
              to="#"
              className={`nav-link Ripple-parent ${
                this.state.items["default"] === "2" ? "active" : ""
              }`}
              onClick={this.togglePills("default", "2")}
            >
              Compétition
            </Link>
          </MDBNavItem>
          <MDBNavItem>
            <Link
              to="#"
              className={`nav-link Ripple-parent ${
                this.state.items["default"] === "3" ? "active" : ""
              }`}
              onClick={this.togglePills("default", "3")}
            >
              Enseignement
            </Link>
          </MDBNavItem>
        </MDBNav>
        <MDBTabContent activeItem={this.state.items["default"]}>
          <MDBTabPane tabId="1">
            <blockquote className="blockquote">
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
              <p className="blockquote-footer  mb-1">
                Nos courts extérieurs sont disponibles pour du Loisir chaque
                jour toute la journée{" "}
                <strong>
                  sauf les terres battues indisponibles du début de la période
                  de gel jusqu'à leur réfection au printemps
                </strong>
                .
              </p>
              <p className="blockquote-footer mb-1">
                Nos courts couverts compte tenu de l'école de tennis des courts
                collectifs adultes et jeunes sont disponibles pour le loisir
                suivant des créneaux différents en période et hors période
                scolaire.
              </p>
              <p className="blockquote-footer mb-1">
                Si vous voulez jouer mais n'avez pas de partenaire,
                <span className="light-blue-text"> Marie Hélène </span>
                et <span className="red-text">Virginie</span> vous en trouvent
                un et nous sommes en train de constituer un classeur des membres
                du Club consultable librement par tous{" "}
                <strong>classement par sexe et par niveau de jeu</strong>.
              </p>
            </blockquote>
          </MDBTabPane>
          <MDBTabPane tabId="2">
            <MDBRow>
              <MDBCol>
                <h4 className="h4-responsive text-center">
                  Compétitions par équipes
                </h4>
                <hr
                  className="text-center mt-4"
                  style={{ maxWidth: `20rem` }}
                />
                <p className="text-center" style={{ fontWeight: `400` }}>
                  Tous les adhérents de notre Club qui le souhaitent ont la
                  possibilité de participer à des compétitions correspondant à
                  leur niveau.
                </p>
                <ul className="">
                  <li className="my-2">
                    Equipe Fanion{" "}
                    <span className="light-blue-text">Hommes</span> en{" "}
                    <span className="red-text">Nationale 4</span>.
                  </li>
                  <li className="my-2">
                    Equipe Fanion <span className="light-blue-text">Dames</span>{" "}
                    en <span className="red-text">DSR</span>.
                  </li>
                  <li className="my-2">
                    3 équipes <span className="light-blue-text">Féminines</span>{" "}
                    et 5 équipes <span className="red-text">Masculines</span> en{" "}
                    <strong>Interclubs de Printemps </strong>.
                  </li>
                  <li className="my-2">
                    Équipes Masculines{" "}
                    <span className="light-blue-text">3ème </span> et{" "}
                    <span className="red-text">4ème</span> Série en{" "}
                    <strong>Championnat de Gironde</strong> .
                  </li>
                  <li className="my-2">
                    Équipes <span className="light-blue-text">Messieurs</span>{" "}
                    [35, 45, 55, 65 ans] en{" "}
                    <strong>Interclubs régionaux.</strong>
                  </li>
                  <li className="my-2">
                    Équipes <span className="red-text">4ème série </span>{" "}
                    féminines dans Les <strong>Raquettes F.F.T</strong> .
                  </li>
                  <li className="my-2">
                    Équipes de<span className="light-blue-text"> Jeunes</span>{" "}
                    garçons et filles dans toutes les catégories d'âges de 9/10
                    11/12 13/14 et 15/16 ans, dans les différentes compétitions{" "}
                    <strong>départementales et régionales</strong> .
                  </li>
                </ul>
              </MDBCol>
              <MDBCol>
                <h4 className="h4-responsive text-center">
                  Compétion Individuelle
                </h4>
                <hr
                  className="text-center mt-4"
                  style={{ maxWidth: `20rem` }}
                />
                <p className="text-center" style={{ fontWeight: `400` }}>
                  Pour faire votre choix, nous vous donnons les liens suivants :
                </p>
                <MDBMedia list className="mt-3 ">
                  <MDBMedia tag="li" className="my-3">
                    <MDBMedia left href="https://www.fft.fr">
                      <MDBMedia
                        object
                        src="https://www.fft.fr/sites/default/files/2019-05/fft.svg"
                        alt="Fédération Française de Tennis"
                        style={{ height: `70px`, width: `70px` }}
                      />
                    </MDBMedia>
                    <MDBMedia body>
                      <MDBMedia heading>
                        Fédération Française de Tennis
                      </MDBMedia>
                      <span className="">
                        Retrouvez toute l'actualité du tennis, du padel, du
                        beach tennis, du paratennis et des équipes de France sur
                        le site de la Fédération française de Tennis.
                      </span>
                    </MDBMedia>
                  </MDBMedia>
                  <MDBMedia tag="li">
                    <MDBMedia
                      left
                      href="http://www.ligue.fft.fr/guyenne/guyenne_a/cms/index_public.php?us_action=show_note_site&login_off=1&ui_id_site=1"
                    >
                      <MDBMedia
                        object
                        src="http://www.club.fft.fr/tc.moulinneuf/59240589_d/data_1/bmp/li/liguedeguyenne.bmp"
                        alt="Ligue de Guyenne"
                        style={{ height: `70px`, width: `70px` }}
                      />
                    </MDBMedia>
                    <MDBMedia body>
                      <MDBMedia heading>Ligue de Guyenne de Tennis</MDBMedia>
                      <span className="">
                        Le but La ligue de Guyenne est d'organiser et de
                        développer la pratique du tennis sur son territoire
                        ainsi que d'encourager et de coordonner les activités
                        des clubs.
                      </span>
                    </MDBMedia>
                  </MDBMedia>
                  <MDBMedia tag="li">
                    <MDBMedia
                      left
                      href="http://www.comite.fft.fr/gironde/gironde_a/cms/index_public.php?us_action=show_note_site&login_off=1&ui_id_site=1"
                    >
                      <MDBMedia
                        object
                        src="data:image/png;base64,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"
                        alt="Comité Départemental de Gironde"
                        style={{ height: `70px`, width: `70px` }}
                      />
                    </MDBMedia>
                    <MDBMedia body>
                      <MDBMedia heading>
                        Comité Départemental de Gironde
                      </MDBMedia>
                      <span className="">
                        Retrouvez toutes les informations sur l'organisation du
                        Tennis en Gironde.
                      </span>
                    </MDBMedia>
                  </MDBMedia>
                </MDBMedia>
              </MDBCol>
            </MDBRow>
          </MDBTabPane>
          <MDBTabPane tabId="3">
            <p className="text-center w-responsive mx-auto wow fadeIn mt-2 mb-4">
              <strong>L'enseignement </strong>couvre la découverte,
              l'initiation, le perfectionnement et l'entraînement à la
              compétition. Il est animé et encadré par{" "}
              <span className="light-blue-text">4</span> enseignants
              professionnels et <span className="red-text">2</span> initiateurs
              Fédéraux et se décline comme suit :
            </p>

            <div className="row wow fadeIn" data-wow-delay="0.4s">
              <div className="col-lg-3 col-md-6 mb-5">
                <div className="card pricing-card mb-2">
                  <div className="price mb-1">
                    <div className="version header grey-color">
                      <h6 className="font-weight-bold">
                        Centre d'entraînement
                      </h6>
                    </div>
                  </div>

                  <div className="card-body streakd">
                    <ul className="list-unstyled">
                      <li>
                        <p>pour les meilleurs compétiteurs.</p>
                      </li>
                    </ul>
                    <button className="btn blue-gradient">
                      Voir les tarifs
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-lg-3col-md-12 mb-5">
                <div className="card pricing-card">
                  <div className="price mb-1">
                    <div className="version header grey-color">
                      <h6 className="font-weight-bold">Ecole de Tennis</h6>
                    </div>
                  </div>

                  <div className="card-body streakd">
                    <ul className="list-unstyled">
                      <li>
                        <p>
                          Mercredi de 10h à 12h <br /> et de 13h à 18h.
                        </p>
                      </li>
                      <li>
                        <p>
                          Samedi de 9h à 12h <br />
                          et de 13h à 17h.
                        </p>
                      </li>
                      <li>
                        <p>
                          Lundi, Mardi, Jeudi, Vendredi <br />
                          de 17h à 18h.
                        </p>
                      </li>
                    </ul>
                    <button className="btn blue-gradient">
                      Voir les tarifs
                    </button>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 mb-5">
                <div className="card pricing-card">
                  <div className="price mb-1">
                    <div className="version header grey-color">
                      <h6 className="h6-responsive font-weight-bold">
                        Cours Collectifs Jeunes
                      </h6>
                    </div>
                  </div>

                  <div className="card-body streakd">
                    <ul className="list-unstyled">
                      <li>
                        <p>
                          <strong>A ROBERT BRETTES</strong>: Mercredi de 14h à
                          18h.
                        </p>
                      </li>
                      <li>
                        <p>Vendredi de 18h30 à 20h30</p>
                      </li>
                      <li>
                        <p>Samedi de 10h à 12h.</p>
                      </li>
                      <li>
                        <p>
                          <strong>A LA ROSERAIE </strong>:<br /> Samedi de 9h à
                          12h.
                        </p>
                      </li>
                      <li>
                        <p>Lundi, Mardi, Jeudi, Vendredi de 17h à 18h.</p>
                      </li>
                    </ul>
                    <button className="btn blue-gradient">
                      Voir les tarifs
                    </button>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 mb-5">
                <div className="card pricing-card mb-2">
                  <div className="price mb-1">
                    <div className="version header grey-color">
                      <h6 className="font-weight-bold">
                        Cours Collectifs Adultes
                      </h6>
                    </div>
                  </div>

                  <div className="card-body streakd">
                    <ul className="list-unstyled">
                      <li>
                        <p>consulter nos éducateurs</p>
                      </li>
                      <li>
                        <p>
                          <strong>Michel PONTICO </strong>: 06.19.64.49.06
                          michelpontico2012@gmail.com
                        </p>
                      </li>
                      <li>
                        <p>
                          <strong> Luc FINOEL </strong>: 06.83.44.96.47
                          lfinoel@gmail.com
                        </p>
                      </li>
                      <li>
                        <p>
                          <strong> Benjamin CATTAN </strong>: : 06.59.36.19.76
                          maitrecat@hotmail.com
                        </p>
                      </li>
                    </ul>
                    <button className="btn blue-gradient">
                      Voir les tarifs
                    </button>
                  </div>
                </div>
              </div>

              <p>
                <h6 className="h6-responsive font-weight-bold">
                  {" "}
                  L'inscription à l'enseignement du tennis permet par ailleurs
                  la pratique du Tennis par accès aux installations de façon
                  illimitée.{" "}
                </h6>
                Les <strong>30 séances</strong> hebdomadaires de 1h pour
                <span className="light-blue-text">l'Ecole de Tennis </span>et
                les <span className="red-text">Cours Collectifs</span> ont lieu
                de début Octobre à fin Juin [hors les vacances scolaires]. Il en
                est de même pour la 2ème heure. Les enfants sont par groupe de
                niveau et d'âge similaires. Il y a un enseignant par groupe et
                par terrain. Les groupes sont limités à 8 enfants pour l'Ecole
                de Tennis et à 6 enfants pour les Cours Collectifs Jeunes.
              </p>
            </div>
          </MDBTabPane>
        </MDBTabContent>
      </MDBContainer>
    )
  }
}

export default Pills
