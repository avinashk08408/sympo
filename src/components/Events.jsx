import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { events } from "../data/events";
import "./Events.css";

export default function Events() {
  return (
    <section className="events-section" id="events">

      {/* SECTION HEADER */}
      <motion.div
        className="events-heading"
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <span className="events-number">02</span>

        <p className="events-label">
          CHOOSE YOUR BATTLE
        </p>

        <h2>
          THE FIVE EVENTS
        </h2>

        <div className="events-heading-line">
          <span />
          <b>◆</b>
          <span />
        </div>
      </motion.div>


      {/* EVENTS */}
      <div className="events-grid">

        {events.map((event, index) => (
          <motion.article
            className="event-card"
            key={event.id}

            initial={{
              opacity: 0,
              y: 50
            }}

            whileInView={{
              opacity: 1,
              y: 0
            }}

            viewport={{
              once: true,
              amount: 0.2
            }}

            transition={{
              duration: 0.7,
              delay: index * 0.12
            }}
          >

            {/* TOP */}
            <div className="event-card-top">

              <span className="event-number">
                EVENT {event.number}
              </span>

              <span className="event-category">
                {event.category}
              </span>

            </div>


            {/* SYMBOL */}
            <div className="event-symbol">
              ⚔
            </div>


            {/* EVENT NAME */}
            <h3>
              {event.name}
            </h3>


            {/* TAGLINE */}
            <p className="event-tagline">
              "{event.tagline}"
            </p>


            {/* DIVIDER */}
            <div className="event-divider">
              <span />
              <b>◆</b>
              <span />
            </div>


            {/* MORE INFORMATION */}
            <Link
              to={`/events/${event.id}`}
              className="event-info-button"
            >
              <span>
                MORE INFORMATION
              </span>

              <b>
                →
              </b>
            </Link>

          </motion.article>
        ))}

      </div>

    </section>
  );
}
