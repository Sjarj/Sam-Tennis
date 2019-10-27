import React from "react"
import {
  MDBIcon,
  MDBSideNavCat,
  MDBSideNavNav,
  MDBSideNav,
  MDBContainer,
  MDBRow,
  MDBBtn,
  MDBSmoothScroll,
} from "mdbreact"
import logo from "../images/logo.jpg"


class SideNavPage extends React.Component {
  state = {
    isOpen: false,
  }

  handleToggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }

  render() {
    const { isOpen } = this.state
    return (
      <MDBContainer>
        <MDBRow>
          <MDBBtn
            gradient="purple"
            className="pr-4 pl-4 rounded"
            onClick={this.handleToggle}
            style={{
              zIndex: 1,
              marginTop: `2rem`,
              marginLeft: `2rem`,
              position: `fixed`,
            }}
          >
            <MDBIcon icon="bars" size="2x" className="m-0 p-0" />
          </MDBBtn>
        </MDBRow>
        <MDBSideNav
          logo={logo}
          hidden
          triggerOpening={isOpen}
          breakWidth={1300}
          className="side-nav-light"
        >
          <MDBSideNavNav>
            <MDBSmoothScroll to="home" className="nav-link Ripple-parent">
              <span className="ml-4 style-link font-weight-bolder indigo-text">
                Accueil
              </span>
            </MDBSmoothScroll>
            <MDBSmoothScroll
              to="installation"
              className="nav-link Ripple-parent"
            >
              <span className="ml-4 style-link font-weight-bolder indigo-text">
                Installation
              </span>
            </MDBSmoothScroll>
            <MDBSmoothScroll to="team" className="nav-link Ripple-parent">
              <span className="ml-4  style-link font-weight-bolder indigo-text">
                Équipe
              </span>
            </MDBSmoothScroll>

            <MDBSideNavCat
              name="Pratiques"
              id="practices"
              icon="fas fa-table-tennis"
              className="font-weight-bolder indigo-text"
            >
              <MDBSmoothScroll
                to="loisir"
                className="nav-link Ripple-parent"
                style={{ backgroundColor: `rgba(255, 255, 255, 0.1) ` }}
              >
                <span className="style-link  indigo-text">Loisir</span>
              </MDBSmoothScroll>
              <MDBSmoothScroll
                to="competition-equipe"
                className="nav-link Ripple-parent"
                style={{ backgroundColor: `rgba(255, 255, 255, 0.1) ` }}
              >
                <span className="style-link indigo-text">
                  Compétition par équipe
                </span>
              </MDBSmoothScroll>
              <MDBSmoothScroll
                to="enseignement"
                className="nav-link Ripple-parent"
                style={{ backgroundColor: `rgba(255, 255, 255, 0.1) ` }}
              >
                <span className="style-link  indigo-text">Enseignement</span>
              </MDBSmoothScroll>
              <MDBSmoothScroll
                to="competition-individuelle"
                className="nav-link Ripple-parent"
                style={{ backgroundColor: `rgba(255, 255, 255, 0.1) ` }}
              >
                <span className="style-link  indigo-text">
                  Compétition individuelle
                </span>
              </MDBSmoothScroll>
            </MDBSideNavCat>
            <MDBSmoothScroll to="tarifs" className="nav-link Ripple-parent">
              <span className="ml-4 style-link  font-weight-bolder indigo-text">
                Tarifs
              </span>
            </MDBSmoothScroll>
            <MDBSmoothScroll to="blog" className="nav-link Ripple-parent">
              <span className="ml-4 style-link  font-weight-bolder indigo-text">
                Blog
              </span>
            </MDBSmoothScroll>
            <MDBSmoothScroll
              to="reservation"
              className="nav-link Ripple-parent"
            >
              <span className="ml-4 style-link  font-weight-bolder indigo-text">
                Réservation
              </span>
            </MDBSmoothScroll>
            <MDBSmoothScroll
              to="inscription"
              className="nav-link Ripple-parent"
            >
              <span className="ml-4 style-link  font-weight-bolder indigo-text">
                Inscription
              </span>
            </MDBSmoothScroll>
            <MDBSmoothScroll to="contact" className="nav-link Ripple-parent">
              <span className="ml-4 style-link  font-weight-bolder indigo-text">
                Contact
              </span>
            </MDBSmoothScroll>
            <MDBSmoothScroll to="contact" className="nav-link Ripple-parent">
              <span className="ml-4 style-link  font-weight-bolder indigo-text">
                Partenaires
              </span>
            </MDBSmoothScroll>
          </MDBSideNavNav>
        </MDBSideNav>
      </MDBContainer>
    )
  }
}

export default SideNavPage
