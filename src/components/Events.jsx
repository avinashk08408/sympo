import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { events } from "../data/events";

function Events() {
  return (
    <section className="events section" id="events">

      <motion.div
        className="section-heading"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span>02</span>
        <p>CHOOSE YOUR BATTLE</p>
        <h2>THE FIVE EVENTS</h2>
      </motion.div>

      <div className="events-grid">

        {events.map((event, index) => (
          <motion.article
            className="event-card"
            key={event.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >

            <div className="event-number">
              EVENT {event.number}
            </div>

            <div className="event-symbol">
              ⚔
            </div>

            <p className="event-category">
              {event.category}
            </p>

            <h3>{event.name}</h3>

            <p className="event-tagline">
              "{event.tagline}"
            </p>

            <div className="event-divider" />

            <Link
              to={`/events/${event.id}`}
              className="event-button"
            >
              MORE INFORMATION
              <span>→</span>
            </Link>

          </motion.article>
        ))}

      </div>
    </section>
  );
}

export default Events;
