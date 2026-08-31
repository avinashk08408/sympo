import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { events } from "../data/events";

export default function Events() {
  const firstRow = events.slice(0, 3);
  const secondRow = events.slice(3, 5);

  const EventCard = ({ event, index }) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.5,
          delay: index * 0.08,
        }}
        whileHover={{
          y: -8,
          scale: 1.02,
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

          border: "1px solid rgba(190, 147, 66, 0.35)",

          background:
            "linear-gradient(145deg, rgba(150,110,40,0.08), rgba(20,10,7,0.45))",

          color: "#d8c28d",

          transition: "0.35s ease",
        }}
      >
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

        <div
          style={{
            width: "58px",
            height: "58px",
            margin: "40px auto 24px",

            borderRadius: "50%",
            border: "1px solid rgba(193,150,70,0.4)",

            display: "flex",
            alignItems: "center",
            justifyContent: "center",

            fontSize: "18px",
            color: "#c19a50",
          }}
        >
          ◆
        </div>


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
            minHeight: "42px",

            padding: "10px 12px",
            boxSizing: "border-box",

            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",

            textDecoration: "none",

            border:
              "1px solid rgba(190,147,66,0.35)",

            background:
              "rgba(154,111,37,0.05)",

            color: "#c9a762",

            fontFamily: "Cinzel, serif",
            fontSize: "7px",
            letterSpacing: "1.4px",
          }}
        >
          <span>MORE INFORMATION</span>

          <span style={{ fontSize: "14px" }}>
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
          TITLE
      ========================================== */}

      <motion.div
        initial={{
          opacity: 0,
          y: 30,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.7,
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
            fontSize: "clamp(30px, 5vw, 55px)",
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
