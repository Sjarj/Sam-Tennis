import React from "react"
import { MDBBtn, MDBAnimation } from "mdbreact"

const CompetitionIndividuelles = () => {
  return (
    <div
      className="streak streak-photo streak-long-2 rgba-gradient"
      style={{
        backgroundImage: `${`url('https://images.unsplash.com/photo-1541744573515-478c959628a0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80')`}`,
      }}
    >
      <div className="flex-center  rgba-pink-strong mask">
        <div className="container">
          <MDBAnimation reveal type="fadeIn" delay="0.2">
            <h3
              className="text-center pb-4 white-text font-weight-bold wow fadeIn h3-responsive"
              data-wow-delay="0.2s"
            >
              <strong>Compétion Individuelle</strong>
            </h3>
          </MDBAnimation>
          <MDBAnimation reveal type="fadeIn" delay="0.4">
            <h6
              className="white-text text-center font-weight-bold pb-4 wow fadeIn h6-responsive"
              data-wow-delay="0.2s"
            >
              <em>
                <strong>
                  Pour faire votre choix, nous vous donnons les liens suivants :
                </strong>
              </em>
            </h6>
          </MDBAnimation>
          <div className="row text-center">
            <div className="col-md-4 my-2">
              <MDBAnimation reveal type="fadeIn" delay="0.6">
                <h4 className="white-text mb-1 font-weight-bold h4-responsive">
                  LIGUE DE NOUVELLE AQUITAINE DE TENNIS
                </h4>
                <MDBBtn
                  rounded
                  outline
                  color="white"
                  className="mt-3"
                  href="http://www.ligue.fft.fr/nouvelle-aquitaine/nouvelle-aquitaine_a/cms/index_public.php?us_action=show_note_site&login_off=1&ui_id_site=1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Aller sur le site
                </MDBBtn>
              </MDBAnimation>
            </div>
            <div className="col-md-4 my-2">
              <MDBAnimation reveal type="fadeIn" delay="0.6">
                <h4 className="white-text mb-1 font-weight-bold h4-responsive">
                  COMITÉ DÉPARTEMENTAL DE GIRONDE
                </h4>
                <MDBBtn
                  rounded
                  outline
                  color="white"
                  className="mt-4"
                  href="http://www.comite.fft.fr/gironde/gironde_a/cms/index_public.php?us_action=show_note_site&login_off=1&ui_id_site=1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Aller sur le site
                </MDBBtn>
              </MDBAnimation>
            </div>
            <div className="col-md-4 my-2">
              <MDBAnimation reveal type="fadeIn" delay="0.6">
                <h4 className="white-text mb-1 font-weight-bold h4-responsive">
                  FÉDÉRATION FRANÇAISE DE TENNIS
                </h4>

                <MDBBtn
                  rounded
                  outline
                  color="white"
                  className="mt-3"
                  href="https://www.fft.fr"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Aller sur le site
                </MDBBtn>
              </MDBAnimation>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CompetitionIndividuelles
