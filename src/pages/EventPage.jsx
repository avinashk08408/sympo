import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";

import { events } from "../data/events";

function EventPage() {
  const { eventId } = useParams();

  const event = events.find(
    (item) => item.id === eventId
  );

  if (!event) {
    return (
      <main className="not-found">
        <h1>EVENT NOT FOUND</h1>

        <Link to="/">
          RETURN TO THE REALM
        </Link>
      </main>
    );
  }

  return (
    <main className="event-page">

      <div className="event-page-top">
        <Link to="/" className="back-button">
          ← RETURN TO THE REALM
        </Link>
      </div>

      <motion.section
        className="event-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >

        <p>EVENT {event.number}</p>

        <div className="event-page-symbol">
          ⚔
        </div>

        <h1>{event.name}</h1>

        <span>{event.category}</span>

        <blockquote>
          "{event.tagline}"
        </blockquote>

        <a
          href="#register"
          className="gold-button"
        >
          REGISTER NOW
        </a>

      </motion.section>

      <section className="event-information">

        <div>
          <p className="label">ABOUT THE EVENT</p>

          <h2>THE BATTLE AWAITS</h2>

          <p>{event.description}</p>
        </div>

        <div className="event-details">

          <div>
            <span>TEAM SIZE</span>
            <strong>{event.teamSize}</strong>
          </div>

          <div>
            <span>DURATION</span>
            <strong>{event.duration}</strong>
          </div>

          <div>
            <span>VENUE</span>
            <strong>{event.venue}</strong>
          </div>

        </div>

      </section>

      <section className="rules">

        <p className="label">THE LAWS OF THE REALM</p>

        <h2>RULES & REGULATIONS</h2>

        <ol>
          {event.rules.map((rule, index) => (
            <li key={index}>
              <span>0{index + 1}</span>
              {rule}
            </li>
          ))}
        </ol>

      </section>

      <section className="register" id="register">

        <p className="label">YOUR JOURNEY BEGINS</p>

        <h2>CLAIM YOUR PLACE</h2>

        <p>
          Gather your team and prepare for the challenge.
        </p>

        <button className="gold-button">
          REGISTER NOW
        </button>

      </section>

    </main>
  );
}

export default EventPage;
