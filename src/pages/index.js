import React from "react"
import { MDBRow, MDBCol, MDBBadge, MDBAnimation } from "mdbreact"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PillsPractices from "../components/pillsPtractices"
import SliderTeam from "../components/sliderTeam"
import TabPrices from "../components/tabPrices"
import CollapseReservation from "../components/collapseReservetion"
import PillsInscription from "../components/pillsInscription"
import Header from "../components/header"
import Installations from "../components/Installations"
import Streack from "../components/streack"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Header />
    <main>
      <Installations />
      <Streack />
      <div className="container">
        <SliderTeam />

        <hr className="between-sections" />

        <PillsPractices />

        <hr className="between-sections" />

        <TabPrices />

        <hr className="between-sections" />

        <section id="news" className="section news-section">
          <MDBAnimation reveal type="fadeIn" delay="0.2s">
            <h1 className="section-heading text-center mb-5 mt-5 pt-4 font-weight-bold">
              Nouvelles du club
            </h1>
          </MDBAnimation>
          <hr className="between-sections" />
          <MDBAnimation reveal type="fadeIn" delay="0.4s">
            <div className="row pb-4 pt-3">
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
          </MDBAnimation>
          <hr className="between-sections mt-4 mb-4" />
          <MDBAnimation reveal type="fadeIn" delay="0.4s">
            <div className="row pb-4 pt-3 ">
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
                      homologué, de mi Octobre à mi Décembre. Tournoi de
                      simples, réservé aux : non classés, 4ème série et 3ème
                      série jusqu'à 15/4.
                    </p>
                  </li>
                  <li>
                    {" "}
                    <p className="-3 font-thin" align="justify">
                      <span className="red-text">
                        Tournoi interne par niveau de classement :
                      </span>{" "}
                      défis entre les adhérents du{" "}
                      <span className="light-blue-text">SAM</span>, au
                      printemps. Tournoi de simples, ouvert à tous les adhérents
                      du Club Jeunes et Adultes.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </MDBAnimation>
          <hr className="between-sections mt-4 mb-4" />
          <MDBAnimation reveal type="fadeIn" delay="0.4s">
            <div className="row mb-3 pt-4">
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
                      ans, de non classés à 4/6 avec catégories suivants les
                      âges : 35 SD, 35, 45, 55, 60, 65, 70, 75 ans SM.
                    </p>
                  </li>
                  <li>
                    <p className="-3 font-thin" align="justify">
                      <span className="red-text">Open du SAM Tennis </span>{" "}
                      durant les vacances scolaires de printemps. Tournoi de
                      simples. Ouverts à tous les joueurs et joueuses licenciés
                      de non classé à 1ère série.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </MDBAnimation>
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
          <MDBAnimation reveal type="fadeIn">
            <h1 className="section-heading text-center mb-5 mt-5 pt-4 font-weight-bold">
              Contact
            </h1>
          </MDBAnimation>
          <MDBAnimation reveal type="fadeIn" delay="0.4s">
            <div className="row">
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
                      <a href="tel:+330556974385" style={{ color: `black` }}>
                        05.56.97.43.85
                      </a>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </MDBAnimation>
        </section>
      </div>

      <div className="container-fluid py-5" style={{ background: `#b1bace` }}>
        <div className="flex-center">
          <ul className="list-unstyled">
            <li>
              <MDBAnimation reveal type="fadeIn" delay="0.2s">
                <h3 className="h3-responsive white-text mt-4">
                  <i className="fas fa-quote-left" aria-hidden="true"></i> On
                  gagne plus avec le coeur, avec la volonté qu'avec autre chose.{" "}
                  <i className="fas fa-quote-right" aria-hidden="true"></i>
                </h3>
              </MDBAnimation>
            </li>
            <li>
              <MDBAnimation reveal type="fadeIn" delay="0.2s">
                <h4 className="font-italic mt-4 white-text">~ Rafael Nadal</h4>
              </MDBAnimation>
            </li>
          </ul>
        </div>
      </div>
    </main>
  </Layout>
)

export default IndexPage
