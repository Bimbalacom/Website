import Link from 'next/link'
import Layout from "../components/layout";
import React from "react";

export default function Integrations() {
  return (
    <Layout title={'Integrations'}>
      <section className="p-0 bg-primary row no-gutters o-hidden">
      <div className="col-lg-5 col-xl-6 d-flex align-items-center justify-content-center">
        <img src={"img/illustrations/integrations.svg"} alt="Integrations"  width="75%" height="75%"/>
        <div className="divider divider-side bg-primary d-none d-lg-block"></div>
      </div>
      <div className="col-lg-7 col-xl-6">
        <section>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col col-md-10 col-xl-9">
                <div className="text-white text-center text-lg-left">
                  <h3 className="h1">Connect your apps</h3>
                  <p className="lead">
                    Get and send all kind of data everywhere. <br />Who doesn't love automatisation?
                  </p>
                </div>
          </div>
            </div>
          </div>
        </section>
      </div>
    </section>
      <section className="no-gutters o-hidden">
        <div className="row section-title justify-content-center text-center">
          <div className="col-md-9 col-lg-8 col-xl-7"><h3 className="display-4">Integrations</h3><div className="lead">We love integrationg other people's projects and that is why we are doing it every day.</div></div></div>
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-md-auto" data-aos={"fade-up"}>
              <div className="px-md-4 px-lg-5 mb-5 mb-md-0" data-aos-delay="0">
               <img src={"img/integrations/GA-logo-color.svg"} alt="Google Analytics" width="150px" height="250px" /><br />
                Google Analytics
              </div>
            </div>
            <div className="col-md-auto" data-aos="fade-up" data-aos-delay="100">
              <div className="px-md-4 px-lg-5 mb-5 mb-md-0">
                <img src={"img/integrations/google-tag-manager.svg"} alt="Google Tag Manager" width="150px" height="250px" /><br />
                Google Tag Manager
              </div>
            </div>
              <div className="col-md-auto" data-aos="fade-up" data-aos-delay="200">
              <div className="px-md-4 px-lg-5 mb-5 mb-md-0">
                <img src={"/img/logos/bimbalaLogo_head.svg"} alt="Bimbala head logo" width="150px" height="250px" /><br />
                More to come ...
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-primary-3 text-white">
        <div className="container">
          <div className="row text-center">
          <h3 className="display-4">Don't see your integration?</h3>
          <div className="lead">Please take a moment and suggest what you think we should integrate. </div>
          </div>
        </div>
      </section>
      <section className="text-white p-0">
        <div className="container-fluid min-vh-100">
          <iframe className={"w-100"}
                  src="https://docs.google.com/forms/d/e/1FAIpQLSeP2JPRbG8QM8b-Q5S7Ovd_cQi23SzkbL37j0WuEIjkPJHaJQ/viewform?embedded=true"
                  frameBorder="0" style={{border: 0, height: '120vh'}} allowFullScreen>Loading...
          </iframe>
        </div>
      </section>
    </Layout>
  )
}