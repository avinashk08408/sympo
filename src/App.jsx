import { BrowserRouter, Routes, Route } from "react-router-dom";

import Hero from "./components/Hero";
import Events from "./components/Events";
import Leadership from "./components/Leadership";

import "./App.css";


/* =====================================================
   HOME PAGE
===================================================== */

function Home() {
  return (
    <>
      {/* ================= HERO ================= */}
      <Hero />


      {/* ================= ABOUT ================= */}
      <section
        id="about"
        style={{
          minHeight: "100vh",
          padding: "120px 7%",
          boxSizing: "border-box",
          background: "#070605",
          color: "#d8c28d",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "1100px",
            margin: "0 auto",
          }}
        >

          {/* ABOUT HEADER */}
          <div
            style={{
              textAlign: "center",
              marginBottom: "65px",
            }}
          >
            <span
              style={{
                display: "block",
                marginBottom: "10px",
                fontFamily: "Cinzel, serif",
                fontSize: "10px",
                letterSpacing: "4px",
                color: "#a47a38",
              }}
            >
              02
            </span>

            <p
              style={{
                margin: "0 0 12px",
                fontFamily: "Cinzel, serif",
                fontSize: "8px",
                letterSpacing: "4px",
                color: "#756d5d",
              }}
            >
              ENTER THE REALM
            </p>

            <h2
              style={{
                margin: 0,
                fontFamily: "Cinzel, serif",
                fontSize: "clamp(32px, 5vw, 55px)",
                fontWeight: "500",
                letterSpacing: "3px",
                color: "#d8c28d",
              }}
            >
              ABOUT ZYVERSE
            </h2>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
                marginTop: "22px",
              }}
            >
              <span
                style={{
                  width: "70px",
                  height: "1px",
                  background: "#80612f",
                }}
              />

              <b
                style={{
                  fontSize: "6px",
                  color: "#c19a50",
                }}
              >
                ◆
              </b>

              <span
                style={{
                  width: "70px",
                  height: "1px",
                  background: "#80612f",
                }}
              />
            </div>
          </div>


          {/* ABOUT CONTENT */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "55px",
              alignItems: "center",
            }}
          >

            {/* LEFT */}
            <div>
              <p
                style={{
                  fontFamily: "Cinzel, serif",
                  fontSize: "10px",
                  letterSpacing: "3px",
                  color: "#a47a38",
                  marginBottom: "18px",
                }}
              >
                THE BEGINNING
              </p>

              <h3
                style={{
                  fontFamily: "Cinzel, serif",
                  fontSize: "30px",
                  fontWeight: "500",
                  lineHeight: "1.3",
                  color: "#d8c28d",
                  marginBottom: "25px",
                }}
              >
                A Realm of
                <br />
                Technology &amp; Challenge
              </h3>

              <p
                style={{
                  color: "#8b806d",
                  fontSize: "14px",
                  lineHeight: "1.9",
                  maxWidth: "550px",
                }}
              >
                ZYVERSE is a technical symposium that brings
                together curious minds, creators and
                technology enthusiasts for a journey of
                challenges, competitions and innovation.
              </p>

              <p
                style={{
                  color: "#8b806d",
                  fontSize: "14px",
                  lineHeight: "1.9",
                  maxWidth: "550px",
                  marginTop: "15px",
                }}
              >
                Step into the realm, test your skills,
                challenge your limits and prove your place
                among the finest.
              </p>
            </div>


            {/* RIGHT — EVENT INFO */}
            <div
              style={{
                border: "1px solid rgba(190,147,66,0.3)",
                padding: "40px",
                background:
                  "linear-gradient(145deg, rgba(150,110,40,0.07), rgba(20,10,7,0.4))",
              }}
            >

              <div
                style={{
                  textAlign: "center",
                  marginBottom: "30px",
                }}
              >
                <div
                  style={{
                    fontFamily: "Cinzel, serif",
                    fontSize: "45px",
                    color: "#c19a50",
                  }}
                >
                  Z
                </div>

                <div
                  style={{
                    fontFamily: "Cinzel, serif",
                    fontSize: "10px",
                    letterSpacing: "4px",
                    color: "#756d5d",
                  }}
                >
                  ZYVERSE
                </div>
              </div>


              <div
                style={{
                  borderTop:
                    "1px solid rgba(190,147,66,0.2)",
                  paddingTop: "20px",
                }}
              >

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "12px 0",
                  }}
                >
                  <span
                    style={{
                      fontSize: "9px",
                      letterSpacing: "2px",
                      color: "#756d5d",
                    }}
                  >
                    COLLEGE
                  </span>

                  <span
                    style={{
                      fontSize: "11px",
                      color: "#cbb98b",
                      textAlign: "right",
                    }}
                  >
                    SRM Valliammai
                    <br />
                    Engineering College
                  </span>
                </div>


                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "12px 0",
                    borderTop:
                      "1px solid rgba(190,147,66,0.12)",
                  }}
                >
                  <span
                    style={{
                      fontSize: "9px",
                      letterSpacing: "2px",
                      color: "#756d5d",
                    }}
                  >
                    DEPARTMENT
                  </span>

                  <span
                    style={{
                      fontSize: "11px",
                      color: "#cbb98b",
                      textAlign: "right",
                    }}
                  >
                    Cyber Security
                  </span>
                </div>


                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "12px 0",
                    borderTop:
                      "1px solid rgba(190,147,66,0.12)",
                  }}
                >
                  <span
                    style={{
                      fontSize: "9px",
                      letterSpacing: "2px",
                      color: "#756d5d",
                    }}
                  >
                    DATE
                  </span>

                  <span
                    style={{
                      fontSize: "11px",
                      color: "#cbb98b",
                    }}
                  >
                    16 SEPTEMBER 2026
                  </span>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ================= EVENTS ================= */}
      <Events />


      {/* ================= STAFF + TEAM ================= */}
      <Leadership />


      {/* ================= CONTACT ================= */}
      <section
        id="contact"
        className="contact-section"
      >
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


      {/* ================= FOOTER ================= */}
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


/* =====================================================
   EVENT PAGE
===================================================== */

function EventPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#070605",
        color: "#d8c28d",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "30px",
      }}
    >
      <h1
        style={{
          fontFamily: "Cinzel, serif",
          letterSpacing: "4px",
        }}
      >
        EVENT
      </h1>

      <p
        style={{
          color: "#8b806c",
          marginBottom: "30px",
        }}
      >
        Event details will appear here.
      </p>

      <button
        onClick={() => window.history.back()}
        style={{
          padding: "12px 25px",
          background: "transparent",
          border: "1px solid #a47a38",
          color: "#c9a762",
          cursor: "pointer",
          letterSpacing: "2px",
        }}
      >
        ← BACK
      </button>
    </main>
  );
}


/* =====================================================
   APP
===================================================== */

export default function App() {
  return (
    <BrowserRouter basename="/sympo">
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
