import React from "react"
import IllustrationTennisMan from "../images/tennis_man.png"
import { MDBAnimation } from "mdbreact"

const Loisir = () => {
  return (
    <>
      <MDBAnimation reveal type="fadeIn" delay="0.2s">
        <h5 className="text-center dark-text-uppercase font-weight-bold spacing my-5 py-4">
          <strong id="loisir"> Loisir</strong>
        </h5>
      </MDBAnimation>
      <div className="row">
        <div className="col-md-5">
          <MDBAnimation reveal type="fadeIn" delay="0.4s">
            <img
              src={IllustrationTennisMan}
              className="w-100"
              alt="tennis girl"
            />
          </MDBAnimation>
        </div>
        <div className="col-md-6 ml-lg-5 justify-content-left">
          <MDBAnimation reveal type="fadeIn" delay="0.4s">
            <hr className="line" />

            <h5
              className="text-left dark- text-center font-weight-bold pb-4 wow fadeIn"
              data-wow-delay="0.2s"
            >
              <em>
                <strong>
                  {" "}
                  LA RÉSERVATION DES COURTS EXTÉRIEURS COMME DES COURTS
                  COUVERTS, S'EFFECTUE LA VEILLE OU LE JOUR MÊME :
                </strong>
              </em>
            </h5>

            <ul style={{ listStyle: `none` }} className="blue-">
              <li> Sur place au Club House</li>
              <li>
                Par téléphone au :{" "}
                <a href="tel:+330556974385" className="indigo-text">
                  05.56.97.43.85
                </a>{" "}
              </li>
              <li> Par internet , voir la page RESERVATION</li>
            </ul>
            <p className="">
              Nos courts extérieurs sont disponibles pour du Loisir chaque jour
              toute la journée{" "}
              <strong>
                sauf les terres battues indisponibles du début de la période de
                gel jusqu'à leur réfection au printemps
              </strong>
              .
            </p>
            <p className="">
              Nos courts couverts compte tenu de l'école de tennis des courts
              collectifs adultes et jeunes sont disponibles pour le loisir
              suivant des créneaux différents en période et hors période
              scolaire.
            </p>
            <p className="">
              Si vous voulez jouer mais n'avez pas de partenaire, Marie Hélène
              et Virginie vous en trouvent un et nous sommes en train de
              constituer un classeur des membres du Club consultable librement
              par tous <strong>classement par sexe et par niveau de jeu</strong>
              .
            </p>
          </MDBAnimation>
        </div>
      </div>
    </>
  )
}

export default Loisir
