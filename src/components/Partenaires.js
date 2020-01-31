import React from "react"
import {
  MDBAnimation,
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBContainer,
  MDBRow,
} from "mdbreact"
import photoMerignac from "../images/photoMerignac.jpeg"
import photoConseilGeneral from "../images/photoConseilGeneral.jpeg"
import photoComiteGironde from "../images/photoComiteGironde.jpeg"
import photoLigueGuyenne from "../images/photoLigueGuyenne.jpeg"
import photoFFT from "../images/photoFFT.jpeg"
import photoSetEtMatch from "../images/photoSetEtMatch.png"
import photoBadolat from "../images/photoBadolat.png"
import photoAquitaine from "../images/photoAquitaine.png"
import photoKCreation from "../images/photoKCreation.png"

const Partenaires = () => {
  return (
    <section className="section team-section pt-4">
      <MDBAnimation reveal type="fadeIn">
        <h1
          className="section-heading text-center mb-5 mt-5 pt-4 font-weight-bold"
          id="partenaires"
        >
          Nos Partenaires
        </h1>
      </MDBAnimation>
      <MDBAnimation reveal type="fadeIn" delay="0.2s">
        <p className="text-center w-responsive mx-auto  my-5 lead  ">
          DEVENEZ PARTENAIRES DU SAM ET BÉNÉFICIER D'UNE RÉDUCTION D'IMPOT
        </p>
      </MDBAnimation>
      <MDBAnimation reveal type="fadeIn" delay="0.4s">
        <div className="row text-center">
          <MDBContainer>
            <MDBCarousel
              activeItem={1}
              length={3}
              slide={true}
              showControls={false}
              showIndicators={false}
              interval={10000}
              multiItem
            >
              <MDBCarouselInner>
                <MDBRow>
                  <MDBCarouselItem itemId="1">
                    <div className="col-md-4 mb-5">
                      <div className="avatar mx-auto mb-4">
                        <img
                          src={photoMerignac}
                          className="z-depth-1 img-fluid rounded"
                          alt="Ville de Mérignac"
                        />
                      </div>
                    </div>

                    <div className="col-md-4 mb-5">
                      <div
                        className="avatar mx-auto mb-4"
                        style={{ minHeight: `190px` }}
                      >
                        <img
                          src={photoConseilGeneral}
                          className="z-depth-1 img-fluid rounded"
                          alt="Conseil général de la Gironde"
                        />
                      </div>
                    </div>

                    <div className="col-md-4 mb-5">
                      <div className="avatar mx-auto mb-4">
                        <img
                          src={photoComiteGironde}
                          className="z-depth-1 img-fluid rounded"
                          alt="Comité de la Gironde"
                        />
                      </div>
                    </div>
                  </MDBCarouselItem>
                  <MDBCarouselItem itemId="2">
                    <div className="col-md-4 mb-5">
                      <div className="avatar mx-auto mb-4">
                        <img src={photoLigueGuyenne} alt="Ligue de Guyenne" />
                      </div>
                    </div>
                    <div className="col-md-4 mb-5">
                      <div className="avatar mx-auto mb-4">
                        <img
                          src={photoFFT}
                          className="z-depth-1 img-fluid rounded"
                          alt="Fédération Française de Tennis"
                        />
                      </div>
                    </div>
                    <div className="col-md-4 mb-5">
                      <div className="avatar mx-auto mb-4">
                        <img
                          src={photoSetEtMatch}
                          className="z-depth-1 img-fluid rounded"
                          alt="Set et match magazin articles de sport"
                        />
                      </div>
                    </div>
                  </MDBCarouselItem>
                  <MDBCarouselItem itemId="3">
                    <div className="col-md-4 mb-5">
                      <div className="avatar mx-auto mb-4">
                        <img
                          src={photoBadolat}
                          className="z-depth-1 img-fluid rounded"
                          alt="Badolat équipement tennis"
                        />
                      </div>
                    </div>
                    <div className="col-md-4 mb-5">
                      <div className="avatar mx-auto mb-4">
                        <img
                          src={photoAquitaine}
                          className="z-depth-1 img-fluid rounded"
                          alt="Region Nouvelle Aquitaine"
                          style={{ minHeight: `12.5rem` }}
                        />
                      </div>
                    </div>
                    <div className="col-md-4 mb-5">
                      <div className="avatar mx-auto mb-4">
                        <img
                          src={photoKCreation}
                          className="z-depth-1 img-fluid rounded"
                          alt="K1000 création conception web"
                        />
                      </div>
                    </div>
                  </MDBCarouselItem>
                </MDBRow>
              </MDBCarouselInner>
            </MDBCarousel>
          </MDBContainer>
        </div>
      </MDBAnimation>
    </section>
  )
}

export default Partenaires
