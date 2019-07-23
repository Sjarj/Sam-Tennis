import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top scrolling-navbar">
        <div className="container">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav mr-auto smooth-scroll">
              <li className="nav-item">
                <a className="nav-link" href="#home">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about" data-offset="30">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#team" data-offset="30">
                  Team
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#timetable" data-offset="100">
                  Timetable
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#tickets" data-offset="100">
                  Tickets
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact" data-offset="100">
                  Contact
                </a>
              </li>
            </ul>

            <ul className="navbar-nav nav-flex-icons">
              <li className="nav-item">
                <a className="nav-link">
                  <i className="fab fa-facebook-f light-green-text-2"></i>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link">
                  <i className="fab fa-twitter light-green-text-2"></i>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link">
                  <i className="fab fa-instagram light-green-text-2"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div
        id="home"
        className="view jarallax"
        data-jarallax='{"speed": 0.2}'
        style={{
          backgroundImage: `${`url('https://mdbootstrap.com/img/Photos/Horizontal/Sport/full page/img%20(1).jpg')`}`,
          backgroundRepeat: `no-repeat`,
          backgroundSize: `cover`,
          backgroundPosition: `center`,
        }}
      >
        <div className="mask rgba-black-strong">
          <div className="container h-100 d-flex justify-content-center align-items-center">
            <div className="row smooth-scroll">
              <div className="col-md-12">
                <div className="white-text text-center">
                  <h2 className="display-3 font-weight-bold wow fadeIn">
                    We're the team
                  </h2>
                  <h3 className="wow fadeIn" data-wow-delay="0.2s">
                    Intro subtext
                  </h3>
                  <a
                    href="#about"
                    className="btn btn-outline-white wow fadeIn"
                    data-wow-delay="0.4s"
                  >
                    Meet our team
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

    <main>
      <div className="container">
        <section id="about" className="section py-4">
          <h1 className="section-heading text-center mb-5 my-5 mb-4 font-weight-bold wow fadeIn">
            About us
          </h1>

          <div className="row mb-5 wow fadeIn" data-wow-delay="0.2s">
            <div className="col-lg-4 mb-2">
              <img
                src="https://mdbootstrap.com/img/Photos/Horizontal/People/4-col/img%20(118).jpg"
                alt="My photo"
                className="z-depth-1 img-fluid"
              />
            </div>

            <div className="col-lg-8 mb-2">
              <p className="lead">
                Professional football team, gentlemans, best friends
              </p>
              <p align="justify">
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo
                  animi soluta ratione quisquam, dicta ab cupiditate iure eaque?
                  Repellendus voluptatum, magni impedit eaque delectus, beatae
                  maxime temporibus maiores quibusdam quasi.
                </span>
                <span>
                  Rem magnam ad perferendis iusto sint tempora ea voluptatibus
                  iure, animi excepturi modi aut possimus in hic molestias
                  repellendus illo ullam odit quia velit. Qui expedita sit quo,
                  maxime molestiae.
                </span>
              </p>
              <p align="justify">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi
                sapiente, consequuntur dolore praesentium non suscipit minus
                repudiandae, nesciunt placeat, vel nostrum.
              </p>
            </div>
          </div>
        </section>
      </div>

      <div
        className="streak streak-photo streak-md"
        style={{
          backgroundImage: `${`url('https://mdbootstrap.com/img/Photos/Horizontal/Sport/8-col/img%20(1).jpg')`}`,
        }}
      >
        <div className="flex-center rgba-teal-light mask">
          <div className="white-text smooth-scroll">
            <h2 className="h2-responsive mb-5 wow fadeIn">
              See our team in action
            </h2>
            <div className="text-center">
              <a
                href="#timetable"
                className="btn btn-outline-white wow fadeIn"
                data-offset="100"
                data-wow-delay="0.2s"
              >
                See the timetable
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <section id="team" className="section team-section pt-3">
          <h1 className="section-heading text-center mb-5 mt-5 pt-4 font-weight-bold wow fadeIn">
            Our team
          </h1>

          <p
            className="text-center w-responsive mx-auto wow fadeIn my-5"
            data-wow-delay="0.2s"
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
            maiores aspernatur aut animi debitis. Ad excepturi dolor tempora at
            aperiam earum veritatis ullam. Culpa tempora possimus necessitatibus
            excepturi, quisquam officia.
          </p>

          <div className="row text-center wow fadeIn" data-wow-delay="0.4s">
            <div className="col-md-4 mb-5">
              <div className="avatar mx-auto mb-4">
                <img
                  src="https://mdbootstrap.com/img/Photos/Avatars/img%20(3).jpg"
                  className="z-depth-1 img-fluid"
                />
              </div>
              <h4>John Doe</h4>
              <h5>Goalkeeper</h5>
            </div>

            <div className="col-md-4 mb-5">
              <div className="avatar mx-auto mb-4">
                <img
                  src="https://mdbootstrap.com/img/Photos/Avatars/img%20(9).jpg"
                  className="z-depth-1 img-fluid"
                />
              </div>
              <h4>James Melyah</h4>
              <h5>Defender</h5>
            </div>

            <div className="col-md-4 mb-5">
              <div className="avatar mx-auto mb-4">
                <img
                  src="https://mdbootstrap.com/img/Photos/Avatars/img%20(8).jpg"
                  className="z-depth-1 img-fluid"
                />
              </div>
              <h4>Steve Williams</h4>
              <h5>Forward</h5>
            </div>
          </div>
        </section>

        <hr className="between-sections" />

        <section id="timetable" className="section">
          <h1
            className="section-heading text-center mb-5 mt-5 pt-4 font-weight-bold wow fadeIn"
            data-wow-delay="0.2s"
          >
            Timetable
          </h1>

          <p className="text-center w-responsive mx-auto wow fadeIn my-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia iste
            provident, voluptatum voluptatibus aut modi aspernatur autem
            impedit, eius, debitis earum voluptatem. Quaerat hic aspernatur
            laborum magni earum. At, officiis!
          </p>

          <div className="row wow fadeIn" data-wow-delay="0.4s">
            <div className="col-md-12">
              <div className="table-responsive">
                <table className="table timetable">
                  <tbody>
                    <tr>
                      <td>
                        <strong>Tue 18</strong>
                      </td>
                      <td>
                        <strong>20:45</strong>
                      </td>
                      <td>Legia Warszawa</td>
                      <td>From 25&euro;</td>
                      <td className="smooth-scroll">
                        <a className="btn btn-primary" href="#tickets">
                          Buy ticket
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Sun 23</strong>
                      </td>
                      <td>
                        <strong>20:45</strong>
                      </td>
                      <td>Athletic</td>
                      <td>From 25&euro;</td>
                      <td className="smooth-scroll">
                        <a className="btn btn-primary" href="#tickets">
                          Buy ticket
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>06.11</strong>
                      </td>
                      <td>
                        <strong>12:00</strong>
                      </td>
                      <td>Leganés</td>
                      <td>From 25&euro;</td>
                      <td className="smooth-scroll">
                        <a className="btn btn-primary" href="#tickets">
                          Buy ticket
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>26.11</strong>
                      </td>
                      <td>
                        <strong>16:45</strong>
                      </td>
                      <td>Sporting</td>
                      <td>From 25&euro;</td>
                      <td className="smooth-scroll">
                        <a className="btn btn-primary" href="#tickets">
                          Buy ticket
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>07.11</strong>
                      </td>
                      <td>
                        <strong>20:45</strong>
                      </td>
                      <td>Borussia Dortmund</td>
                      <td>From 45&euro;</td>
                      <td className="smooth-scroll">
                        <a className="btn btn-primary" href="#tickets">
                          Buy ticket
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        <hr className="between-sections" />

        <section id="tickets" className="section">
          <h1
            className="section-heading text-center mb-5 mt-5 pt-4 font-weight-bold wow fadeIn"
            data-wow-delay="0.2s"
          >
            Tickets
          </h1>

          <p className="text-center w-responsive mx-auto wow fadeIn my-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia iste
            provident, voluptatum voluptatibus aut modi aspernatur autem
            impedit, eius, debitis earum voluptatem. Quaerat hic aspernatur
            laborum magni earum. At, officiis!
          </p>

          <div className="row text-center wow fadeIn" data-wow-delay="0.4s">
            <div className="col-lg-4 col-md-12 mb-5">
              <div className="pricing-card naked-card">
                <div className="card-body">
                  <h5 className="font-weight-bold mt-3">Basic</h5>

                  <div className="price pt-0">
                    <h2 className="number mb-0">10</h2>
                  </div>

                  <ul className="striped darker-striped">
                    <li>
                      <p>East side</p>
                    </li>
                    <li>
                      <p>West side</p>
                    </li>
                    <li>
                      <p>North side</p>
                    </li>
                    <li>
                      <p>South side</p>
                    </li>
                  </ul>
                  <a className="btn btn-primary btn-lg"> Buy ticket</a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-12 mb-5">
              <div
                className="card card-image pricing-card"
                style={{
                  backgroundImage: `${`url('https://mdbootstrap.com/img/Photos/Others/img%20(26).jpg')`}`,
                }}
              >
                <div className="text-white text-center pricing-card d-flex align-items-center rgba-black-light py-3 px-3 rounded">
                  <div className="card-body">
                    <h5 className="font-weight-bold mt-2">Pro</h5>

                    <div className="price pt-0">
                      <h2 className="number mb-0">20</h2>
                    </div>

                    <ul className="striped">
                      <li>
                        <p>East side</p>
                      </li>
                      <li>
                        <p>West side</p>
                      </li>
                      <li>
                        <p>North side</p>
                      </li>
                      <li>
                        <p>South side</p>
                      </li>
                    </ul>
                    <a className="btn btn-lg btn-outline-white"> Buy ticket</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-12 mb-5">
              <div className="pricing-card naked-card">
                <div className="card-body">
                  <h5 className="font-weight-bold mt-3">VIP</h5>

                  <div className="price pt-0">
                    <h2 className="number mb-0">30</h2>
                  </div>

                  <ul className="striped darker-striped">
                    <li>
                      <p>East side</p>
                    </li>
                    <li>
                      <p>West side</p>
                    </li>
                    <li>
                      <p>North side</p>
                    </li>
                    <li>
                      <p>South side</p>
                    </li>
                  </ul>
                  <a className="btn btn-primary btn-lg"> Buy ticket</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <hr className="between-sections" />

        <section id="news" className="section news-section">
          <h1
            className="section-heading text-center mb-5 mt-5 pt-4 font-weight-bold wow fadeIn"
            data-wow-delay="0.2s"
          >
            News
          </h1>

          <hr className="between-sections" />
          <div className="row pb-4 pt-3 wow fadeIn" data-wow-delay="0.4s">
            <div className="col-lg-3">
              <div className="view overlay mb-3 z-depth-1">
                <img
                  src="https://mdbootstrap.com/img/Photos/Others/team1.jpg"
                  className="card-img-top"
                  alt="Post Image"
                />
                <div className="mask rgba-white-slight"></div>
              </div>
            </div>

            <div className="col-lg-9 add-margins-2">
              <h6 className="text-uppercase mb-3">
                <a href="#!" className="text-muted grey-text font-weight-bold">
                  | 23 MAY 2017
                </a>
              </h6>
              <h4 className="mb-3">
                <a href="#!" className="teal-text font-weight-bold">
                  This is title of the news
                </a>
              </h4>
              <p className="grey-text-3 font-thin" align="justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.
              </p>
            </div>
          </div>
          <hr className="between-sections mt-4 mb-4" />
          <div className="row pb-4 pt-3 wow fadeIn" data-wow-delay="0.4s">
            <div className="col-lg-3">
              <div className="view overlay mb-3 z-depth-1">
                <img
                  src="https://mdbootstrap.com/img/Photos/Others/team2.jpg"
                  className="card-img-top"
                  alt="Post Image"
                />
                <div className="mask rgba-white-slight"></div>
              </div>
            </div>

            <div className="col-lg-9 add-margins-2">
              <h6 className="text-uppercase mb-3">
                <a href="#!" className="text-muted grey-text font-weight-bold">
                  | 23 MAY 2017
                </a>
              </h6>
              <h4 className="mb-3">
                <a href="#!" className="teal-text font-weight-bold">
                  This is title of the news
                </a>
              </h4>
              <p className="grey-text-3 font-thin" align="justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.
              </p>
            </div>
          </div>
          <hr className="between-sections mt-4 mb-4" />
          <div className="row mb-3 pt-4 wow fadeIn" data-wow-delay="0.4s">
            <div className="col-lg-3">
              <div className="view overlay mb-3 z-depth-1">
                <img
                  src="https://mdbootstrap.com/img/Photos/Others/team3.jpg"
                  className="img-fluid z-depth-1"
                  alt="Post Image"
                />
                <div className="mask rgba-white-slight"></div>
              </div>
            </div>

            <div className="col-lg-9 add-margins-2">
              <h6 className="text-uppercase mb-3">
                <a
                  href="#!"
                  className="text-muted grey-text font-weight-bold pb-1"
                >
                  | 31 JUN 2017
                </a>
              </h6>
              <h4 className="mb-3">
                <a href="#!" className="teal-text font-weight-bold pb-3">
                  This is title of the news
                </a>
              </h4>
              <p className="grey-text-3 font-thin" align="justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident.
              </p>
            </div>
          </div>
        </section>

        <hr className="between-sections" />

        <section id="contact" className="section mb-4">
          <h1 className="section-heading text-center mb-5 mt-5 pt-4 font-weight-bold wow fadeIn">
            Contact us
          </h1>

          <p
            className="text-center w-responsive mx-auto mb-5 wow fadeIn"
            data-wow-delay="0.2s"
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
            error amet numquam iure provident voluptate esse quasi, veritatis
            totam voluptas nostrum quisquam eum porro a pariatur accusamus
            veniam.{" "}
          </p>

          <div className="row wow fadeIn" data-wow-delay="0.4s">
            <div className="col-md-8 mb-5">
              <form>
                <div className="row">
                  <div className="col-md-6">
                    <div className="md-form mb-0">
                      <div className="md-form mb-0">
                        <input
                          type="text"
                          id="form41"
                          className="form-control"
                        />
                        <label htmlFor="form41" className="">
                          Your name
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="md-form mb-0">
                      <div className="md-form mb-0">
                        <input
                          type="text"
                          id="form52"
                          className="form-control"
                        />
                        <label htmlFor="form52" className="">
                          Your email
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12">
                    <div className="md-form mb-0">
                      <input type="text" id="form51" className="form-control" />
                      <label htmlFor="form51" className="">
                        Subject
                      </label>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12">
                    <div className="md-form mb-0">
                      <textarea
                        type="text"
                        id="form76"
                        className="md-textarea form-control"
                        rows="3"
                      ></textarea>
                      <label htmlFor="form76">Your message</label>
                    </div>
                  </div>
                </div>
              </form>

              <div className="text-center text-md-left mt-4">
                <a className="btn btn-primary">Send</a>
              </div>
            </div>

            <div className="col-md-4">
              <ul className="contact-icons list-unstyled text-center">
                <li>
                  <i className="fas fa-map-marker-alt fa-2x"></i>
                  <p>New York, NY 10012, USA</p>
                </li>

                <li>
                  <i className="fas fa-phone fa-2x"></i>
                  <p>+ 01 234 567 89</p>
                </li>

                <li>
                  <i className="fas fa-envelope fa-2x"></i>
                  <p>contact@mdbootstrap.com</p>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>

      <div className="container-fluid py-5" style={{ background: `#b1bace` }}>
        <div className="flex-center">
          <ul className="list-unstyled">
            <li>
              <h3
                className="h3-responsive white-text mt-4 wow fadeIn"
                data-wow-delay="0.2s"
              >
                <i className="fas fa-quote-left" aria-hidden="true"></i> When
                people succeed, it is because of hard work. Luck has nothing to
                do with success.{" "}
                <i className="fas fa-quote-right" aria-hidden="true"></i>
              </h3>
            </li>
            <li>
              <h4
                className="font-italic mt-4 white-text wow fadeIn"
                data-wow-delay="0.4s"
              >
                ~ Diego Maradona
              </h4>
            </li>
          </ul>
        </div>
      </div>
    </main>
  </Layout>
)

export default IndexPage
