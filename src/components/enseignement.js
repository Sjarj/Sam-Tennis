import React from "react"
import IllustrationTennisMan2 from "../images/tennis_man2.png"
const Enseignement = () => {
  return (
    <>
      <h5
        className="text-center dark-grey-text text-uppercase font-weight-bold spacing my-5 py-4 wow fadeIn"
        data-wow-delay="0.2s"
      >
        <strong>L'Enseignement</strong>
      </h5>

      <div className="row">
        <div className="col-md-5">
          <img
            src={IllustrationTennisMan2}
            className="w-100"
            alt="tennis girl"
          />
          <h5 className="text-left dark-grey-text text-center font-weight-bold pb-4 ">
            <em>
              <strong>
                L'inscription à l'enseignement du tennis permet par ailleurs la
                pratique du Tennis par accès aux installations de façon
                illimitée.
              </strong>
            </em>
          </h5>
          <p className="grey-text">
            Les 30 séances hebdomadaires de 1h pour l'Ecole de Tennis et les
            Cours Collectifs ont lieu de début Octobre à fin Juin hors les
            vacances scolaires. Il en est de même pour la 2ème heure. Les
            enfants sont par groupe de niveau et d'âge similaires. Il y a un
            enseignant par groupe et par terrain. Les groupes sont limités à 8
            enfants pour l'Ecole de Tennis et à 6 enfants pour les Cours
            Collectifs Jeunes.
          </p>
        </div>

        <div className="col-md-6 ml-lg-5 justify-content-left">
          <hr className="line" />

          <h5
            className="text-left dark-grey-text text-center font-weight-bold pb-4 wow fadeIn"
            data-wow-delay="0.2s"
          >
            <em>
              <strong>
                L'enseignement couvre la découverte, l'initiation, le
                perfectionnement et l'entraînement à la compétition. Il est
                animé et encadré par 4 enseignants professionnels et 2
                initiateurs Fédéraux et se décline comme suit :
              </strong>
            </em>
          </h5>
          <p className="grey-text">
            <span className="indigo-text">Ecole de Tennis </span> : de 5 à 12
            ans la Roseraie Courts couverts. Avec balles, terrains et forme de
            jeux adaptés suivant les âges des enfants.
          </p>
          <ul style={{ listStyle: `none` }} className="blue-grey-text">
            <li> Le Mercredi de 10h à 12h et de 13h à 18h. </li>
            <li>Le Samedi de 9h à 12h et de 13h à 17h.</li>
            <li>
              {" "}
              Autres créneaux possibles en semaine les Lundi, Mardi, Jeudi,
              Vendredi de 17h à 18h.
            </li>
          </ul>
          <p className="grey-text mt-4">
            <span className="indigo-text">Cours Collectifs Jeunes </span> : de
            13 à 18 ans .
          </p>
          <ul style={{ listStyle: `none` }} className="blue-grey-text">
            A ROBERT BRETTES:
            <li>Le Mercredi de 14h à 18h. </li>
            <li>Le Vendredi de 18h30 à 20h30.</li>
            <li>Le Samedi de 10h à 12h.</li>
          </ul>
          <ul style={{ listStyle: `none` }} className="blue-grey-text">
            A la ROSERAIE :<li>Le Samedi de 9h à 12h.</li>
            <li>
              Autres créneaux possibles en semaine les Lundi, Mardi, Jeudi,
              Vendredi de 17h à 18h.
            </li>
          </ul>
          <p className="grey-text">
            <span className="indigo-text">Cours Collectifs Adultes</span>{" "}
            consulter nos éducateurs.
          </p>
          <p className="grey-text">
            <span className="indigo-text">Centre d'entraînement</span> pour les
            meilleurs compétiteurs.
          </p>
        </div>
      </div>
    </>
  )
}

export default Enseignement
