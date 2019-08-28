import React from "react"
import { MDBRow, MDBCol, MDBBadge } from "mdbreact"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PillsPractices from "../components/pillsPtractices"
import SliderTeam from "../components/sliderTeam"
import TabPrices from "../components/tabPrices"

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
                    <MDBBadge color="primary" pill>
                      2
                    </MDBBadge>{" "}
                    Courts en{" "}
                    <strong className="light-blue-text">Terre battue </strong>.
                  </div>
                  <div style={{ lineHeight: 1.8 }}>
                    <MDBBadge color="primary" pill>
                      4
                    </MDBBadge>{" "}
                    Courts en{" "}
                    <strong className="light-blue-text"> Quick </strong>.
                  </div>
                  <div style={{ lineHeight: 1.8 }}>
                    <MDBBadge color="primary" pill>
                      1
                    </MDBBadge>{" "}
                    Terrain de Pétanque .
                  </div>
                </MDBCol>
                <MDBCol size="6" className="my-2">
                  <div style={{ lineHeight: 1.8 }}>
                    <MDBBadge color="primary" pill>
                      2
                    </MDBBadge>{" "}
                    Courts en <strong className="light-blue-text">Soft </strong>{" "}
                    Type de Terre battue.
                  </div>
                  <div style={{ lineHeight: 1.8 }}>
                    <MDBBadge color="primary" pill>
                      3
                    </MDBBadge>{" "}
                    Courts de Mini-Tennis.
                  </div>
                  <div style={{ lineHeight: 1.8 }}>
                    <MDBBadge color="primary" pill>
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
                    <MDBBadge color="danger" pill>
                      4
                    </MDBBadge>{" "}
                    Courts <strong className="red-text">Couverts</strong> en{" "}
                    <strong className="red-text">Terre battue</strong>
                  </li>

                  <li>
                    <MDBBadge color="danger" pill>
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
            className="text-center w-responsive mx-auto wow fadeIn my-5"
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

          <p className="text-center w-responsive mx-auto wow fadeIn my-5">
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
          <h1
            className="section-heading text-center mb-5 mt-5 pt-4 font-weight-bold wow fadeIn"
            data-wow-delay="0.2s"
          >
            Tarifs
          </h1>

          <p className="text-center w-responsive mx-auto wow fadeIn my-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia iste
            provident, voluptatum voluptatibus aut modi aspernatur autem
            impedit, eius, debitis earum voluptatem. Quaerat hic aspernatur
            laborum magni earum. At, officiis!
          </p>

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
            News
          </h1>

          <hr className="between-sections" />
          <div className="row pb-4 pt-3 wow fadeIn" data-wow-delay="0.4s">
            <div className="col-lg-3">
              <div className="view overlay mb-3 z-depth-1">
                <img
                  src="https://mdbootstrap.com/img/Photos/Others/team1.jpg"
                  className="card-img-top"
                  alt="Post Image"
                />
                <div className="mask rgba-white-slight"></div>
              </div>
            </div>

            <div className="col-lg-9 add-margins-2">
              <h6 className="text-uppercase mb-3">
                <a href="#!" className="text-muted  font-weight-bold">
                  | 23 MAY 2017
                </a>
              </h6>
              <h4 className="mb-3">
                <a href="#!" className="teal-text font-weight-bold">
                  This is title of the news
                </a>
              </h4>
              <p className="-3 font-thin" align="justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.
              </p>
            </div>
          </div>
          <hr className="between-sections mt-4 mb-4" />
          <div className="row pb-4 pt-3 wow fadeIn" data-wow-delay="0.4s">
            <div className="col-lg-3">
              <div className="view overlay mb-3 z-depth-1">
                <img
                  src="https://mdbootstrap.com/img/Photos/Others/team2.jpg"
                  className="card-img-top"
                  alt="Post Image"
                />
                <div className="mask rgba-white-slight"></div>
              </div>
            </div>

            <div className="col-lg-9 add-margins-2">
              <h6 className="text-uppercase mb-3">
                <a href="#!" className="text-muted  font-weight-bold">
                  | 23 MAY 2017
                </a>
              </h6>
              <h4 className="mb-3">
                <a href="#!" className="teal-text font-weight-bold">
                  This is title of the news
                </a>
              </h4>
              <p className="-3 font-thin" align="justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.
              </p>
            </div>
          </div>
          <hr className="between-sections mt-4 mb-4" />
          <div className="row mb-3 pt-4 wow fadeIn" data-wow-delay="0.4s">
            <div className="col-lg-3">
              <div className="view overlay mb-3 z-depth-1">
                <img
                  src="https://mdbootstrap.com/img/Photos/Others/team3.jpg"
                  className="img-fluid z-depth-1"
                  alt="Post Image"
                />
                <div className="mask rgba-white-slight"></div>
              </div>
            </div>

            <div className="col-lg-9 add-margins-2">
              <h6 className="text-uppercase mb-3">
                <a href="#!" className="text-muted  font-weight-bold pb-1">
                  | 31 JUN 2017
                </a>
              </h6>
              <h4 className="mb-3">
                <a href="#!" className="teal-text font-weight-bold pb-3">
                  This is title of the news
                </a>
              </h4>
              <p className="-3 font-thin" align="justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident.
              </p>
            </div>
          </div>
        </section>

        <hr className="between-sections" />

        <section id="contact" className="section mb-4">
          <h1 className="section-heading text-center mb-5 mt-5 pt-4 font-weight-bold wow fadeIn">
            Contact us
          </h1>

          <p
            className="text-center w-responsive mx-auto mb-5 wow fadeIn"
            data-wow-delay="0.2s"
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
            error amet numquam iure provident voluptate esse quasi, veritatis
            totam voluptas nostrum quisquam eum porro a pariatur accusamus
            veniam.{" "}
          </p>

          <div className="row wow fadeIn" data-wow-delay="0.4s">
            <div className="col-md-8 mb-5">
              <form>
                <div className="row">
                  <div className="col-md-6">
                    <div className="md-form mb-0">
                      <div className="md-form mb-0">
                        <input
                          type="text"
                          id="form41"
                          className="form-control"
                        />
                        <label htmlFor="form41" className="">
                          Your name
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="md-form mb-0">
                      <div className="md-form mb-0">
                        <input
                          type="text"
                          id="form52"
                          className="form-control"
                        />
                        <label htmlFor="form52" className="">
                          Your email
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12">
                    <div className="md-form mb-0">
                      <input type="text" id="form51" className="form-control" />
                      <label htmlFor="form51" className="">
                        Subject
                      </label>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12">
                    <div className="md-form mb-0">
                      <textarea
                        type="text"
                        id="form76"
                        className="md-textarea form-control"
                        rows="3"
                      ></textarea>
                      <label htmlFor="form76">Your message</label>
                    </div>
                  </div>
                </div>
              </form>

              <div className="text-center text-md-left mt-4">
                <a className="btn btn-primary">Send</a>
              </div>
            </div>

            <div className="col-md-4">
              <ul className="contact-icons list-unstyled text-center">
                <li>
                  <i className="fas fa-map-marker-alt fa-2x"></i>
                  <p>New York, NY 10012, USA</p>
                </li>

                <li>
                  <i className="fas fa-phone fa-2x"></i>
                  <p>+ 01 234 567 89</p>
                </li>

                <li>
                  <i className="fas fa-envelope fa-2x"></i>
                  <p>contact@mdbootstrap.com</p>
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
                <i className="fas fa-quote-left" aria-hidden="true"></i> When
                people succeed, it is because of hard work. Luck has nothing to
                do with success.{" "}
                <i className="fas fa-quote-right" aria-hidden="true"></i>
              </h3>
            </li>
            <li>
              <h4
                className="font-italic mt-4 white-text wow fadeIn"
                data-wow-delay="0.4s"
              >
                ~ Diego Maradona
              </h4>
            </li>
          </ul>
        </div>
      </div>
    </main>
  </Layout>
)

export default IndexPage
