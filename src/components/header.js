import React from "react"
import { MDBAnimation, MDBParallax } from "mdbreact"
import MDBParallaxWrapper from "./MDBParallaxWrapper"

const Header = () => {
  return (
    <header>
      <div id="home" className="view ">
        <MDBParallaxWrapper
          image="https://images.unsplash.com/photo-1570192164067-6f2d28702ae8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
          speed="0.7"
        />
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
