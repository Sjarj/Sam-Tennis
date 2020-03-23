import React from "react"
import { MDBAnimation } from "mdbreact"
import { Parallax } from "react-parallax"

const Header = () => {
  return (
    <header>
      <div id="home" className="view ">
        <Parallax
          blur={2}
          bgImage={require("../images/header.jpeg")}
          bgImageAlt="Balle sur un court de tennis"
          strength={200}
        >
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
                      <h3>
                        L'une des 28 sections sportives du SAM OMNISPORTS.
                      </h3>
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
          <div style={{ height: "700px" }} />
        </Parallax>
      </div>
    </header>
  )
}

export default Header
