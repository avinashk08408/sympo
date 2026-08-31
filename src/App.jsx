import { BrowserRouter, Routes, Route } from "react-router-dom";

import Hero from "./components/Hero";
import Events from "./components/Events";
import Leadership from "./components/Leadership";

import "./App.css";

function Home() {
  return (
    <>
      <Hero />

      {/* ABOUT */}
      <section id="about" className="about-section">
        <div className="about-container">

          <div className="about-heading">
            <span>02</span>
            <p>ENTER THE REALM</p>

            <h2>ABOUT ZYVERSE</h2>

            <div className="about-line">
              <span />
              ◆
              <span />
            </div>
          </div>

          <div className="about-content">

            <div className="about-text">
              <p className="small-title">
                THE BEGINNING
              </p>

              <h3>
                A Realm of
                <br />
                Technology &amp; Challenge
              </h3>

              <p>
                ZYVERSE is a technical symposium that brings
                together curious minds, creators and technology
                enthusiasts for a journey of challenges,
                competitions and innovation.
              </p>

              <p>
                Step into the realm, test your skills,
                challenge your limits and prove your place
                among the finest.
              </p>
            </div>

            <div className="about-card">

              <div className="z-logo">
                Z
              </div>

              <div className="z-name">
                ZYVERSE
              </div>

              <div className="about-info">

                <div>
                  <span>COLLEGE</span>
                  <strong>
                    SRM Valliammai
                    <br />
                    Engineering College
                  </strong>
                </div>

                <div>
                  <span>DEPARTMENT</span>
                  <strong>
                    Cyber Security
                  </strong>
                </div>

                <div>
                  <span>DATE</span>
                  <strong>
                    16 SEPTEMBER 2026
                  </strong>
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* EVENTS */}
      <Events />

      {/* STAFF + ZYVERSE TEAM */}
      <Leadership />

      {/* CONTACT */}
      <section id="contact" className="contact-section">
        <div className="contact-inner">

          <span>05</span>

          <p>GET IN TOUCH</p>

          <h2>
            CONTACT &amp; COLLABORATION
          </h2>

          <div className="contact-divider">
            ◆
          </div>

          <p>
            Join us for ZYVERSE — TIME BOMB
          </p>

          <strong>
            16 SEPTEMBER 2026
          </strong>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">

        <div className="footer-logo">
          <span>Z</span>YVERSE
        </div>

        <p>
          SRM Valliammai Engineering College
        </p>

        <small>
          Department of Cyber Security
        </small>

        <div className="footer-line" />

        <span className="copyright">
          © 2026 ZYVERSE. ALL RIGHTS RESERVED.
        </span>

      </footer>
    </>
  );
}


/* EVENT PAGE */

function EventPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#070605",
        color: "#d8c28d",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        textAlign: "center",
      }}
    >
      <h1>EVENT</h1>

      <p>
        Event details will appear here.
      </p>

      <button
        onClick={() => window.history.back()}
      >
        ← BACK
      </button>
    </div>
  );
}


/* APP */

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/events/:eventId"
          element={<EventPage />}
        />

      </Routes>
    </BrowserRouter>
  );
}
