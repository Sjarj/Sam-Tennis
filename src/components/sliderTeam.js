import React from "react"
import {
  MDBAnimation,
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBContainer,
  MDBRow,
} from "mdbreact"

const SliderTeam = () => {
  return (
    <section id="team" className="section team-section pt-3">
      <MDBAnimation reveal type="fadeIn">
        <h1 className="section-heading text-center mb-5 mt-5 pt-4 font-weight-bold">
          Notre équipe
        </h1>
      </MDBAnimation>
      <MDBAnimation reveal type="fadeIn" delay="0.2s">
        <p className="text-center w-responsive mx-auto  my-5 lead  ">
          Est composée d'un comité directeur, d'administratifs ayant en charge
          l'accueil de nos adhérents pour les inscriptions, la réservation et la
          pratique de nos différentes activités. Des Techniciens ayant en charge
          l'enseignement du Tennis à tous les niveaux et, l'entrainement et
          l'encadrement de nos compétiteurs individuels et de nos équipes :
        </p>
      </MDBAnimation>
      <MDBAnimation reveal type="fadeIn" delay="0.4s">
        <div className="row text-center">
          <MDBContainer>
            <MDBCarousel
              activeItem={1}
              length={3}
              slide={true}
              showControls={true}
              showIndicators={false}
              interval={10000}
              multiItem
            >
              <MDBCarouselInner>
                <MDBRow>
                  <MDBCarouselItem itemId="1">
                    <div className="col-md-4 mb-5 ">
                      <div className="avatar mx-auto mb-4">
                        <img
                          src="https://mdbootstrap.com/img/Photos/Avatars/img%20(3).jpg"
                          className="z-depth-1 img-fluid"
                          alt="Philippe BANOS Président"
                        />
                      </div>
                      <h4>Philippe BANOS</h4>
                      <h5>Président</h5>
                    </div>

                    <div className="col-md-4 mb-5 ">
                      <div className="avatar mx-auto mb-4">
                        <img
                          src="https://mdbootstrap.com/img/Photos/Avatars/img%20(2).jpg"
                          className="z-depth-1 img-fluid"
                          alt="Catherine TOULOUSE Trésorière"
                        />
                      </div>
                      <h4>Catherine TOULOUSE</h4>
                      <h5>Trésorière</h5>
                    </div>

                    <div className="col-md-4 mb-5 ">
                      <div className="avatar mx-auto mb-4">
                        <img
                          src="https://mdbootstrap.com/img/Photos/Avatars/img%20(4).jpg"
                          className="z-depth-1 img-fluid"
                          alt="Stéphanie THOMAS Secrétaire"
                        />
                      </div>
                      <h4>Stéphanie THOMAS</h4>
                      <h5>Secrétaire</h5>
                    </div>
                  </MDBCarouselItem>
                  <MDBCarouselItem itemId="2">
                    <div className="col-md-4 mb-5 ">
                      <div className="avatar mx-auto mb-4">
                        <img
                          src="https://mdbootstrap.com/img/Photos/Avatars/img%20(6).jpg"
                          className="z-depth-1 img-fluid"
                          alt="Virginie CLERMONTEL Administratifs"
                        />
                      </div>
                      <h4> Virginie CLERMONTEL</h4>
                      <h5>Administratifs</h5>
                    </div>
                    <div className="col-md-4 mb-5 ">
                      <div className="avatar mx-auto mb-4">
                        <img
                          src="https://mdbootstrap.com/img/Photos/Avatars/img%20(7).jpg"
                          className="z-depth-1 img-fluid"
                          alt="Marie-Hélène DROUET Administratifs"
                        />
                      </div>
                      <h4>Marie-Hélène DROUET </h4>
                      <h5>Administratifs</h5>
                    </div>
                    <div className="col-md-4 mb-5 ">
                      <div className="avatar mx-auto mb-4">
                        <img
                          src="https://mdbootstrap.com/img/Photos/Avatars/img%20(9).jpg"
                          className="z-depth-1 img-fluid"
                          alt="Michel PONTICO Directeur Sportif"
                        />
                      </div>
                      <h4> Michel PONTICO </h4>
                      <h5>Directeur Sportif</h5>
                      <a href="tel:+330619644906"> 06.19.64.49.06</a>
                    </div>
                  </MDBCarouselItem>
                  <MDBCarouselItem itemId="3">
                    <div className="col-md-4 mb-5 ">
                      <div className="avatar mx-auto mb-4">
                        <img
                          src="https://mdbootstrap.com/img/Photos/Avatars/img%20(3).jpg"
                          className="z-depth-1 img-fluid"
                          alt="Luc FINOËL Coach sportif"
                        />
                      </div>
                      <h4> Luc FINOËL</h4>
                      <h5>Coach sportif</h5>
                      <a href="tel:+330683449647">06.83.44.96.47</a>
                    </div>
                    <div className="col-md-4 mb-5 ">
                      <div className="avatar mx-auto mb-4">
                        <img
                          src="https://mdbootstrap.com/img/Photos/Avatars/img%20(8).jpg"
                          className="z-depth-1 img-fluid"
                          alt="Benjamin CATTAN Coach sportif"
                        />
                      </div>
                      <h4>Benjamin CATTAN</h4>
                      <h5>Coach sportif</h5>
                      <a href="tel:+330659361976">06.59.36.19.76</a>
                    </div>
                    <div className="col-md-4 mb-5 ">
                      <div className="avatar mx-auto mb-4">
                        <img
                          src="https://mdbootstrap.com/img/Photos/Avatars/img%20(10).jpg"
                          className="z-depth-1 img-fluid"
                          alt="Mélissa LIGNE Coach sportif"
                        />
                      </div>
                      <h4>Mélissa LIGNE</h4>
                      <h5>Coach sportif</h5>
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

export default SliderTeam
