import React from "react"
import { MDBAnimation } from "mdbreact"
import Loisir from "./loisir"
import Competition from "./competition"
import Enseignement from "./enseignement"

const pillsPtractices = () => {
  return (
    <section id="practice" className="section">
      <MDBAnimation reveal type="fadeIn" delay="0.2s">
        <h1 className="section-heading text-center mb-5 mt-5 pt-4 font-weight-bold">
          Les pratiques
        </h1>
      </MDBAnimation>
      <MDBAnimation reveal type="fadeIn">
        <p className="text-center w-responsive mx-auto my-5 lead ">
          Le club <strong>SAM</strong>
          <strong> TENNIS</strong> offre la possibilité aux adhérents différents
          aspetcs de la pratiques du tennis de l'enseignement à la compétition
          en passant par le loisir .
        </p>
      </MDBAnimation>
      <Loisir />
      <Competition />
      <Enseignement />
    </section>
  )
}

export default pillsPtractices
