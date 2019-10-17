import React from "react"
import {
  MDBCard,
  MDBCardTitle,
  MDBBtn,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdbreact"

const Competition = () => {
  return (
    <>
      <h5
        className="text-center dark-grey-text text-uppercase font-weight-bold spacing my-5 py-4 wow fadeIn"
        data-wow-delay="0.2s"
      >
        <strong>Compétitions par équipes</strong>
      </h5>

      <div className="row">
        <div className="col-md-5  justify-content-left">
          <hr className="line" />

          <h5
            className="text-left dark-grey-text text-center font-weight-bold pb-4 wow fadeIn"
            data-wow-delay="0.2s"
          >
            <em>
              <strong>
                Tous les adhérents de notre Club qui le souhaitent ont la
                possibilité de participer à des compétitions correspondant à
                leur niveau.
              </strong>
            </em>
          </h5>

          <ul style={{ listStyle: `none` }} className="blue-grey-text">
            <li> Equipe Fanion Hommes en Nationale 4</li>
            <li>Equipe Fanion Dames en DSR.</li>
            <li>
              {" "}
              3 équipes Féminines et 5 équipes Masculines en Interclubs de
              Printemps.
            </li>
            <li className="mt-3">
              Équipes Masculines 3ème et 4ème Série en Championnat de Gironde.
            </li>
            <li>
              Équipes Messieurs [35, 45, 55, 65 ans] en Interclubs régionaux.
            </li>
            <li>Équipes féminines 4ème série dans Les Raquettes F.F.T.</li>
            <li className="mt-3">
              Équipes de Jeunes garçons et filles dans toutes les catégories
              d'âges de 9/10 11/12 13/14 et 15/16 ans, dans les différentes
              compétitions départementales et régionales.
            </li>
          </ul>
        </div>
        <div className="col-md-7">
          <div className="view ">
            <img
              src="https://mdbootstrap.com/img/illustrations/undraw_grand_slam_0q5r.svg"
              className="w-100"
              alt="tennis girl"
            />
          </div>
        </div>
      </div>
      {/* COMPETITION INDIVIDUELLE */}
      <h5
        className="text-center dark-grey-text text-uppercase font-weight-bold spacing my-5 py-4 wow fadeIn"
        data-wow-delay="0.2s"
      >
        <strong>Compétion Individuelle</strong>
      </h5>
      <div className="row">
        <div className="col-md-12  justify-content-left">
          <hr className="line" />
          <h5
            className="dark-grey-text text-center font-weight-bold pb-4 wow fadeIn"
            data-wow-delay="0.2s"
          >
            <em>
              <strong>
                Pour faire votre choix, nous vous donnons les liens suivants :
              </strong>
            </em>
          </h5>
          <MDBRow>
            <MDBCol md="4" className="my-3">
              <MDBCard
                className="card-image"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1485908953667-cf6d88997642?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=80')",
                }}
              >
                <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4">
                  <div>
                    <h5 className="pink-text">
                      <MDBIcon icon="table-tennis" /> Ligue F.F.T
                    </h5>
                    <MDBCardTitle tag="h3" className="pt-2">
                      <strong> Ligue de Guyenne de Tennis</strong>
                    </MDBCardTitle>
                    <p>
                      Le but La ligue de Guyenne est d'organiser et de
                      développer la pratique du tennis sur son territoire ainsi
                      que d'encourager et de coordonner les activités des clubs.
                    </p>
                    <MDBBtn
                      color="pink"
                      href="https://www.fft.fr"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MDBIcon icon="clone left" /> Aller sur le site
                    </MDBBtn>
                  </div>
                </div>
              </MDBCard>
            </MDBCol>

            <MDBCol md="4" className="my-3">
              <MDBCard
                className="card-image"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1542144582-1ba00456b5e3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1313&q=80')",
                }}
              >
                <div className="text-white text-center d-flex align-items-center rgba-indigo-strong py-5 px-4">
                  <div>
                    <h5 className="orange-text">
                      <MDBIcon icon="baseball-ball" /> Comité F.F.T
                    </h5>
                    <MDBCardTitle tag="h3" className="pt-2">
                      <strong>Comité Départemental de Gironde</strong>
                    </MDBCardTitle>
                    <p>
                      Retrouvez toutes les informations sur l'organisation du
                      Tennis en Gironde. 2, Allée Pierre de Coubertin 33400
                      TALENCE Tel : 05 57 35 01 10
                    </p>
                    <MDBBtn
                      color="deep-orange"
                      href="http://www.comite.fft.fr/gironde/gironde_a/cms/index_public.php?us_action=show_note_site&login_off=1&ui_id_site=1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MDBIcon icon="clone left" /> Aller sur le site
                    </MDBBtn>
                  </div>
                </div>
              </MDBCard>
            </MDBCol>
            <MDBCol md="4" className="my-3">
              <MDBCard
                className="card-image"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1465125672495-63cdc2fa22ed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80')",
                }}
              >
                <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4">
                  <div>
                    <h5 className="green-text">
                      <MDBIcon icon="table-tennis" /> F.F.T
                    </h5>
                    <MDBCardTitle tag="h3" className="pt-2">
                      <strong>Fédération Française de Tennis</strong>
                    </MDBCardTitle>
                    <p>
                      Retrouvez toute l'actualité du tennis, du padel, du beach
                      tennis, du paratennis et des équipes de France sur le site
                      de la Fédération française de Tennis.
                    </p>
                    <MDBBtn
                      color="success"
                      href="https://www.fft.fr"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MDBIcon icon="clone left" /> Aller sur le site
                    </MDBBtn>
                  </div>
                </div>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </div>
      </div>
    </>
  )
}

export default Competition
