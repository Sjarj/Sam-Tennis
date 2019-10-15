import React from "react"
import { MDBAnimation } from "mdbreact"

const Streack = () => {
  return (
    <div
      className="streak streak-photo streak-md mask"
      style={{
        backgroundImage: `${`url('https://images.unsplash.com/photo-1558365849-6ebd8b0454b2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60  )`}`,
      }}
    >
      <div className="flex-center rgba-teal-strong mask">
        <div className="white-text smooth-scroll">
          <MDBAnimation reveal type="fadeIn">
            <h2 className="h2-responsive mb-5">
              Les différentes disciplines du club
            </h2>
          </MDBAnimation>
          <div className="text-center">
            <MDBAnimation reveal type="fadeIn" delay="0.2">
              <a
                href="#timetable"
                className="btn btn-outline-white"
                data-offset="100"
              >
                Voir les pratiques
              </a>
            </MDBAnimation>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Streack
