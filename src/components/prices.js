import React, { Component } from "react"
import {
  MDBContainer,
  MDBCollapse,
  MDBCardBody,
  MDBCollapseHeader,
  MDBCol,
  MDBView,
  MDBMask,
  MDBAnimation,
  MDBRow,
} from "mdbreact"

class Prices extends Component {
  state = {
    collapseID: "collapse1",
  }

  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : "",
    }))

  render() {
    const { collapseID } = this.state
    return (
      <MDBContainer>
        <MDBAnimation reveal type="fadeIn">
          <h1 className="section-heading text-center  my-5 font-weight-bold ">
            TARIFS
          </h1>
        </MDBAnimation>
        <MDBContainer className="mt-5">
          <MDBRow>
            <div className="col-lg-6">
              <div className="row mb-3">
                <div className="col-md-1 col-2">
                  <i className="fas fa-book-open purple-pastel fa-2x"></i>
                </div>
                <div className="col-md-11 col-10">
                  <h5 className="font-weight-bold purple-pastel mb-2">
                    Desks for any period
                  </h5>
                  <p className="grey-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing.
                    Reprehenderit maiores nam, aperiam minima elit assumenda
                    voluptate velit.
                  </p>
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-md-1 col-2">
                  <i className="fas fa-wifi green-pastel fa-2x"></i>
                </div>
                <div className="col-md-11 col-10">
                  <h5 className="font-weight-bold green-pastel mb-2">
                    Fast Internet
                  </h5>
                  <p className="grey-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing.
                    Reprehenderit maiores nam, aperiam minima elit assumenda
                    voluptate velit.
                  </p>
                </div>
              </div>

              <div className="row">
                <div className="col-md-1 col-2">
                  <i className="far fa-clock orange-pastel fa-2x"></i>
                </div>
                <div className="col-md-11 col-10">
                  <h5 className="font-weight-bold orange-pastel mb-2">
                    Access 24/7
                  </h5>
                  <p className="grey-text mb-0">
                    Lorem ipsum dolor sit amet, consectetur adipisicing.
                    Reprehenderit maiores nam, aperiam minima elit assumenda
                    voluptate velit.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row mb-3">
                <div className="col-md-1 col-2">
                  <i className="fas fa-book-open purple-pastel fa-2x"></i>
                </div>
                <div className="col-md-11 col-10">
                  <h5 className="font-weight-bold purple-pastel mb-2">
                    Desks for any period
                  </h5>
                  <p className="grey-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing.
                    Reprehenderit maiores nam, aperiam minima elit assumenda
                    voluptate velit.
                  </p>
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-md-1 col-2">
                  <i className="fas fa-wifi green-pastel fa-2x"></i>
                </div>
                <div className="col-md-11 col-10">
                  <h5 className="font-weight-bold green-pastel mb-2">
                    Fast Internet
                  </h5>
                  <p className="grey-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing.
                    Reprehenderit maiores nam, aperiam minima elit assumenda
                    voluptate velit.
                  </p>
                </div>
              </div>

              <div className="row">
                <div className="col-md-1 col-2">
                  <i className="far fa-clock orange-pastel fa-2x"></i>
                </div>
                <div className="col-md-11 col-10">
                  <h5 className="font-weight-bold orange-pastel mb-2">
                    Access 24/7
                  </h5>
                  <p className="grey-text mb-0">
                    Lorem ipsum dolor sit amet, consectetur adipisicing.
                    Reprehenderit maiores nam, aperiam minima elit assumenda
                    voluptate velit.
                  </p>
                </div>
              </div>
            </div>
          </MDBRow>
          <div className="row my-5">
            <MDBCol lg="6">
              <MDBCollapseHeader onClick={this.toggleCollapse("collapse1")}>
                <span
                  className="indigo-text font-weight-bolder"
                  style={{ backgroundColor: `white` }}
                >
                  <em>TARIFS 2019 - 2020</em>
                </span>{" "}
                <i
                  style={{ float: `right` }}
                  className={` ${
                    collapseID === "collapse1"
                      ? "fa fa-angle-down rotate-icon"
                      : "fa fa-angle-down"
                  } indigo-text`}
                />
              </MDBCollapseHeader>
              <MDBCollapse id="collapse1" isOpen={collapseID}>
                <MDBCardBody>
                  Pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid. 3 wolf moon officia aute,
                  non cupidatat skateboard dolor brunch. Food truck quinoa
                  nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                  aliqua put a bird on it squid single-origin coffee nulla
                  assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft
                  beer labore wes anderson cred nesciunt sapiente ea proident.
                  Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                  beer farm-to-table, raw denim aesthetic synth nesciunt you
                  probably haven&apos;t heard of them accusamus labore
                  sustainable VHS.
                </MDBCardBody>
              </MDBCollapse>

              <MDBCollapseHeader onClick={this.toggleCollapse("collapse2")}>
                <span className="indigo-text font-weight-bolder">
                  {" "}
                  <em>ÉCOLE DE TENNIS 2019-2020</em>
                </span>{" "}
                <i
                  style={{ float: `right` }}
                  className={` ${
                    collapseID === "collapse2"
                      ? "fa fa-angle-down rotate-icon"
                      : "fa fa-angle-down"
                  } indigo-text`}
                />
              </MDBCollapseHeader>
              <MDBCollapse id="collapse2" isOpen={collapseID}>
                <MDBCardBody>
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid. 3 wolf moon officia aute,
                  non cupidatat skateboard dolor brunch. Food truck quinoa
                  nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                  aliqua put a bird on it squid single-origin coffee nulla
                  assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft
                  beer labore wes anderson cred nesciunt sapiente ea proident.
                  Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                  beer farm-to-table, raw denim aesthetic synth nesciunt you
                  probably haven&apos;t heard of them accusamus labore
                  sustainable VHS.
                </MDBCardBody>
              </MDBCollapse>

              <MDBCollapseHeader onClick={this.toggleCollapse("collapse3")}>
                <span className="indigo-text font-weight-bolder">
                  <em>COURS COLLECTIFS JEUNES 2019-2020 </em>
                </span>{" "}
                <i
                  style={{ float: `right` }}
                  className={` ${
                    collapseID === "collapse3"
                      ? "fa fa-angle-down rotate-icon"
                      : "fa fa-angle-down"
                  } indigo-text`}
                />
              </MDBCollapseHeader>
              <MDBCollapse id="collapse3" isOpen={collapseID}>
                <MDBCardBody>
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid. 3 wolf moon officia aute,
                  non cupidatat skateboard dolor brunch. Food truck quinoa
                  nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                  aliqua put a bird on it squid single-origin coffee nulla
                  assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft
                  beer labore wes anderson cred nesciunt sapiente ea proident.
                  Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                  beer farm-to-table, raw denim aesthetic synth nesciunt you
                  probably haven&apos;t heard of them accusamus labore
                  sustainable VHS.
                </MDBCardBody>
              </MDBCollapse>

              <MDBCollapseHeader onClick={this.toggleCollapse("collapse4")}>
                <span className="indigo-text font-weight-bolder">
                  {" "}
                  <em>ÉCOLE DE COMPÉTITION</em>
                </span>{" "}
                <i
                  style={{ float: `right` }}
                  className={` ${
                    collapseID === "collapse4"
                      ? "fa fa-angle-down rotate-icon"
                      : "fa fa-angle-down"
                  } indigo-text`}
                />
              </MDBCollapseHeader>
              <MDBCollapse id="collapse4" isOpen={collapseID}>
                <MDBCardBody>
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid. 3 wolf moon officia aute,
                  non cupidatat skateboard dolor brunch. Food truck quinoa
                  nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                  aliqua put a bird on it squid single-origin coffee nulla
                  assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft
                  beer labore wes anderson cred nesciunt sapiente ea proident.
                  Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                  beer farm-to-table, raw denim aesthetic synth nesciunt you
                  probably haven&apos;t heard of them accusamus labore
                  sustainable VHS.
                </MDBCardBody>
              </MDBCollapse>

              <MDBCollapseHeader onClick={this.toggleCollapse("collapse5")}>
                <span className="indigo-text font-weight-bolder">
                  {" "}
                  <em>DROIT D'ENTRÉE</em>
                </span>{" "}
                <i
                  style={{ float: `right` }}
                  className={` ${
                    collapseID === "collapse5"
                      ? "fa fa-angle-down rotate-icon"
                      : "fa fa-angle-down"
                  } indigo-text`}
                />
              </MDBCollapseHeader>
              <MDBCollapse id="collapse5" isOpen={collapseID}>
                <MDBCardBody>
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid. 3 wolf moon officia aute,
                  non cupidatat skateboard dolor brunch. Food truck quinoa
                  nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                  aliqua put a bird on it squid single-origin coffee nulla
                  assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft
                  beer labore wes anderson cred nesciunt sapiente ea proident.
                  Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                  beer farm-to-table, raw denim aesthetic synth nesciunt you
                  probably haven&apos;t heard of them accusamus labore
                  sustainable VHS.
                </MDBCardBody>
              </MDBCollapse>

              <MDBCollapseHeader onClick={this.toggleCollapse("collapse6")}>
                <span className="indigo-text font-weight-bolder">
                  {" "}
                  <em>INVITÉ</em>
                </span>{" "}
                <i
                  style={{ float: `right` }}
                  className={` ${
                    collapseID === "collapse6"
                      ? "fa fa-angle-down rotate-icon"
                      : "fa fa-angle-down"
                  } indigo-text`}
                />
              </MDBCollapseHeader>
              <MDBCollapse id="collapse6" isOpen={collapseID}>
                <MDBCardBody>
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid. 3 wolf moon officia aute,
                  non cupidatat skateboard dolor brunch. Food truck quinoa
                  nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                  aliqua put a bird on it squid single-origin coffee nulla
                  assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft
                  beer labore wes anderson cred nesciunt sapiente ea proident.
                  Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                  beer farm-to-table, raw denim aesthetic synth nesciunt you
                  probably haven&apos;t heard of them accusamus labore
                  sustainable VHS.
                </MDBCardBody>
              </MDBCollapse>
            </MDBCol>
            <div className="col-lg-6">
              <MDBView>
                <img
                  src="https://images.unsplash.com/photo-1570192164067-6f2d28702ae8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
                  alt="court de tennis"
                  className="z-depth-1 img-fluid rounded"
                />
                <MDBMask
                  overlay="purple-light"
                  className="flex-center"
                ></MDBMask>
              </MDBView>
            </div>
          </div>
        </MDBContainer>
      </MDBContainer>
    )
  }
}

export default Prices
