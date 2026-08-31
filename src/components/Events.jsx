import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { events } from "../data/events";
import "./Events.css";

export default function Events() {
  const firstRow = events.slice(0, 3);
  const secondRow = events.slice(3, 5);

  const EventCard = ({ event, index }) => (
    <motion.div
      className="event-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <span className="event-number">
        EVENT {event.number}
      </span>

      <h3>{event.name}</h3>

      <p>{event.tagline}</p>

      <Link
        to={`/events/${event.id}`}
        className="event-info-button"
      >
        MORE INFORMATION
        <span>→</span>
      </Link>
    </motion.div>
  );

  return (
    <section className="events-section" id="events">

      <div className="events-heading">
        <span>02</span>

        <p>CHOOSE YOUR BATTLE</p>

        <h2>THE FIVE EVENTS</h2>

        <div className="heading-line">
          <i></i>
          <b>◆</b>
          <i></i>
        </div>
      </div>

      {/* FIRST ROW — 3 EVENTS */}
      <div className="events-row">
        {firstRow.map((event, index) => (
          <EventCard
            key={event.id}
            event={event}
            index={index}
          />
        ))}
      </div>

      {/* SECOND ROW — 2 EVENTS */}
      <div className="events-row second-row">
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
