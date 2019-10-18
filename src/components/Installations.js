import React from "react"
import { MDBAnimation, MDBMask, MDBView } from "mdbreact"

const Installations = () => {
  return (
    <div className="container ">
      <section id="installations" className="section py-4">
        <MDBAnimation reveal type="fadeIn">
          <h1 className="section-heading text-center  my-5 font-weight-bold ">
            Nos installations
          </h1>
        </MDBAnimation>
        <MDBAnimation reveal type="fadeIn" delay="0.2s">
          <div className="row mb-5">
            <div className="col-lg-4">
              <MDBView>
                <img
                  src="https://images.unsplash.com/photo-1526307616774-60d0098f7642?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=472&w=711&q=60"
                  alt="court de tennis"
                  className="z-depth-1 img-fluid rounded"
                />
                <MDBMask overlay="pink-light" className="flex-center" />
              </MDBView>
            </div>

            <div className="col-lg-8 mb-2">
              <p className="lead  mb-2">
                Nos installations sportives sont sur 2 sites à Mérignac :
              </p>
              <p>
                <strong className="indigo-text">SITE DE ROBERT BRETTES</strong>{" "}
                : Un Club House ouvert 7 jrs / 7 jrs avec 8 Cours Extérieurs
                éclairés Quartier Pin Galant - Piscine - Stade :
                <div className="my-0">
                  2 Courts en Terre battue , 4 Courts en Quick, 1 Terrain de
                  Pétanque, 2 Courts en Soft Type de Terre battue, 3 Courts de
                  Mini-Tennis, 1 Table de Ping-Pong et Un Baby Foot.
                </div>
              </p>

              <p align="justify" className="mt-3  ">
                <strong className="indigo-text">SITE DE LA ROSERAIE </strong> :
                Les Cours Couverts de Tennis sont ouverts 7 jrs / 7 jrs à 2
                minutes en voiture du Stade Robert Brettes, au 23 Avenue du
                Château d'Eau - 33700 Mérignac Quartier Capeyron :
                <div className="my-0">
                  4 Courts Couverts en Terre battue, 1 Restaurant de 65
                  couverts, ouvert du Lundi au Samedi, midis et soirs, à prix
                  raisonnables.
                </div>
              </p>
            </div>
          </div>
        </MDBAnimation>
      </section>
    </div>
  )
}

export default Installations
