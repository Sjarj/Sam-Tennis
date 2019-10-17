import React from "react"
import { MDBAnimation } from "mdbreact"
import Loisir from "./loisir"
import Competition from "./competition"

const pillsPtractices = () => {
  return (
    <section id="practice" className="section">
      <MDBAnimation reveal type="fadeIn" delay="0.2s">
        <h1 className="section-heading text-center mb-5 mt-5 pt-4 font-weight-bold">
          Les pratiques
        </h1>
      </MDBAnimation>
      <MDBAnimation reveal type="fadeIn">
        <p className="text-center w-responsive mx-auto my-5 lead ">
          Le club <strong>SAM</strong>
          <strong> TENNIS</strong> offre la possibilité aux adhérents différents
          aspetcs de la pratiques du tennis de l'enseignement à la compétition
          en passant par le loisir .
        </p>
      </MDBAnimation>
      <Loisir />
      <Competition />
    </section>
  )
}

export default pillsPtractices

//
//
//
//
//
//
//

//                   <MDBTabPane tabId="3">
//                     <p className="text-center w-responsive mx-auto wow fadeIn mt-2 mb-4 ">
//                       <strong>L'enseignement </strong>couvre la découverte,
//                       l'initiation, le perfectionnement et l'entraînement à la
//                       compétition. Il est animé et encadré par{" "}
//                       <span className="light-blue-text">4</span> enseignants
//                       professionnels et <span className="red-text">2</span>{" "}
//                       initiateurs Fédéraux et se décline comme suit :
//                     </p>

//                     <div className="row wow fadeIn" data-wow-delay="0.4s">
//                       <div className="col-lg-3 col-md-3 mb-5 ">
//                         <div className="card pricing-card mb-2">
//                           <div className="price mb-1">
//                             <div className="version header grey-color">
//                               <h6 className="font-weight-bold">
//                                 Centre d'entraînement
//                               </h6>
//                             </div>
//                           </div>

//                           <div className="card-body streakd">
//                             <ul className="list-unstyled ">
//                               <li>
//                                 <p>pour les meilleurs compétiteurs.</p>
//                               </li>
//                             </ul>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="col-lg-3 col-md-3 mb-5">
//                         <div className="card pricing-card">
//                           <div className="price mb-1">
//                             <div className="version header grey-color">
//                               <h6 className="font-weight-bold">
//                                 Ecole de Tennis
//                               </h6>
//                             </div>
//                           </div>

//                           <div className="card-body streakd">
//                             <ul className="list-unstyled ">
//                               <li>
//                                 <p>
//                                   Mercredi de 10h à 12h <br /> et de 13h à 18h.
//                                 </p>
//                               </li>
//                               <li>
//                                 <p>
//                                   Samedi de 9h à 12h <br />
//                                   et de 13h à 17h.
//                                 </p>
//                               </li>
//                               <li>
//                                 <p>
//                                   Lundi, Mardi, Jeudi, Vendredi <br />
//                                   de 17h à 18h.
//                                 </p>
//                               </li>
//                             </ul>
//                           </div>
//                         </div>
//                       </div>

//                       <div className="col-lg-3 col-md-3 mb-5">
//                         <div className="card pricing-card">
//                           <div className="price mb-1">
//                             <div className="version header grey-color">
//                               <h6 className="h6-responsive font-weight-bold">
//                                 Cours Collectifs Jeunes
//                               </h6>
//                             </div>
//                           </div>

//                           <div className="card-body streakd">
//                             <ul className="list-unstyled ">
//                               <li>
//                                 <p>
//                                   <strong className="light-blue-text">
//                                     A ROBERT BRETTES
//                                   </strong>
//                                   : Mercredi de 14h à 18h.
//                                 </p>
//                               </li>
//                               <li>
//                                 <p>Vendredi de 18h30 à 20h30</p>
//                               </li>
//                               <li>
//                                 <p>Samedi de 10h à 12h.</p>
//                               </li>
//                               <li>
//                                 <p>
//                                   <strong className="red-text">
//                                     A LA ROSERAIE{" "}
//                                   </strong>
//                                   :
//                                   <br /> Samedi de 9h à 12h.
//                                 </p>
//                               </li>
//                               <li>
//                                 <p>
//                                   Lundi, Mardi, Jeudi, Vendredi de 17h à 18h.
//                                 </p>
//                               </li>
//                             </ul>
//                           </div>
//                         </div>
//                       </div>

//                       <div className="col-lg-3 col-md-3 mb-5">
//                         <div className="card pricing-card mb-2">
//                           <div className="price mb-1">
//                             <div className="version header grey-color">
//                               <h6 className="font-weight-bold">
//                                 Cours Collectifs Adultes
//                               </h6>
//                             </div>
//                           </div>

//                           <div className="card-body streakd">
//                             <ul className="list-unstyled ">
//                               <li>
//                                 <p>
//                                   <strong className="light-blue-text">
//                                     Michel PONTICO{" "}
//                                   </strong>
//                                   :{" "}
//                                   <a href="tel:+330619644906" className="">
//                                     {" "}
//                                     06.19.64.49.06
//                                   </a>{" "}
//                                   michelpontico2012@gmail.com
//                                 </p>
//                               </li>
//                               <li>
//                                 <p>
//                                   <strong className="light-blue-text">
//                                     {" "}
//                                     Luc FINOEL{" "}
//                                   </strong>
//                                   :
//                                   <a href="tel:+330683449647" className="">
//                                     {" "}
//                                     06.83.44.96.47
//                                   </a>{" "}
//                                   lfinoel@gmail.com
//                                 </p>
//                               </li>
//                               <li>
//                                 <p>
//                                   <strong className="light-blue-text">
//                                     {" "}
//                                     Benjamin CATTAN{" "}
//                                   </strong>
//                                   :{" "}
//                                   <a href="tel:+330659361976" className="">
//                                     06.59.36.19.76
//                                   </a>{" "}
//                                   maitrecat@hotmail.com
//                                 </p>
//                               </li>
//                             </ul>
//                           </div>
//                         </div>
//                       </div>

//                       <p className="">
//                         <h6 className="h6-responsive font-weight-bold black-text">
//                           {" "}
//                           L'inscription à l'enseignement du tennis permet par
//                           ailleurs la pratique du Tennis par accès aux
//                           installations de façon illimitée.{" "}
//                         </h6>
//                         Les <strong>30 séances</strong> hebdomadaires de 1h pour
//                         <strong className="light-blue-text">
//                           {" "}
//                           l'Ecole de Tennis{" "}
//                         </strong>
//                         et les{" "}
//                         <strong className="red-text">
//                           Cours Collectifs
//                         </strong>{" "}
//                         ont lieu de début Octobre à fin Juin hors les vacances
//                         scolaires. Il en est de même pour la 2ème heure. Les
//                         enfants sont par groupe de niveau et d'âge similaires.
//                         Il y a un enseignant par groupe et par terrain. Les
//                         groupes sont limités à 8 enfants pour l'Ecole de Tennis
//                         et à 6 enfants pour les Cours Collectifs Jeunes.
//                       </p>
//                     </div>
//                   </MDBTabPane>
//                 </MDBTabContent>
//               </MDBContainer>
//             </div>
//           </div>
//         </MDBAnimation>
//       </section>
//     )
//   }
// }

// export default PillsPractices
