import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { events } from "../data/events";

export default function Events() {
  const firstRow = events.slice(0, 3);
  const secondRow = events.slice(3, 5);

  const EventCard = ({ event, index }) => {
    return (
      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.15,
        }}
        transition={{
          duration: 0.25,
          delay: index * 0.04,
          ease: "easeOut",
        }}
        whileHover={{
          y: -6,
          scale: 1.015,
          transition: {
            duration: 0.15,
            ease: "easeOut",
          },
        }}
        style={{
          width: "100%",
          minWidth: 0,
          minHeight: "330px",

          padding: "28px",
          boxSizing: "border-box",

          display: "flex",
          flexDirection: "column",

          textAlign: "center",

          position: "relative",

          /* Ancient metal / dragon theme */
          background:
            "linear-gradient(145deg, rgba(38,31,20,0.92), rgba(13,10,7,0.98))",

          border:
            "1px solid rgba(174,132,58,0.38)",

          boxShadow:
            "inset 0 0 25px rgba(166,120,42,0.035)",

          color: "#d8c28d",

          overflow: "hidden",

          transition:
            "border-color 0.15s ease, box-shadow 0.15s ease, background 0.15s ease",
        }}
      >

        {/* TOP DECORATIVE LINE */}

        <div
          style={{
            position: "absolute",
            top: 0,
            left: "12%",
            right: "12%",
            height: "1px",
            background:
              "linear-gradient(90deg, transparent, rgba(193,154,80,0.6), transparent)",
          }}
        />


        {/* EVENT NUMBER */}

        <div
          style={{
            fontFamily: "Cinzel, serif",
            fontSize: "8px",
            letterSpacing: "3px",
            color: "#a47a38",
          }}
        >
          EVENT {event.number}
        </div>


        {/* SYMBOL */}

        <motion.div
          whileHover={{
            rotate: 45,
            scale: 1.08,
            transition: {
              duration: 0.15,
            },
          }}
          style={{
            width: "58px",
            height: "58px",

            margin: "40px auto 24px",

            borderRadius: "50%",

            border:
              "1px solid rgba(193,150,70,0.45)",

            display: "flex",
            alignItems: "center",
            justifyContent: "center",

            fontSize: "16px",

            color: "#c19a50",

            boxShadow:
              "0 0 15px rgba(180,130,50,0.06)",
          }}
        >
          ◆
        </motion.div>


        {/* EVENT NAME */}

        <h3
          style={{
            margin: "0 0 12px",

            fontFamily: "Cinzel, serif",

            fontSize: "20px",

            fontWeight: "500",

            lineHeight: "1.35",

            letterSpacing: "1px",

            color: "#d8c28d",
          }}
        >
          {event.name}
        </h3>


        {/* DESCRIPTION */}

        <p
          style={{
            margin: "0 auto",

            maxWidth: "230px",

            fontSize: "11px",

            lineHeight: "1.7",

            color: "#857b6a",
          }}
        >
          {event.tagline}
        </p>


        {/* MORE INFORMATION */}

        <Link
          to={`/events/${event.id}`}
          style={{
            marginTop: "auto",

            width: "100%",

            minHeight: "44px",

            padding: "10px 12px",

            boxSizing: "border-box",

            display: "flex",

            alignItems: "center",

            justifyContent: "space-between",

            textDecoration: "none",

            border:
              "1px solid rgba(193,154,80,0.35)",

            background:
              "rgba(142,103,36,0.045)",

            color: "#c9a762",

            fontFamily: "Cinzel, serif",

            fontSize: "9px",

            letterSpacing: "1.5px",

            transition:
              "all 0.15s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background =
              "rgba(174,132,58,0.13)";

            e.currentTarget.style.borderColor =
              "rgba(211,172,92,0.7)";

            e.currentTarget.style.color =
              "#ead7a7";

            e.currentTarget.style.boxShadow =
              "0 0 15px rgba(174,132,58,0.08)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background =
              "rgba(142,103,36,0.045)";

            e.currentTarget.style.borderColor =
              "rgba(193,154,80,0.35)";

            e.currentTarget.style.color =
              "#c9a762";

            e.currentTarget.style.boxShadow =
              "none";
          }}
        >
          <span>
            MORE INFORMATION
          </span>

          <span
            style={{
              fontSize: "15px",
            }}
          >
            →
          </span>
        </Link>

      </motion.div>
    );
  };


  return (
    <section
      id="events"
      style={{
        width: "100%",

        minHeight: "100vh",

        padding: "120px 7%",

        boxSizing: "border-box",

        background: "#070605",

        overflow: "hidden",
      }}
    >

      {/* ==========================================
          HEADER
      ========================================== */}

      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.3,
          ease: "easeOut",
        }}
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

            fontSize: "9px",

            letterSpacing: "4px",

            color: "#a47a38",
          }}
        >
          03
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
          CHOOSE YOUR BATTLE
        </p>


        <h2
          style={{
            margin: 0,

            fontFamily: "Cinzel, serif",

            fontSize:
              "clamp(30px, 5vw, 55px)",

            fontWeight: "500",

            letterSpacing: "3px",

            color: "#d8c28d",
          }}
        >
          THE FIVE EVENTS
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

      </motion.div>


      {/* ==========================================
          ROW 1

          EVENT 1 | EVENT 2 | EVENT 3
      ========================================== */}

      <div
        style={{
          width: "100%",

          maxWidth: "1000px",

          margin: "0 auto 25px",

          display: "grid",

          gridTemplateColumns:
            "repeat(3, minmax(0, 1fr))",

          gap: "18px",
        }}
      >

        {firstRow.map((event, index) => (
          <EventCard
            key={event.id}
            event={event}
            index={index}
          />
        ))}

      </div>


      {/* ==========================================
          ROW 2

             EVENT 4 | EVENT 5
      ========================================== */}

      <div
        style={{
          width: "66.66%",

          maxWidth: "665px",

          margin: "0 auto",

          display: "grid",

          gridTemplateColumns:
            "repeat(2, minmax(0, 1fr))",

          gap: "18px",
        }}
      >

        {secondRow.map((event, index) => (
          <EventCard
            key={event.id}
            event={event}
            index={index + 3}
          />
        ))}

      </div>

    </section>
  );
}
