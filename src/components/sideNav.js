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
            <span className="nav-link">
              <Link to="/">Accueil</Link>
            </span>
            <span className="nav-link">
              <Link to="/">Installation</Link>
            </span>
            <span className="nav-link">
              <Link to="/">Équipe</Link>
            </span>

            <MDBSideNavCat name="Pratiques" id="practices" icon="">
              <span className="nav-link">
                <Link to="/">Loisir</Link>
              </span>
              <span className="nav-link">
                <Link to="/">Compétition par équipe</Link>
              </span>
              <span className="nav-link">
                <Link to="/">Enseignement</Link>
              </span>
              <span className="nav-link">
                <Link to="/">Compétition individuelle</Link>
              </span>
            </MDBSideNavCat>
            <span className="nav-link">
              <Link to="/">tarifs</Link>
            </span>
            <span className="nav-link">
              <Link to="/">Blog</Link>
            </span>
            <span className="nav-link">
              <Link to="/">Réservation</Link>
            </span>
            <span className="nav-link">
              <Link to="/">Inscription</Link>
            </span>
            <span className="nav-link">
              <Link to="/">Contact</Link>
            </span>
            <span className="nav-link">
              <Link to="/">Partenaires</Link>
            </span>
          </MDBSideNavNav>
        </MDBSideNav>
      </MDBContainer>
    )
  }
}

export default SideNavPage
