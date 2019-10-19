import React from "react"
import { MDBBtn } from "mdbreact"

const CompetitionIndividuelles = () => {
  return (
    <div
      className="streak streak-photo streak-long-2 rgba-gradient"
      style={{
        backgroundImage: `${`url('https://images.unsplash.com/photo-1541744573515-478c959628a0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80')`}`,
      }}
    >
      <div class="flex-center  rgba-pink-strong mask">
        <div class="container">
          <h3
            class="text-center pb-4 white-text font-weight-bold wow fadeIn h3-responsive"
            data-wow-delay="0.2s"
          >
            <strong>Compétion Individuelle</strong>
          </h3>

          <h5
            className="white-text text-center font-weight-bold pb-4 wow fadeIn h5-responsive"
            data-wow-delay="0.2s"
          >
            <em>
              <strong>
                Pour faire votre choix, nous vous donnons les liens suivants :
              </strong>
            </em>
          </h5>
          <div class="row text-center">
            <div class="col-md-4 my-2">
              <h4 class="white-text mb-1 font-weight-bold h4-responsive">
                Ligue de Guyenne de Tennis
              </h4>
              <p class="white-text font-weight-bolder">
                Le but La ligue de Guyenne est d'organiser et de développer la
                pratique du tennis sur son territoire
              </p>
              <MDBBtn rounded outline color="white" className="mt-3">
                Aller sur le site
              </MDBBtn>
            </div>

            <div class="col-md-4 my-2">
              <h4 class="white-text mb-1 font-weight-bold h4-responsive">
                Comité Départemental de Gironde
              </h4>
              <p class="white-text font-weight-bolder">
                Retrouvez toutes les informations sur l'organisation du Tennis
                en Gironde.
              </p>
              <MDBBtn rounded outline color="white" className="mt-4">
                Aller sur le site
              </MDBBtn>
            </div>

            <div class="col-md-4 my-2">
              <h4 class="white-text mb-1 font-weight-bold h4-responsive">
                Fédération Française de Tennis
              </h4>
              <p class="white-text font-weight-bolder">
                Retrouvez toute l'actualité du tennis sur le site de la
                Fédération française de Tennis.
              </p>
              <MDBBtn rounded outline color="white" className="mt-3">
                Aller sur le site
              </MDBBtn>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CompetitionIndividuelles
