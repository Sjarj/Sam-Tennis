import React from "react"
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
} from "mdbreact"

const SliderPrice = () => {
  return (
    <MDBContainer>
      <MDBCarousel
        activeItem={1}
        length={3}
        slide={true}
        showControls={true}
        showIndicators={true}
        multiItem
      >
        <MDBCarouselInner>
          <MDBRow>
            <MDBCarouselItem itemId="1">
              <MDBCol md="4">
                <MDBCard
                  className="card-image"
                  style={{
                    backgroundImage:
                      'url("https://images.unsplash.com/photo-1485908953667-cf6d88997642?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=80")',
                  }}
                >
                  <div className="text-white text-center pricing-card d-flex align-items-center rgba-stylish-strong py-3 px-3 rounded">
                    <MDBCardBody>
                      <h5>Tarifs</h5>

                      <ul className="striped mb-0">
                        <li>
                          <p>
                            Adultes Licence incluse <strong>196 €</strong>
                          </p>
                        </li>
                        <li>
                          <p>
                            Couples Licences incluses <strong>310 €</strong>
                          </p>
                        </li>
                        <li>
                          <p>
                            Supplément Roseraie 4 courts couverts en terre
                            battue <br /> Adulte <strong>96 €</strong> Couple{" "}
                            <strong>142 €</strong>
                          </p>
                        </li>
                        <li>
                          <p>
                            Jeunes Licence incluse <strong>117 €</strong>
                          </p>
                        </li>
                        <li>
                          <p>
                            Etudiants Licence incluse <strong>148 €</strong>
                          </p>
                        </li>
                      </ul>
                    </MDBCardBody>
                  </div>
                </MDBCard>
              </MDBCol>
              <MDBCol md="4">
                <MDBCard className="mb-2">
                  <MDBCardImage
                    className="img-fluid"
                    src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(35).jpg"
                  />
                  <MDBCardBody>
                    <MDBCardTitle>MDBCard title</MDBCardTitle>
                    <MDBCardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </MDBCardText>
                    <MDBBtn color="primary">MDBBtn</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="2">
              <MDBCol md="4">
                <MDBCard
                  className="card-image"
                  style={{
                    backgroundImage:
                      'url("https://mdbootstrap.com/img/Photos/Others/pricing-table%20(6).jpg")',
                  }}
                >
                  <div className="text-white text-center pricing-card d-flex align-items-center rgba-stylish-strong py-3 px-3 rounded">
                    <MDBCardBody>
                      <h5>Tarifs</h5>

                      <ul className="striped mb-0">
                        <li>
                          <p>
                            Adultes Licence incluse <strong>196 €</strong>
                          </p>
                        </li>
                        <li>
                          <p>
                            Couples Licences incluses <strong>310 €</strong>
                          </p>
                        </li>
                        <li>
                          <p>
                            Supplément Roseraie 4 courts couverts en terre
                            battue <br /> Adulte <strong>96 €</strong> Couple{" "}
                            <strong>142 €</strong>
                          </p>
                        </li>
                        <li>
                          <p>
                            Jeunes Licence incluse <strong>117 €</strong>
                          </p>
                        </li>
                        <li>
                          <p>
                            Etudiants Licence incluse <strong>148 €</strong>
                          </p>
                        </li>
                      </ul>
                    </MDBCardBody>
                  </div>
                </MDBCard>
              </MDBCol>
              <MDBCol md="4">
                <MDBCard className="mb-2">
                  <MDBCardImage
                    className="img-fluid"
                    src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(48).jpg"
                  />
                  <MDBCardBody>
                    <MDBCardTitle>MDBCard title</MDBCardTitle>
                    <MDBCardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </MDBCardText>
                    <MDBBtn color="primary">MDBBtn</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="3">
              <MDBCol md="4">
                <MDBCard className="mb-2">
                  <MDBCardImage
                    className="img-fluid"
                    src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(53).jpg"
                  />
                  <MDBCardBody>
                    <MDBCardTitle>MDBCard title</MDBCardTitle>
                    <MDBCardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </MDBCardText>
                    <MDBBtn color="primary">MDBBtn</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol md="4">
                <MDBCard className="mb-2">
                  <MDBCardImage
                    className="img-fluid"
                    src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(45).jpg"
                  />
                  <MDBCardBody>
                    <MDBCardTitle>MDBCard title</MDBCardTitle>
                    <MDBCardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </MDBCardText>
                    <MDBBtn color="primary">MDBBtn</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol md="4">
                <MDBCard className="mb-2">
                  <MDBCardImage
                    className="img-fluid"
                    src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(41).jpg"
                  />
                  <MDBCardBody>
                    <MDBCardTitle>MDBCard title</MDBCardTitle>
                    <MDBCardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </MDBCardText>
                    <MDBBtn color="primary">MDBBtn</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBCarouselItem>
          </MDBRow>
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
  )
}

export default SliderPrice
