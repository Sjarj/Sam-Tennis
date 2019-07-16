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
import CustomLink from "./customLink"
import { Link } from "@reach/router"

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
          <MDBBtn onClick={this.handleToggle}>
            <MDBIcon icon="bars" size="5x" />
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
            <MDBSideNavCat
              name="Submit blog"
              id="submit-blog"
              icon="chevron-right"
            >
              <CustomLink to="/">Submit listing</CustomLink>
              <CustomLink>Registration form</CustomLink>
            </MDBSideNavCat>
            <li>
              <CustomLink className="collapsible-header">
                For bloggers
              </CustomLink>
            </li>
            <MDBSideNavCat name="About" id="about" icon="eye">
              <CustomLink>Instruction</CustomLink>
              <CustomLink>Monthly meetings</CustomLink>
            </MDBSideNavCat>
            <MDBSideNavCat
              name="Contact me"
              id="contact-me"
              iconRegular
              icon="envelope"
            >
              <CustomLink>FAQ</CustomLink>
              <CustomLink>Write a message</CustomLink>
            </MDBSideNavCat>
          </MDBSideNavNav>
        </MDBSideNav>
      </MDBContainer>
    )
  }
}

export default SideNavPage
