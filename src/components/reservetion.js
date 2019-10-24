import React, { Component } from "react"
import {
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBAnimation,
  MDBCard,
} from "mdbreact"

class Reservation extends Component {
  state = {
    activeItemClassicTabs3: "1",
  }

  toggleClassicTabs3 = tab => e => {
    e.preventDefault()
    if (this.state.activeItemClassicTabs3 !== tab) {
      this.setState({
        activeItemClassicTabs3: tab,
      })
    }
  }

  render() {
    return (
      <section id="reservation" className="section mb-4">
        <MDBContainer>
          <MDBAnimation reveal type="fadeIn" delay="0.2">
            <h1 className="section-heading text-center mb-5 mt-5 pt-4 font-weight-bold">
              Réservation
            </h1>
          </MDBAnimation>
          <MDBAnimation reveal type="fadeIn" delay="0.2s">
            <p className="text-center w-responsive mx-auto  my-5 lead">
              La réservation des courts extérieurs comme des courts couverts,
              s'effectue la veille ou le jour même :
            </p>
          </MDBAnimation>
          <MDBRow>
            <div className="col-lg-6">
              <MDBAnimation reveal type="fadeIn" delay="0.4">
                <div className="row mb-3">
                  <div className="col-md-1 col-2">
                    <i className="fas fa-home purple-text fa-2x"></i>
                  </div>
                  <div className="col-md-11 col-10">
                    <h5 className="font-weight-bold purple-text mb-2">
                      Sur place au Club House
                    </h5>
                    <p className="">
                      Le Matin tous les jours de 9h à 12h30 sauf le Mardi fermé.
                      L'Après-midi :
                    </p>
                    <ul style={{ listStyle: `none` }} className="pl-0 tarifs">
                      <li>
                        De Avril à Septembre. 14h à 20h du Lundi au Samedi, de
                        14h à 19h le Dimanche.
                      </li>
                      <li>
                        De Octobre à Mars. 14h à 19h du Lundi au Samedi, de 14h
                        à 18h le Dimanche.
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-1 col-2">
                    <i className="fas fa-at pink-text fa-2x"></i>
                  </div>
                  <div className="col-md-11 col-10">
                    <h5 className="font-weight-bold pink-text mb-2">
                      Par Internet
                    </h5>
                    <p>En cliquant le bouton sur la carte ci-après:</p>
                    <ul style={{ listStyle: `none` }} className="pl-0 tarifs">
                      <li>
                        Renseigner dans le rectangle « Accès à la Réservation »
                      </li>
                      <li>
                        Son Identifiant composé de : son NOM puis son(ses)
                        PRENOMS (en laissant un espace entre le NOM et les
                        PRENOMS et entre les PRENOMS)
                      </li>
                      <li>Son Mot de passe</li>
                    </ul>
                    <p>
                      En cas de besoin appeler le ClubHouse au{" "}
                      <a href="tel:+33556974385" className="indigo-text">
                        05.56.97.43.85
                      </a>
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-1 col-2">
                    <i className="fas fa-phone indigo-text fa-2x"></i>
                  </div>
                  <div className="col-md-11 col-10">
                    <h5 className="font-weight-bold indigo-text mb-2">
                      Par téléphone en appelant le Club House
                    </h5>
                    <p>
                      au{" "}
                      <a href="tel:+33556974385" className="indigo-text">
                        05.56.97.43.85
                      </a>
                    </p>
                  </div>
                </div>
              </MDBAnimation>
            </div>
            <MDBCol md="6" className="md-0 mb-4">
              <MDBAnimation reveal type="fadeIn" delay="0.2">
                <MDBCard
                  className="card-image"
                  style={{
                    backgroundImage:
                      "url(https://images.unsplash.com/photo-1480180566821-a7d525cdfc5e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80)",
                  }}
                >
                  <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4 rounded">
                    <div>
                      <h6 className="yellow-text">
                        <MDBIcon icon="baseball-ball" />
                        <strong> Reservation internet</strong>
                      </h6>
                      <h3 className="py-3 font-weight-bold">
                        <strong> Balle Jaune</strong>
                      </h3>
                      <p className="pb-3">
                        Permet d’accéder aux plannings des courts • D’effectuer
                        une réservation pour 1h • De supprimer ou modifier une
                        réservation que l’on a effectuée
                      </p>
                      <MDBBtn
                        color="warning"
                        rounded
                        size="md"
                        href="https://ballejaune.com/club/sam-tennis"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <MDBIcon far icon="clone" className="left" /> Faites une
                        reservation
                      </MDBBtn>
                    </div>
                  </div>
                </MDBCard>
              </MDBAnimation>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    )
  }
}

export default Reservation
