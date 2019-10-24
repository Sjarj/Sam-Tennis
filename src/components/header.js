import React from "react"
import { MDBAnimation } from "mdbreact"
import SideNavPage from "./sideNav"

const Header = () => {
  return (
    <header>
      {/* <nav className="navbar navbar-expand-lg navbar-dark fixed-top scrolling-navbar">
          <div className="container">
            <a className="navbar-brand" href="#">
              SAM TENNIS
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarTogglerDemo02"
              aria-controls="navbarTogglerDemo02"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav mr-auto smooth-scroll">
                <li className="nav-item">
                  <a className="nav-link" href="#home">
                    Accueil <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#about" data-offset="30">
                    Installations
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#team" data-offset="30">
                    Équipe
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#timetable" data-offset="100">
                    Disciplines
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#tickets" data-offset="100">
                    Tickets
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contact" data-offset="100">
                    Contact
                  </a>
                </li>
              </ul>

              <ul className="navbar-nav nav-flex-icons">
                <li className="nav-item">
                  <a className="nav-link">
                    <i className="fab fa-facebook-f light-green-text-2"></i>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link">
                    <i className="fab fa-twitter light-green-text-2"></i>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link">
                    <i className="fab fa-instagram light-green-text-2"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav> */}

      <div
        id="home"
        className="view jarallax"
        data-jarallax='{"speed": 0.2}'
        style={{
          backgroundImage: `${`url('https://images.unsplash.com/photo-1570192164067-6f2d28702ae8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60')`}`,
          backgroundRepeat: `no-repeat`,
          backgroundSize: `cover`,
          backgroundPosition: `center`,
        }}
      >
        <SideNavPage />
        <div className="mask rgba-black-strong">
          <div className="container h-100 d-flex justify-content-center align-items-center">
            <div className="row smooth-scroll">
              <div className="col-md-12">
                <div className="white-text text-center">
                  <MDBAnimation reveal type="fadeIn">
                    <h2 className="display-3 font-weight-bold ">
                      <strong>SAM </strong>
                      <strong>TENNIS</strong>
                    </h2>
                  </MDBAnimation>
                  <MDBAnimation reveal type="fadeIn" delay="0.2s">
                    <h3>L'une des 28 sections sportives du SAM OMNISPORTS.</h3>
                  </MDBAnimation>
                  <MDBAnimation reveal type="fadeIn" delay="0.4s">
                    <a href="#about" className="btn btn-outline-white">
                      Rencontre notre équipe
                    </a>
                  </MDBAnimation>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
