import Link from 'next/link'
import Layout from "../components/layout";
import React from "react";

export default function FirstPost() {
    return (
        <Layout title={'Free trial - Bimbala.com'}>
           <div className="bg-gradient o-hidden position-relative" data-overlay>
      <section className="pb-0">
        <div className="container">
          <div className="row justify-content-around align-items-center">
            <div className="col-lg-6 col-xl-5 mb-4 mb-sm-5 mb-lg-0">
              <div className="text-white text-center text-lg-left mb-4 mb-xl-5" data-aos="fade-up">
                <h1 className="display-3">Try fast, launch quickly.</h1>
                <p className="lead">Get yourself the trial you deserve. You will receive all information on your e-mail.
                </p>
              </div>
              <div className="d-flex flex-wrap justify-content-center justify-content-lg-start">
                <div className="m-2" data-aos="fade-up" data-aos-delay="100">
                  <div className="media rounded align-items-center pl-3 pr-4 pl-md-4 pr-md-5 py-2 bg-white">
                    <img src={"img/icons/theme/navigation/route.svg"} loading="lazy" alt="Binoculars icon" className="icon mr-3"/>
                    <h5 className="mb-0">Fully Responsive</h5>
                  </div>
                </div>
                <div className="m-2" data-aos="fade-up" data-aos-delay="200">
                  <div className="media rounded align-items-center pl-3 pr-4 pl-md-4 pr-md-5 py-2 bg-white">
                    <img src={"img/icons/theme/layout/layout-left-panel-2.svg"} loading="lazy" alt="Layouts icon" className="icon mr-3"/>
                    <h5 className="mb-0">Multiple Components</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xl-5 col-md-9" data-aos="fade-left" data-aos-delay="250">
              <div className="card card-body shadow-lg">
                <form data-form-email novalidate action="#">
                  <div className="form-group">
                    <label for="demo-name">Your Name</label>
                    <input id="demo-name" name="contact-name" type="text" className="form-control" placeholder="Type here" required/>
                    <div className="invalid-feedback">
                      Please type your name.
                    </div>
                  </div>
                  <div className="form-group">
                    <label for="demo-email">Email Address</label>
                    <input id="demo-email" name="contact-email" type="email" className="form-control" placeholder="you@yoursite.com" required/>
                    <div className="invalid-feedback">
                      Please provide your email address.
                    </div>
                  </div>
                  <div className="form-group">
                    <label for="demo-company-size">Company Size</label>
                    <div className="position-relative">
                      <select className="custom-select" id="demo-company-size" required>
                        <option selected value="">Select an option</option>
                        <option value="1-50">1-50</option>
                        <option value="50-500">50-500</option>
                        <option value="500+">500+</option>
                      </select>
                      <img src={"img/icons/interface/icon-caret-down.svg"} loading="lazy" alt="Arrow Down" className="icon icon-sm"/>
                      <div className="invalid-feedback">
                        Please provide your company size.
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label for="demo-budget">Approximate Budget</label>
                    <div className="position-relative">
                      <select className="custom-select" id="demo-budget" required>
                        <option selected value="">Select an option</option>
                        <option value="Up to $10k">Up to $10k</option>
                        <option value="$10k - $50k">$10k - $50k</option>
                        <option value="Over $50k">Over $50k</option>
                      </select>
                      <img src={"img/icons/interface/icon-caret-down.svg"} loading="lazy" alt="Arrow Down" className="icon icon-sm"/>
                      <div className="invalid-feedback">
                        Please provide your approximate budget.
                      </div>
                    </div>
                  </div>
                  <div className="d-none alert alert-success w-100 my-md-3" role="alert" data-success-message>
                    Thanks, a member of our team will be in touch shortly.
                  </div>
                  <div className="d-none alert alert-danger w-100 my-md-3" role="alert" data-error-message>
                    Please fill all fields correctly.
                  </div>
                  <button className="btn btn-primary btn-block btn-loading" type="submit" data-loading-text="Requesting Demo">
                    <span>Request Demo</span>
                  </button>
                </form>

              </div>
            </div>
          </div>
        </div>
        <div className="divider divider-bottom bg-white"></div>
      </section>
      <div className="position-absolute w-50 h-50 bottom right" data-jarallax-element="-50">
        <div className="blob blob-3 w-100 h-100 top right bg-white opacity-10"></div>
      </div>
    </div>
    <div className="divider divider-bottom bg-white"></div>
    <section className="p-0 bg-light">
      <div className="container">
        <div className="row align-items-center justify-content-around">
          <div className="col-md-9 col-lg-6 col-xl-5 mb-4 mb-md-5 mb-lg-0 pl-lg-5 pl-xl-0">
            <div className="text-center text-lg-left">
              <h2 className="h1">Save tons on development and maintance</h2>
              <p className="lead">Berspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
            </div>
            <div id="faq-accordion">
              <div className="card mb-2 mb-md-3">
                <a href="#accordion-1" data-toggle="collapse" role="button" aria-expanded="false" className="p-3 p-md-4">
                  <div className="d-flex justify-content-between align-items-center">
                    <h6 className="mb-0 mr-2">Fully Responsive</h6>
                    <img src={"img/icons/interface/icon-caret-right.svg"} loading="lazy" alt="Caret Right" className="icon icon-sm"/>
                  </div>
                </a>
                <div className="collapse" id="accordion-1" data-parent="#faq-accordion">
                  <div className="px-3 px-md-4 pb-3 pb-md-4">
                    Ned ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque Arya.
                  </div>
                </div>
              </div>
              <div className="card mb-2 mb-md-3">
                <a href="#accordion-2" data-toggle="collapse" role="button" aria-expanded="false" className="p-3 p-md-4">
                  <div className="d-flex justify-content-between align-items-center">
                    <h6 className="mb-0 mr-2">Multiple Layouts</h6>
                    <img src={"img/icons/interface/icon-caret-right.svg"} loading="lazy" alt="Caret Right" className="icon icon-sm"/>
                  </div>
                </a>
                <div className="collapse" id="accordion-2" data-parent="#faq-accordion">
                  <div className="px-3 px-md-4 pb-3 pb-md-4">
                    Non pulvinar neque laoreet suspendisse interdum Catelyn libero id. Olenna imp leo in vitae turpis massa. Sapien habitant Tyrion.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-9 col-lg-5" data-aos="fade-in">
            <img src={"img/square-5.jpg"} alt="Image" className="img-fluid rounded shadow"/>
            <img src={"img/square-4.jpg"} alt="Image" className="position-absolute p-0 col-4 col-xl-5 border border-white border-thick rounded-circle top right shadow-lg mt-5 mr-n5 mr-lg-n3 mr-xl-n5 d-none d-md-block" data-jarallax-element="-20 0"/>
          </div>

        </div>
      </div>
      <div className="divider divider-bottom bg-white"></div>
    </section>
    </Layout>
  )
}