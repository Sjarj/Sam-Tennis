import React from "react"
import { MDBAnimation } from "mdbreact"

const News = () => {
  return (
    <section id="news" className="section news-section">
      <MDBAnimation reveal type="fadeIn" delay="0.2s">
        <h1 className="section-heading text-center mb-5 mt-5 pt-4 font-weight-bold">
          Nouvelles du club
        </h1>
      </MDBAnimation>
      <hr className="between-sections" />
      <MDBAnimation reveal type="fadeIn" delay="0.4s">
        <div className="row pb-4 pt-3">
          <div className="col-lg-3">
            <div className="view overlay mb-3 z-depth-1">
              <img
                src="https://images.unsplash.com/photo-1531315396756-905d68d21b56?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1867&q=80 "
                className="card-img-top"
                alt="Post Image"
              />
              <div className="mask rgba-white-slight"></div>
            </div>
          </div>

          <div className="col-lg-9 add-margins-2">
            <h6 className="text-uppercase mb-3">
              <a href="#!" className="text-muted  font-weight-bold">
                | 1 JUILLET 2019
              </a>
            </h6>
            <h4 className="font-weight-bold indigo-text mb-3">
              Assemblé Général
            </h4>
            <p className="-3 font-thin" align="justify">
              Elle aura lieu le{" "}
              <strong className="pink-text">
                vendredi 5 juillet 2019 à 19:00{" "}
              </strong>{" "}
              au siège du Club 60 Avenue du Truc à Mérignac.
            </p>
            <ul>
              <u>Ordre du jour :</u>
              <li>Rapport Moral</li>
              <li>Rapport Sportif</li>
              <li>Rapport Financier</li>
            </ul>
          </div>
        </div>
      </MDBAnimation>
      <hr className="between-sections mt-4 mb-4" />
      <MDBAnimation reveal type="fadeIn" delay="0.4s">
        <div className="row pb-4 pt-3 ">
          <div className="col-lg-3">
            <div className="view overlay mb-3 z-depth-1">
              <img
                src="https://images.unsplash.com/photo-1551916389-5dec87bcc557?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1867&q=80"
                className="card-img-top"
                alt="Post Image"
              />
              <div className="mask rgba-white-slight"></div>
            </div>
          </div>

          <div className="col-lg-9 add-margins-2">
            <h6 className="text-uppercase mb-3">
              <a href="#!" className="text-muted  font-weight-bold">
                | 1 SEPTEMBRE 2019
              </a>
            </h6>
            <h4 className="mb-3 font-weight-bold indigo-text">
              Tournois Internes
            </h4>
            <ul>
              <li>
                {" "}
                <p className="-3 font-thin" align="justify">
                  <strong className="pink-text">
                    Qualificatif au trophée Perrier :
                  </strong>{" "}
                  homologué, de mi Octobre à mi Décembre. Tournoi de simples,
                  réservé aux : non classés, 4ème série et 3ème série jusqu'à
                  15/4.
                </p>
              </li>
              <li>
                {" "}
                <p className="-3 font-thin" align="justify">
                  <strong className="pink-text">
                    Tournoi interne par niveau de classement :
                  </strong>{" "}
                  défis entre les adhérents du{" "}
                  <span className="indigo-text">SAM</span>, au printemps.
                  Tournoi de simples, ouvert à tous les adhérents du Club Jeunes
                  et Adultes.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </MDBAnimation>
      <hr className="between-sections mt-4 mb-4" />
      <MDBAnimation reveal type="fadeIn" delay="0.4s">
        <div className="row mb-3 pt-4">
          <div className="col-lg-3">
            <div className="view overlay mb-3 z-depth-1">
              <img
                src="https://images.unsplash.com/photo-1555160679-b1b58488f476?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2978&q=80"
                className="img-fluid z-depth-1"
                alt="Post Image"
              />
              <div className="mask rgba-white-slight"></div>
            </div>
          </div>

          <div className="col-lg-9 add-margins-2">
            <h6 className="text-uppercase mb-3">
              <a href="#!" className="text-muted  font-weight-bold pb-1">
                | 1 AU 15 SEPTEMBRE 2019
              </a>
            </h6>
            <h4 className="mb-3 indigo-text font-weight-bold pb-3">
              Tournois Open
            </h4>
            <ul>
              <li>
                <p className="-3 font-thin" align="justify">
                  <strong className="pink-text">
                    Tournoi de Jeunes du SAM Tennis :
                  </strong>{" "}
                  Durant la première quinzaine de Septembre [du 25 août au 8
                  Septembre 2018]. Tournoi de simples. Ouvert aux joueurs et
                  joueuses 9/10 ans 11/12 ans 13/14 ans et 15/16 ans avec
                  catégories suivant les âges.
                </p>
              </li>
              <li>
                <p className="-3 font-thin" align="justify">
                  <strong className="pink-text"> Bon Vivre :</strong> les 2ème
                  et 3ème semaine de Janvier [du 4 au 21 Janvier 2018]. Tournoi
                  de simples, réservé aux joueurs et joueuses de plus de 35 ans,
                  de non classés à 4/6 avec catégories suivants les âges : 35
                  SD, 35, 45, 55, 60, 65, 70, 75 ans SM.
                </p>
              </li>
              <li>
                <p className="-3 font-thin" align="justify">
                  <strong className="pink-text">Open du SAM Tennis </strong>{" "}
                  durant les vacances scolaires de printemps. Tournoi de
                  simples. Ouverts à tous les joueurs et joueuses licenciés de
                  non classé à 1ère série.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </MDBAnimation>
    </section>
  )
}

export default News
