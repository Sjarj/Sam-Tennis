import React from "react"
import {
  MDBIcon,
  MDBSideNavCat,
  MDBSideNavNav,
  MDBSideNav,
  // MDBSideNavLink,
  MDBContainer,
  MDBRow,
  MDBBtn,
} from "mdbreact"

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
            style={{ zIndex: 1, marginTop: `2rem`, marginLeft: `2rem` }}
          >
            <MDBIcon icon="bars" size="2x" className="m-0 p-0" />
          </MDBBtn>
        </MDBRow>
        <MDBSideNav
          logo="http://www.sam-tennis.com/images/template/logotype_sam_tennis.gif"
          hidden
          triggerOpening={isOpen}
          breakWidth={1300}
        >
          <MDBSideNavNav>
            <MDBSideNavCat
              name="Submit blog"
              id="submit-blog"
              icon="chevron-right"
            >
              {/* {/* <MDBSideNavLink>Submit listing</MDBSideNavLink> */} */}
              {/* {/* <MDBSideNavLink>Registration form</MDBSideNavLink> */} */}
            </MDBSideNavCat>
            <MDBSideNavCat
              name="Instruction"
              id="instruction"
              iconRegular
              icon="hand-pointer"
              href="#"
            >
              {/* {/* <MDBSideNavLink>For bloggers</MDBSideNavLink> */} */}
              {/* {/* <MDBSideNavLink>For authors</MDBSideNavLink> */} */}
            </MDBSideNavCat>
            <MDBSideNavCat name="About" id="about" icon="eye">
              {/* {/* <MDBSideNavLink>Instruction</MDBSideNavLink> */} */}
              {/* {/* <MDBSideNavLink>Monthly meetings</MDBSideNavLink> */} */}
            </MDBSideNavCat>
            <MDBSideNavCat
              name="Contact me"
              id="contact-me"
              iconRegular
              icon="envelope"
            >
              {/* {/* <MDBSideNavLink>FAQ</MDBSideNavLink> */} */}
              {/* {/* <MDBSideNavLink>Write a message</MDBSideNavLink> */} */}
            </MDBSideNavCat>
          </MDBSideNavNav>
        </MDBSideNav>
      </MDBContainer>
    )
  }
}

export default SideNavPage
