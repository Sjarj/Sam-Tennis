/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { MDBAnimation } from "mdbreact"
import Header from "./header"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header />
      <main>{children}</main>
      <footer>
        <div className="container-fluid py-5" style={{ background: `#b1bace` }}>
          <div className="flex-center">
            <ul className="list-unstyled">
              <li>
                <MDBAnimation reveal type="fadeIn" delay="0.2s">
                  <h3 className="h3-responsive white-text mt-4">
                    <i className="fas fa-quote-left" aria-hidden="true"></i> On
                    gagne plus avec le coeur, avec la volonté qu'avec autre
                    chose.{" "}
                    <i className="fas fa-quote-right" aria-hidden="true"></i>
                  </h3>
                </MDBAnimation>
              </li>
              <li>
                <MDBAnimation reveal type="fadeIn" delay="0.2s">
                  <h4 className="font-italic mt-4 white-text">
                    ~ Rafael Nadal
                  </h4>
                </MDBAnimation>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
