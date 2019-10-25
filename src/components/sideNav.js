import React from "react"
import {
  MDBIcon,
  MDBSideNavCat,
  MDBSideNavNav,
  MDBSideNav,
  MDBContainer,
  MDBRow,
  MDBBtn,
} from "mdbreact"
import logo from "../images/logo.jpg"
import { Link } from "gatsby"

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
            <span className="nav-link ">
              <Link to="/" className="font-weight-bolder indigo-text">
                Accueil
              </Link>
            </span>
            <span className="nav-link">
              <Link className="font-weight-bolder indigo-text" to="/">
                Installation
              </Link>
            </span>
            <span className="nav-link">
              <Link className="font-weight-bolder indigo-text" to="/">
                Équipe
              </Link>
            </span>

            <MDBSideNavCat
              name="Pratiques"
              id="practices"
              icon="fas fa-table-tennis"
              className="font-weight-bolder indigo-text"
            >
              <span className="nav-link">
                <Link
                  className="font-weight-bolder indigo-text"
                  to="/"
                  style={{ backgroundColor: `rgba(255, 255, 255, 0.1)` }}
                >
                  Loisir
                </Link>
              </span>
              <span className="nav-link">
                <Link
                  className="font-weight-bolder indigo-text"
                  to="/"
                  style={{ backgroundColor: `rgba(255, 255, 255, 0.1)` }}
                >
                  Compétition par équipe
                </Link>
              </span>
              <span className="nav-link">
                <Link
                  className="font-weight-bolder indigo-text"
                  to="/"
                  style={{ backgroundColor: `rgba(255, 255, 255, 0.1)` }}
                >
                  Enseignement
                </Link>
              </span>
              <span className="nav-link">
                <Link
                  className="font-weight-bolder indigo-text"
                  to="/"
                  style={{ backgroundColor: `rgba(255, 255, 255, 0.1)` }}
                >
                  Compétition individuelle
                </Link>
              </span>
            </MDBSideNavCat>
            <span className="nav-link">
              <Link className="font-weight-bolder indigo-text" to="/">
                tarifs
              </Link>
            </span>
            <span className="nav-link">
              <Link className="font-weight-bolder indigo-text" to="/">
                Blog
              </Link>
            </span>
            <span className="nav-link">
              <Link className="font-weight-bolder indigo-text" to="/">
                Réservation
              </Link>
            </span>
            <span className="nav-link">
              <Link className="font-weight-bolder indigo-text" to="/">
                Inscription
              </Link>
            </span>
            <span className="nav-link">
              <Link className="font-weight-bolder indigo-text" to="/">
                Contact
              </Link>
            </span>
            <span className="nav-link">
              <Link className="font-weight-bolder indigo-text" to="/">
                Partenaires
              </Link>
            </span>
          </MDBSideNavNav>
        </MDBSideNav>
      </MDBContainer>
    )
  }
}

export default SideNavPage
