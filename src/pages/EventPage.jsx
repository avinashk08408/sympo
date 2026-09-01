import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";

import { events } from "../data/events";

const EVENT_VIDEO =
  "https://res.cloudinary.com/egrvexxs/video/upload/v1788282471/InShot_20260831_191916680.mp4";

function EventPage() {
  const { eventId } = useParams();

  const event = events.find(
    (item) => item.id === eventId
  );

  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, [eventId]);

  if (!event) {
    return (
      <main
        style={{
          minHeight: "100vh",

          display: "flex",

          alignItems: "center",

          justifyContent: "center",

          flexDirection: "column",

          gap: "25px",

          background: "#070605",

          color: "#d8c28d",

          textAlign: "center",

          padding: "30px",
        }}
      >
        <h1
          style={{
            fontFamily: "Cinzel, serif",
          }}
        >
          EVENT NOT FOUND
        </h1>

        <Link
          to="/"
          style={{
            color: "#c19a50",
          }}
        >
          RETURN TO THE REALM
        </Link>
      </main>
    );
  }

  return (
    <main
      style={{
        minHeight: "100vh",

        background: "#070605",

        color: "#d8c28d",
      }}
    >
      {/* ==========================================
          VIDEO INTRO
      ========================================== */}

      {showIntro && (
        <motion.div
          initial={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          style={{
            position: "fixed",

            inset: 0,

            zIndex: 9999,

            background: "#000",

            display: "flex",

            alignItems: "center",

            justifyContent: "center",

            overflow: "hidden",
          }}
        >
          {/* VIDEO */}
          <video
            autoPlay
            muted
            playsInline
            preload="auto"
            onEnded={() => {
              setShowIntro(false);
            }}
            style={{
              width: "100%",

              height: "100%",

              objectFit: "cover",
            }}
          >
            <source
              src={EVENT_VIDEO}
              type="video/mp4"
            />
          </video>

          {/* VIDEO DARK OVERLAY */}
          <div
            style={{
              position: "absolute",

              inset: 0,

              background:
                "linear-gradient(180deg, rgba(0,0,0,0.2), rgba(0,0,0,0.45))",

              pointerEvents: "none",
            }}
          />

          {/* EVENT TITLE */}
          <div
            style={{
              position: "absolute",

              left: "30px",

              bottom: "40px",

              zIndex: 2,
            }}
          >
            <p
              style={{
                margin: "0 0 8px",

                fontFamily: "Cinzel, serif",

                fontSize: "10px",

                letterSpacing: "4px",

                color: "#c19a50",
              }}
            >
              EVENT {event.number}
            </p>

            <h1
              style={{
                margin: 0,

                fontFamily: "Cinzel, serif",

                fontSize:
                  "clamp(28px, 6vw, 60px)",

                fontWeight: 500,

                color: "#ead7a7",

                textShadow:
                  "0 3px 20px rgba(0,0,0,0.9)",
              }}
            >
              {event.name}
            </h1>
          </div>

          {/* SKIP BUTTON */}
          <button
            onClick={() => {
              setShowIntro(false);
            }}
            style={{
              position: "absolute",

              top: "25px",

              right: "25px",

              zIndex: 3,

              padding: "12px 18px",

              background:
                "rgba(7,6,5,0.72)",

              border:
                "1px solid rgba(193,154,80,0.65)",

              color: "#ead7a7",

              fontFamily: "Cinzel, serif",

              fontSize: "11px",

              letterSpacing: "2px",

              cursor: "pointer",

              backdropFilter: "blur(6px)",
            }}
          >
            SKIP INTRO →
          </button>
        </motion.div>
      )}

      {/* ==========================================
          EVENT CONTENT
      ========================================== */}

      <div
        style={{
          width: "100%",

          maxWidth: "1100px",

          margin: "0 auto",

          padding: "40px 7% 100px",

          boxSizing: "border-box",
        }}
      >
        {/* BACK */}
        <Link
          to="/"
          style={{
            display: "inline-block",

            marginBottom: "70px",

            color: "#a47a38",

            textDecoration: "none",

            fontFamily: "Cinzel, serif",

            fontSize: "11px",

            letterSpacing: "2px",
          }}
        >
          ← RETURN TO THE REALM
        </Link>

        {/* HERO */}
        <motion.section
          initial={{
            opacity: 0,
            y: 25,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.35,
          }}
          style={{
            textAlign: "center",

            paddingBottom: "80px",
          }}
        >
          <p
            style={{
              margin: "0 0 15px",

              fontFamily: "Cinzel, serif",

              fontSize: "10px",

              letterSpacing: "5px",

              color: "#a47a38",
            }}
          >
            EVENT {event.number}
          </p>

          <div
            style={{
              width: "65px",

              height: "65px",

              margin: "0 auto 25px",

              borderRadius: "50%",

              border:
                "1px solid rgba(193,154,80,0.55)",

              display: "flex",

              alignItems: "center",

              justifyContent: "center",

              color: "#c19a50",

              fontSize: "18px",
            }}
          >
            ◆
          </div>

          <h1
            style={{
              margin: 0,

              fontFamily: "Cinzel, serif",

              fontSize:
                "clamp(38px, 7vw, 80px)",

              fontWeight: 500,

              lineHeight: 1.1,

              color: "#d8c28d",
            }}
          >
            {event.name}
          </h1>

          <p
            style={{
              marginTop: "20px",

              color: "#9a8d75",

              fontSize: "14px",
            }}
          >
            {event.category}
          </p>

          <blockquote
            style={{
              maxWidth: "650px",

              margin: "30px auto",

              fontFamily: "Cinzel, serif",

              fontSize: "15px",

              lineHeight: 1.8,

              color: "#b9a77f",

              fontStyle: "italic",
            }}
          >
            "{event.tagline}"
          </blockquote>
        </motion.section>

        {/* ABOUT */}
        <section
          style={{
            padding:
              "70px 0",

            borderTop:
              "1px solid rgba(193,154,80,0.15)",
          }}
        >
          <p
            style={{
              fontFamily: "Cinzel, serif",

              fontSize: "10px",

              letterSpacing: "4px",

              color: "#a47a38",
            }}
          >
            ABOUT THE EVENT
          </p>

          <h2
            style={{
              fontFamily: "Cinzel, serif",

              fontSize:
                "clamp(25px, 5vw, 45px)",

              fontWeight: 500,

              color: "#d8c28d",
            }}
          >
            THE BATTLE AWAITS
          </h2>

          <p
            style={{
              maxWidth: "800px",

              fontSize: "15px",

              lineHeight: 1.9,

              color: "#a79a82",
            }}
          >
            {event.description}
          </p>
        </section>

        {/* DETAILS */}
        <section
          style={{
            display: "grid",

            gridTemplateColumns:
              "repeat(3, 1fr)",

            gap: "18px",

            marginBottom: "80px",
          }}
        >
          <Detail
            title="TEAM SIZE"
            value={event.teamSize}
          />

          <Detail
            title="DURATION"
            value={event.duration}
          />

          <Detail
            title="VENUE"
            value={event.venue}
          />
        </section>

        {/* RULES */}
        <section
          style={{
            padding:
              "70px 0",

            borderTop:
              "1px solid rgba(193,154,80,0.15)",
          }}
        >
          <p
            style={{
              fontFamily: "Cinzel, serif",

              fontSize: "10px",

              letterSpacing: "4px",

              color: "#a47a38",
            }}
          >
            THE LAWS OF THE REALM
          </p>

          <h2
            style={{
              fontFamily: "Cinzel, serif",

              fontSize:
                "clamp(25px, 5vw, 45px)",

              fontWeight: 500,

              color: "#d8c28d",
            }}
          >
            RULES & REGULATIONS
          </h2>

          <ol
            style={{
              padding: 0,

              marginTop: "40px",

              listStyle: "none",
            }}
          >
            {event.rules.map(
              (rule, index) => (
                <li
                  key={index}
                  style={{
                    display: "flex",

                    gap: "20px",

                    padding:
                      "20px 0",

                    borderBottom:
                      "1px solid rgba(193,154,80,0.12)",

                    color: "#aaa08c",

                    fontSize: "14px",

                    lineHeight: 1.7,
                  }}
                >
                  <span
                    style={{
                      color: "#c19a50",

                      fontFamily:
                        "Cinzel, serif",

                      minWidth: "30px",
                    }}
                  >
                    {String(
                      index + 1
                    ).padStart(2, "0")}
                  </span>

                  <span>
                    {rule}
                  </span>
                </li>
              )
            )}
          </ol>
        </section>

        {/* REGISTER */}
        <section
          style={{
            marginTop: "70px",

            padding: "70px 30px",

            textAlign: "center",

            border:
              "1px solid rgba(193,154,80,0.25)",

            background:
              "linear-gradient(145deg, rgba(38,31,20,0.7), rgba(13,10,7,0.9))",
          }}
        >
          <p
            style={{
              fontFamily: "Cinzel, serif",

              fontSize: "10px",

              letterSpacing: "4px",

              color: "#a47a38",
            }}
          >
            YOUR JOURNEY BEGINS
          </p>

          <h2
            style={{
              fontFamily: "Cinzel, serif",

              fontSize:
                "clamp(28px, 5vw, 50px)",

              color: "#d8c28d",

              fontWeight: 500,
            }}
          >
            CLAIM YOUR PLACE
          </h2>

          <p
            style={{
              color: "#978c77",

              marginBottom: "30px",
            }}
          >
            Gather your team and prepare
            for the challenge.
          </p>

          <button
            style={{
              padding: "15px 28px",

              border:
                "1px solid #a47a38",

              background:
                "rgba(174,132,58,0.08)",

              color: "#d8c28d",

              fontFamily: "Cinzel, serif",

              letterSpacing: "2px",

              cursor: "pointer",
            }}
          >
            REGISTER NOW
          </button>
        </section>
      </div>

      {/* RESPONSIVE */}
      <style>
        {`
          @media (max-width: 650px) {
            .event-details-grid {
              grid-template-columns: 1fr !important;
            }
          }
        `}
      </style>
    </main>
  );
}

function Detail({ title, value }) {
  return (
    <div
      style={{
        padding: "25px",

        border:
          "1px solid rgba(193,154,80,0.2)",

        background:
          "rgba(25,20,14,0.65)",
      }}
    >
      <span
        style={{
          display: "block",

          marginBottom: "10px",

          fontFamily: "Cinzel, serif",

          fontSize: "9px",

          letterSpacing: "3px",

          color: "#a47a38",
        }}
      >
        {title}
      </span>

      <strong
        style={{
          color: "#d8c28d",

          fontFamily: "Cinzel, serif",

          fontWeight: 500,
        }}
      >
        {value}
      </strong>
    </div>
  );
}

export default EventPage;
