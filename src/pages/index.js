import React from "react"
import { MDBContainer, MDBRow, MDBCol } from "mdbreact"
import Layout from "../components/layout"
import SEO from "../components/seo"
import CarouselPage from "../components/carousel"
import Inscription from "../components/inscription"
import BalleJaune from "../components/balle-jaune"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <CarouselPage />
    <MDBContainer>
      <h2 className="m-5 text-center h2-responsive">
        {" "}
        Bonjour et Bienvenue sur le Site du{" "}
        <span className="blue-text">SAM </span>
        <span className="red-text">TENNIS </span>!
      </h2>
      <p>
        Le <span className="blue-text">SAM</span>{" "}
        <span className="red-text"> Tennis</span> est l'une des 28 sections
        sportives du <strong>SAM OMNISPORTS</strong>. Il compte de l'ordre de
        545 licenciés dont 300 ont moins de 18 ans. Ses installations sportives
        sont sur 2 sites à Mérignac :
        <ul className="mt-4 ">
          <li>
            L'un au 60 Avenue du Truc /{" "}
            <span className="blue-text">
              8 courts extérieurs éclairés + 3 cours de Mini-Tennis
            </span>
          </li>
          <li>
            L'autre au 23 Avenue du Château d'Eau /{" "}
            <span className="red-text"> 4 courts couverts </span>
          </li>
        </ul>
      </p>
    </MDBContainer>
    <MDBContainer>
      <MDBRow>
        <MDBCol lg="6">
          <Inscription />
        </MDBCol>
        <MDBCol lg="6">
          <BalleJaune />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  </Layout>
)

export default IndexPage
