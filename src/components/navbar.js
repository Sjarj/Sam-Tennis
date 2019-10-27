import React from "react"
import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
  MDBSmoothScroll,
  MDBDropdownToggle,
  MDBDropdownItem,
  MDBDropdown,
  MDBDropdownMenu,
} from "mdbreact"
import { BrowserRouter as Router } from "react-router-dom"

class Navbar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      collapse: false,
      isWideEnough: false,
    }
    this.onClick = this.onClick.bind(this)
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse,
    })
  }

  render() {
    return (
      <header>
        <Router>
          <MDBNavbar
            color="pink"
            fixed="top"
            dark
            expand="lg"
            scrolling
            transparent
          >
            {!this.state.isWideEnough && (
              <MDBNavbarToggler onClick={this.onClick} />
            )}
            <MDBCollapse isOpen={this.state.collapse} navbar>
              <MDBNavbarNav left>
                {" "}
                <MDBSmoothScroll to="home" className="nav-link Ripple-parent">
                  <span className="style-link font-weight-bolder text-white">
                    Accueil
                  </span>
                </MDBSmoothScroll>
                <MDBSmoothScroll
                  to="installation"
                  className="nav-link Ripple-parent"
                >
                  <span className="style-link font-weight-bolder text-white">
                    Installation
                  </span>
                </MDBSmoothScroll>
                <MDBSmoothScroll to="team" className="nav-link Ripple-parent">
                  <span className="style-link font-weight-bolder text-white">
                    Équipe
                  </span>
                </MDBSmoothScroll>
                <MDBDropdown>
                  <MDBDropdownToggle nav caret>
                    <div className="d-inline font-weight-bolder  text-white">
                      Pratiques
                    </div>
                  </MDBDropdownToggle>
                  <MDBDropdownMenu>
                    <MDBSmoothScroll to="loisir">
                      <MDBDropdownItem>Loisir</MDBDropdownItem>
                    </MDBSmoothScroll>
                    <MDBSmoothScroll to="competition-equipe">
                      <MDBDropdownItem>Compétition par équipe</MDBDropdownItem>
                    </MDBSmoothScroll>
                    <MDBSmoothScroll to="enseignement">
                      <MDBDropdownItem>Enseignement</MDBDropdownItem>
                    </MDBSmoothScroll>
                    <MDBSmoothScroll to="competition-individuelle">
                      <MDBDropdownItem>
                        Compétition individuelle
                      </MDBDropdownItem>
                    </MDBSmoothScroll>
                  </MDBDropdownMenu>
                </MDBDropdown>
                <MDBSmoothScroll to="tarifs" className="nav-link Ripple-parent">
                  <span className="style-link  font-weight-bolder text-white">
                    Tarifs
                  </span>
                </MDBSmoothScroll>
                <MDBSmoothScroll to="blog" className="nav-link Ripple-parent">
                  <span className="style-link  font-weight-bolder text-white">
                    Blog
                  </span>
                </MDBSmoothScroll>
                <MDBSmoothScroll
                  to="reservation"
                  className="nav-link Ripple-parent"
                >
                  <span className="style-link  font-weight-bolder text-white">
                    Réservation
                  </span>
                </MDBSmoothScroll>
                <MDBSmoothScroll
                  to="inscription"
                  className="nav-link Ripple-parent"
                >
                  <span className="style-link  font-weight-bolder text-white">
                    Inscription
                  </span>
                </MDBSmoothScroll>
                <MDBSmoothScroll
                  to="contact"
                  className="nav-link Ripple-parent"
                >
                  <span className="style-link  font-weight-bolder text-white">
                    Contact
                  </span>
                </MDBSmoothScroll>
                <MDBSmoothScroll
                  to="contact"
                  className="nav-link Ripple-parent"
                >
                  <span className="style-link  font-weight-bolder text-white">
                    Partenaires
                  </span>
                </MDBSmoothScroll>
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBNavbar>
        </Router>
      </header>
    )
  }
}

export default Navbar
