import React from "react"
import { MDBAnimation } from "mdbreact"
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
import News from "../components/news"

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
        <News />
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
