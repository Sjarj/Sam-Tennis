import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Practices from "../components/practices"
import Team from "../components/team"
import Prices from "../components/prices"
import Reservation from "../components/reservation"
import Inscription from "../components/inscription"
import Streack from "../components/streack"
import News from "../components/news"
import Contact from "../components/contact"
import CompetitionIndividuelles from "../components/competiton-individuelles"
import Installations from "../components/installation"
import Header from "../components/header"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <main>
      <Header />
      <Installations />
      <Streack />
      <div className="container">
        <Team />
        <hr className="between-sections" />
        <Practices />
      </div>
      <CompetitionIndividuelles />
      <div className="container">
        <Prices />
        <hr className="between-sections" />
        <News />
        <hr className="between-sections" />
        <Reservation />
        <hr className="between-sections" />
        <Inscription />
        <hr className="between-sections" />
        <Contact />
      </div>
    </main>
  </Layout>
)

export default IndexPage
