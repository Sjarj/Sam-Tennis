import React from "react"
import { MDBAnimation, MDBRow, MDBCol, MDBBadge } from "mdbreact"

const Installations = () => {
  return (
    <div className="container ">
      <section id="installations" className="section py-4">
        <MDBAnimation reveal type="fadeIn">
          <h1 className="section-heading text-center mb-5 my-5 mb-4 font-weight-bold ">
            Nos installations
          </h1>
        </MDBAnimation>
        <MDBAnimation reveal type="fadeIn" delay="0.2s">
          <div className="row mb-5">
            <div className="col-lg-4 mb-2">
              <img
                src="https://images.unsplash.com/photo-1526307616774-60d0098f7642?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=472&w=711&q=60"
                alt="court de tennis"
                className="z-depth-1 img-fluid"
              />
            </div>

            <div className="col-lg-8 mb-2">
              <p className="lead grey-text font-weight-bolder mb-4">
                Nos installations sportives sont sur 2 sites à Mérignac :
              </p>
              <p align="justify" className="grey-text font-weight-bolder">
                <strong className="light-blue-text">
                  SITE DE ROBERT BRETTES
                </strong>{" "}
                : Un Club House ouvert 7 jrs / 7 jrs avec 8 Cours Extérieurs
                éclairés Quartier Pin Galant - Piscine - Stade :
              </p>
              <MDBRow>
                <MDBCol size="6" className="my-2 grey-text font-weight-bolder">
                  <div style={{ lineHeight: 1.8 }}>
                    <MDBBadge color="primary" pill className="mr-2">
                      2
                    </MDBBadge>{" "}
                    Courts en Terre battue .
                  </div>
                  <div style={{ lineHeight: 1.8 }}>
                    <MDBBadge color="primary" pill className="mr-2">
                      4
                    </MDBBadge>{" "}
                    Courts en Quick
                  </div>
                  <div style={{ lineHeight: 1.8 }}>
                    <MDBBadge color="primary" pill className="mr-2">
                      1
                    </MDBBadge>{" "}
                    Terrain de Pétanque .
                  </div>
                </MDBCol>
                <MDBCol size="6" className="my-2 grey-text font-weight-bolder">
                  <div style={{ lineHeight: 1.8 }}>
                    <MDBBadge color="primary" pill className="mr-2">
                      2
                    </MDBBadge>{" "}
                    Courts en Soft Type de Terre battue.
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

              <p align="justify" className="mt-3 grey-text font-weight-bolder ">
                <strong className="red-text">SITE DE LA ROSERAIE </strong> : Les
                Cours Couverts de Tennis sont ouverts 7 jrs / 7 jrs à 2 minutes
                en voiture du Stade Robert Brettes, au 23 Avenue du Château
                d'Eau - 33700 Mérignac Quartier Capeyron :
                <div className="my-3">
                  <div style={{ lineHeight: 1.8 }}>
                    <MDBBadge color="danger" pill className="mr-2">
                      4
                    </MDBBadge>{" "}
                    Courts Couverts en Terre battue
                  </div>
                  <div style={{ lineHeight: 1.8 }}>
                    <MDBBadge color="danger" pill className="mr-2">
                      1
                    </MDBBadge>{" "}
                    Restaurant de 65 couverts, ouvert du Lundi au Samedi, midis
                    et soirs, à prix raisonnables.
                  </div>
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
