import React from "react"
import {
  MDBSideNavCat,
  MDBSideNavNav,
  MDBSideNav,
  MDBContainer,
  MDBRow,
  MDBBtn,
  MDBIcon,
} from "mdbreact"
import CustomLink from "./customLink"

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
        <MDBRow style={{ position: `absolute`, zIndex: 0 }}>
          <MDBBtn onClick={this.handleToggle}>
            <MDBIcon icon="bars" size="2x" />
          </MDBBtn>
        </MDBRow>

        <MDBSideNav
          logo="https://mdbootstrap.com/img/logo/mdb-transparent.png"
          hidden
          triggerOpening={isOpen}
          breakWidth={1300}
        >
          <li>
            <ul className="social">
              <li>
                <a href="#!">
                  <MDBIcon fab icon="facebook-f" />
                </a>
              </li>
              <li>
                <a href="#!">
                  <MDBIcon fab icon="pinterest" />
                </a>
              </li>
              <li>
                <a href="#!">
                  <MDBIcon fab icon="google-plus-g" />
                </a>
              </li>
              <li>
                <a href="#!">
                  <MDBIcon fab icon="twitter" />
                </a>
              </li>
            </ul>
          </li>
          <MDBSideNavNav>
            <span>
              <CustomLink className="collapsible-header font-weight-bold">
                <MDBIcon icon="baseball-ball" className="p-2" />
                Accueil
              </CustomLink>
            </span>
            <span>
              <CustomLink className="collapsible-header font-weight-bold">
                <MDBIcon icon="store" className="p-2" />
                Le club
              </CustomLink>
            </span>
            <MDBSideNavCat
              name="Les pratiques"
              id="pratiques"
              icon="table-tennis"
              className="font-weight-bold"
            >
              <CustomLink className="font-weight-bold">
                L'enseignement
              </CustomLink>
              <CustomLink className="font-weight-bold">
                La compétition
              </CustomLink>
              <CustomLink className="font-weight-bold ">Le loisir</CustomLink>
            </MDBSideNavCat>
            <span>
              <CustomLink className="collapsible-header font-weight-bold">
                <MDBIcon icon="rss" className="p-2 " />
                Le blog
              </CustomLink>
            </span>
            <span>
              <CustomLink className="collapsible-header font-weight-bold">
                <MDBIcon icon="money-bill-alt" className="p-2" />
                Les tarifs
              </CustomLink>
            </span>
          </MDBSideNavNav>
        </MDBSideNav>
      </MDBContainer>
    )
  }
}

export default SideNavPage
