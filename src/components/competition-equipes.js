import React from "react"
import { MDBAnimation } from "mdbreact"

const CompetitionEquipes = () => {
  return (
    <>
      <MDBAnimation reveal type="fadeIn" delay="0.4">
        <h5
          className="text-center dark- text-uppercase font-weight-bold spacing my-5 py-4 wow fadeIn"
          data-wow-delay="0.2s"
        >
          <strong id="competition-equipe">Compétitions par équipes</strong>
        </h5>
      </MDBAnimation>
      <div className="row">
        <div className="col-md-5  justify-content-left">
          <MDBAnimation>
            <hr className="line" />

            <h5
              className="text-left dark- text-center font-weight-bold pb-4 wow fadeIn"
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

            <ul style={{ listStyle: `none` }} className="blue-">
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
                Équipes Messieurs 35, 45, 55, 65 ans en Interclubs régionaux.
              </li>
              <li>Équipes féminines 4ème série dans Les Raquettes F.F.T.</li>
              <li className="mt-3">
                Équipes de Jeunes garçons et filles dans toutes les catégories
                d'âges de 9/10 11/12 13/14 et 15/16 ans, dans les différentes
                compétitions départementales et régionales.
              </li>
            </ul>
          </MDBAnimation>
        </div>
        <div className="col-md-7">
          <div className="view ">
            <MDBAnimation reveal type="fadeIn" delay="0.4">
              <img
                src="https://mdbootstrap.com/img/illustrations/undraw_grand_slam_0q5r.svg"
                className="w-100"
                alt="tennis girl"
              />
            </MDBAnimation>
          </div>
        </div>
      </div>
    </>
  )
}

export default CompetitionEquipes
