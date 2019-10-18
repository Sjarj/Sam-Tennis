import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Practices from "../components/practices"
import SliderTeam from "../components/sliderTeam"
import Prices from "../components/prices"
import CollapseReservation from "../components/collapseReservetion"
import PillsInscription from "../components/pillsInscription"
import Installations from "../components/Installations"
import Streack from "../components/streack"
import News from "../components/news"
import Contact from "../components/contact"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <main>
      <Installations />
      <Streack />
      <div className="container">
        <SliderTeam />
        <hr className="between-sections" />
        <Practices />
        <hr className="between-sections" />
        <Prices />
        <hr className="between-sections" />
        <News />
        <hr className="between-sections" />
        <CollapseReservation />
        <hr className="between-sections" />
        <PillsInscription />
        <hr className="between-sections" />
        <Contact />
      </div>
    </main>
  </Layout>
)

export default IndexPage
