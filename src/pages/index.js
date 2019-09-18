import React from "react"
import { MDBRow, MDBCol, MDBBadge } from "mdbreact"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PillsPractices from "../components/pillsPtractices"
import SliderTeam from "../components/sliderTeam"
import TabPrices from "../components/tabPrices"
import CollapseReservation from "../components/collapseReservetion"
import PillsInscription from "../components/pillsInscription"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top scrolling-navbar">
        <div className="container">
          <a className="navbar-brand" href="#">
            SAM TENNIS
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav mr-auto smooth-scroll">
              <li className="nav-item">
                <a className="nav-link" href="#home">
                  Accueil <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about" data-offset="30">
                  Installations
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#team" data-offset="30">
                  Équipe
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#timetable" data-offset="100">
                  Disciplines
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#tickets" data-offset="100">
                  Tickets
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact" data-offset="100">
                  Contact
                </a>
              </li>
            </ul>

            <ul className="navbar-nav nav-flex-icons">
              <li className="nav-item">
                <a className="nav-link">
                  <i className="fab fa-facebook-f light-green-text-2"></i>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link">
                  <i className="fab fa-twitter light-green-text-2"></i>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link">
                  <i className="fab fa-instagram light-green-text-2"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div
        id="home"
        className="view jarallax"
        data-jarallax='{"speed": 0.2}'
        style={{
          backgroundImage: `${`url('https://images.unsplash.com/photo-1554068865-24cecd4e34b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60')`}`,
          backgroundRepeat: `no-repeat`,
          backgroundSize: `cover`,
          backgroundPosition: `center`,
        }}
      >
        <div className="mask rgba-black-strong">
          <div className="container h-100 d-flex justify-content-center align-items-center">
            <div className="row smooth-scroll">
              <div className="col-md-12">
                <div className="white-text text-center">
                  <h2 className="display-3 font-weight-bold wow fadeIn">
                    <strong className="light-blue-text">SAM </strong>
                    <strong className="red-text">TENNIS</strong>
                  </h2>
                  <h3 className="wow fadeIn" data-wow-delay="0.2s">
                    L'une des 28 sections sportives du SAM OMNISPORTS.
                  </h3>
                  <a
                    href="#about"
                    className="btn btn-outline-white wow fadeIn"
                    data-wow-delay="0.4s"
                  >
                    Rencontre notre équipe
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

    <main>
      <div className="container ">
        <section id="about" className="section py-4">
          <h1 className="section-heading text-center mb-5 my-5 mb-4 font-weight-bold wow fadeIn">
            Nos installations
          </h1>

          <div className="row mb-5 wow fadeIn" data-wow-delay="0.2s">
            <div className="col-lg-4 mb-2">
              <img
                src="https://images.unsplash.com/photo-1526307616774-60d0098f7642?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=472&w=711&q=60"
                alt="court de tennis"
                className="z-depth-1 img-fluid"
              />
            </div>

            <div className="col-lg-8 mb-2">
              <p className="lead">
                Nos installations sportives sont sur 2 sites à Mérignac :
              </p>
              <p align="justify" className="">
                <span>
                  <strong className="light-blue-text">
                    SITE DE ROBERT BRETTES
                  </strong>{" "}
                  : Un Club House ouvert 7 jrs / 7 jrs avec{" "}
                  <strong className="red-text">
                    8 Cours Extérieurs éclairés{" "}
                  </strong>{" "}
                  Quartier Pin Galant - Piscine - Stade :
                </span>
              </p>
              <MDBRow>
                <MDBCol size="6" className="my-2">
                  <div style={{ lineHeight: 1.8 }}>
                    <MDBBadge color="primary" pill className="mr-2">
                      2
                    </MDBBadge>{" "}
                    Courts en{" "}
                    <strong className="light-blue-text">Terre battue </strong>.
                  </div>
                  <div style={{ lineHeight: 1.8 }}>
                    <MDBBadge color="primary" pill className="mr-2">
                      4
                    </MDBBadge>{" "}
                    Courts en{" "}
                    <strong className="light-blue-text"> Quick </strong>.
                  </div>
                  <div style={{ lineHeight: 1.8 }}>
                    <MDBBadge color="primary" pill className="mr-2">
                      1
                    </MDBBadge>{" "}
                    Terrain de Pétanque .
                  </div>
                </MDBCol>
                <MDBCol size="6" className="my-2">
                  <div style={{ lineHeight: 1.8 }}>
                    <MDBBadge color="primary" pill className="mr-2">
                      2
                    </MDBBadge>{" "}
                    Courts en <strong className="light-blue-text">Soft </strong>{" "}
                    Type de Terre battue.
                  </div>
                  <div style={{ lineHeight: 1.8 }}>
                    <MDBBadge color="primary" pill className="mr-2">
                      3
                    </MDBBadge>{" "}
                    Courts de Mini-Tennis.
                  </div>
                  <div style={{ lineHeight: 1.8 }}>
                    <MDBBadge color="primary" pill className="mr-2">
                      1
                    </MDBBadge>{" "}
                    Table de Ping-Pong et Un Baby Foot.
                  </div>
                </MDBCol>
              </MDBRow>

              <p align="justify" className="mt-3 ">
                <strong className="red-text">SITE DE LA ROSERAIE </strong> : Les
                Cours Couverts de Tennis sont ouverts 7 jrs / 7 jrs à 2 minutes
                en voiture du Stade Robert Brettes, au 23 Avenue du Château
                d'Eau - 33700 Mérignac Quartier Capeyron :
                <ul style={{ listStyle: `none`, marginTop: `0.9rem` }}>
                  <li>
                    <MDBBadge color="danger" pill className="mr-2">
                      4
                    </MDBBadge>{" "}
                    Courts <strong className="red-text">Couverts</strong> en{" "}
                    <strong className="red-text">Terre battue</strong>
                  </li>

                  <li>
                    <MDBBadge color="danger" pill className="mr-2">
                      1
                    </MDBBadge>{" "}
                    <strong className="red-text">Restaurant</strong> de 65
                    couverts, ouvert du Lundi au Samedi, midis et soirs, à prix
                    raisonnables.
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </section>
      </div>

      <div
        className="streak streak-photo streak-md mask"
        style={{
          backgroundImage: `${`url('https://images.unsplash.com/photo-1558365849-6ebd8b0454b2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60  )`}`,
        }}
      >
        <div className="flex-center rgba-teal-strong mask">
          <div className="white-text smooth-scroll">
            <h2 className="h2-responsive mb-5 wow fadeIn">
              Les différentes disciplines du club
            </h2>
            <div className="text-center">
              <a
                href="#timetable"
                className="btn btn-outline-white wow fadeIn"
                data-offset="100"
                data-wow-delay="0.2s"
              >
                Voir les pratiques
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <section id="team" className="section team-section pt-3">
          <h1 className="section-heading text-center mb-5 mt-5 pt-4 font-weight-bold wow fadeIn">
            Notre équipe
          </h1>

          <p
            className="text-center w-responsive mx-auto wow fadeIn my-5 lead"
            data-wow-delay="0.2s"
          >
            Est composée d'un comité directeur, d'administratifs ayant en charge
            l'accueil de nos adhérents pour les inscriptions, la réservation et
            la pratique de nos différentes activités. Des Techniciens ayant en
            charge l'enseignement du Tennis à tous les niveaux et,
            l'entrainement et l'encadrement de nos compétiteurs individuels et
            de nos équipes :
          </p>

          <div className="row text-center wow fadeIn" data-wow-delay="0.4s">
            <SliderTeam />
          </div>
        </section>

        <hr className="between-sections" />

        <section id="timetable" className="section">
          <h1
            className="section-heading text-center mb-5 mt-5 pt-4 font-weight-bold wow fadeIn"
            data-wow-delay="0.2s"
          >
            Les pratiques
          </h1>

          <p className="text-center w-responsive mx-auto wow fadeIn my-5 lead">
            Le club <strong className="light-blue-text">SAM</strong>
            <strong className="red-text"> TENNIS</strong> offre la possibilité
            aux adhérents différents aspetcs de la pratiques du tennis de
            l'enseignement à la compétition en passant par le loisir .
          </p>

          <div className="row wow fadeIn" data-wow-delay="0.4s">
            <div className="col-md-12">
              <PillsPractices />
            </div>
          </div>
        </section>

        <hr className="between-sections" />

        <section id="tickets" className="section">
          <div className="row text-center wow fadeIn" data-wow-delay="0.4s">
            <TabPrices />
          </div>
        </section>

        <hr className="between-sections" />

        <section id="news" className="section news-section">
          <h1
            className="section-heading text-center mb-5 mt-5 pt-4 font-weight-bold wow fadeIn"
            data-wow-delay="0.2s"
          >
            Nouvelles du club
          </h1>

          <hr className="between-sections" />
          <div className="row pb-4 pt-3 wow fadeIn" data-wow-delay="0.4s">
            <div className="col-lg-3">
              <div className="view overlay mb-3 z-depth-1">
                <img
                  src="https://images.unsplash.com/photo-1531315396756-905d68d21b56?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1867&q=80 "
                  className="card-img-top"
                  alt="Post Image"
                />
                <div className="mask rgba-white-slight"></div>
              </div>
            </div>

            <div className="col-lg-9 add-margins-2">
              <h6 className="text-uppercase mb-3">
                <a href="#!" className="text-muted  font-weight-bold">
                  | 1 JUILLET 2019
                </a>
              </h6>
              <h4 className="font-weight-bold light-blue-text mb-3">
                Assemblé Général
              </h4>
              <p className="-3 font-thin" align="justify">
                Elle aura lieu le{" "}
                <span className="red-text">
                  vendredi 5 juillet 2019 à 19:00{" "}
                </span>{" "}
                au siège du Club 60 Avenue du Truc à Mérignac.
              </p>
              <ul>
                <u>Ordre du jour :</u>
                <li>Rapport Moral</li>
                <li>Rapport Sportif</li>
                <li>Rapport Financier</li>
              </ul>
            </div>
          </div>
          <hr className="between-sections mt-4 mb-4" />
          <div className="row pb-4 pt-3 wow fadeIn" data-wow-delay="0.4s">
            <div className="col-lg-3">
              <div className="view overlay mb-3 z-depth-1">
                <img
                  src="https://images.unsplash.com/photo-1551916389-5dec87bcc557?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1867&q=80"
                  className="card-img-top"
                  alt="Post Image"
                />
                <div className="mask rgba-white-slight"></div>
              </div>
            </div>

            <div className="col-lg-9 add-margins-2">
              <h6 className="text-uppercase mb-3">
                <a href="#!" className="text-muted  font-weight-bold">
                  | 1 SEPTEMBRE 2019
                </a>
              </h6>
              <h4 className="mb-3 font-weight-bold light-blue-text">
                Tournois Internes
              </h4>
              <ul>
                <li>
                  {" "}
                  <p className="-3 font-thin" align="justify">
                    <span className="red-text">
                      Qualificatif au trophée Perrier :
                    </span>{" "}
                    homologué, de mi Octobre à mi Décembre. Tournoi de simples,
                    réservé aux : non classés, 4ème série et 3ème série jusqu'à
                    15/4.
                  </p>
                </li>
                <li>
                  {" "}
                  <p className="-3 font-thin" align="justify">
                    <span className="red-text">
                      Tournoi interne par niveau de classement :
                    </span>{" "}
                    défis entre les adhérents du{" "}
                    <span className="light-blue-text">SAM</span>, au printemps.
                    Tournoi de simples, ouvert à tous les adhérents du Club
                    Jeunes et Adultes.
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <hr className="between-sections mt-4 mb-4" />
          <div className="row mb-3 pt-4 wow fadeIn" data-wow-delay="0.4s">
            <div className="col-lg-3">
              <div className="view overlay mb-3 z-depth-1">
                <img
                  src="https://images.unsplash.com/photo-1555160679-b1b58488f476?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2978&q=80"
                  className="img-fluid z-depth-1"
                  alt="Post Image"
                />
                <div className="mask rgba-white-slight"></div>
              </div>
            </div>

            <div className="col-lg-9 add-margins-2">
              <h6 className="text-uppercase mb-3">
                <a href="#!" className="text-muted  font-weight-bold pb-1">
                  | 1 AU 15 SEPTEMBRE 2019
                </a>
              </h6>
              <h4 className="mb-3 light-blue-text font-weight-bold pb-3">
                Tournois Open
              </h4>
              <ul>
                <li>
                  <p className="-3 font-thin" align="justify">
                    <span className="red-text">
                      Tournoi de Jeunes du SAM Tennis :
                    </span>{" "}
                    Durant la première quinzaine de Septembre [du 25 août au 8
                    Septembre 2018]. Tournoi de simples. Ouvert aux joueurs et
                    joueuses 9/10 ans 11/12 ans 13/14 ans et 15/16 ans avec
                    catégories suivant les âges.
                  </p>
                </li>
                <li>
                  <p className="-3 font-thin" align="justify">
                    <span className="red-text"> Bon Vivre :</span> les 2ème et
                    3ème semaine de Janvier [du 4 au 21 Janvier 2018]. Tournoi
                    de simples, réservé aux joueurs et joueuses de plus de 35
                    ans, de non classés à 4/6 avec catégories suivants les âges
                    : 35 SD, 35, 45, 55, 60, 65, 70, 75 ans SM.
                  </p>
                </li>
                <li>
                  <p className="-3 font-thin" align="justify">
                    <span className="red-text">Open du SAM Tennis </span> durant
                    les vacances scolaires de printemps. Tournoi de simples.
                    Ouverts à tous les joueurs et joueuses licenciés de non
                    classé à 1ère série.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <hr className="between-sections" />
        <section id="reservation" className="section mb-4">
          <CollapseReservation />
        </section>
        <hr className="between-sections" />
        <section id="inscription" className="section mb-4">
          <PillsInscription />
        </section>
        <hr className="between-sections" />
        <section id="contact" className="section mb-4">
          <h1 className="section-heading text-center mb-5 mt-5 pt-4 font-weight-bold wow fadeIn">
            Contact
          </h1>

          <div className="row wow fadeIn" data-wow-delay="0.4s">
            <div className="col-md-8 mb-5">
              <div
                id="map-container"
                className="rounded z-depth-1-half map-container"
                style={{ height: "400px" }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2828.6880590411947!2d-0.6553731!3d44.8482857!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd54d9de5a0ae29d%3A0xd3ff44c4b2680049!2sTennis%20Stade%20Robert%20Brettes!5e0!3m2!1sfr!2sfr!4v1568737210720!5m2!1sfr!2sfr"
                  title="This is a unique title"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  style={{ border: 0 }}
                />
              </div>
            </div>

            <div className="col-md-4 mt-5">
              <ul className="contact-icons list-unstyled text-center">
                <li>
                  <i
                    className="fas fa-map-marker-alt fa-2x"
                    style={{ color: `red` }}
                  ></i>
                  <p>60 Avenue du Truc, 33700 Mérignac</p>
                </li>

                <li>
                  <i
                    className="fas fa-phone fa-2x"
                    style={{ color: `blue` }}
                  ></i>
                  <p>
                    {" "}
                    <address>
                      <a href="tel:+330556974385" style={{ color: `black` }}>
                        05.56.97.43.85
                      </a>
                    </address>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>

      <div className="container-fluid py-5" style={{ background: `#b1bace` }}>
        <div className="flex-center">
          <ul className="list-unstyled">
            <li>
              <h3
                className="h3-responsive white-text mt-4 wow fadeIn"
                data-wow-delay="0.2s"
              >
                <i className="fas fa-quote-left" aria-hidden="true"></i> On
                gagne plus avec le coeur, avec la volonté qu'avec autre chose.{" "}
                <i className="fas fa-quote-right" aria-hidden="true"></i>
              </h3>
            </li>
            <li>
              <h4
                className="font-italic mt-4 white-text wow fadeIn"
                data-wow-delay="0.4s"
              >
                ~ Rafael Nadal
              </h4>
            </li>
          </ul>
        </div>
      </div>
    </main>
  </Layout>
)

export default IndexPage
