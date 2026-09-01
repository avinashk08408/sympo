import { motion } from "framer-motion";
import "./EventCoordinators.css";

const staff = [
  "Mr. S. Giridharan",
  "Mr. G. Avinesh Kumar",
];

const coordinators = [
  ["President", "Gokul Amaran"],
  ["Vice President", "Cassy"],
  ["Secretary", "Sri Hari"],
  ["Joint Secretary", "Anesh"],
  ["Treasurer", "Rakesh"],
  ["Joint Treasurer", "Abishesk Samuel"],
  ["Event Coordinator", "Naveen"],
];

export default function EventCoordinators() {
  return (
    <section id="coordinators" className="coordinators-section">

      <motion.div
        className="coordinators-heading"
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.4 }}
      >
        <span className="section-kicker">
          THE HANDS BEHIND THE REALM
        </span>

        <h2>
          EVENT <span>COORDINATORS</span>
        </h2>

        <div className="section-ornament">
          <i></i>
          <b>◆</b>
          <i></i>
        </div>
      </motion.div>


      {/* STAFF */}

      <motion.div
        className="staff-area"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.4 }}
      >

        <div className="sub-heading">
          <span>01</span>
          <h3>STAFF</h3>
        </div>

        <div className="staff-grid">

          {staff.map((name, index) => (
            <motion.div
              className="staff-card"
              key={name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.35,
                delay: index * 0.08,
              }}
            >
              <div className="card-symbol">♜</div>

              <div>
                <span>STAFF</span>
                <h4>{name}</h4>
              </div>
            </motion.div>
          ))}

        </div>

      </motion.div>


      {/* COORDINATORS */}

      <motion.div
        className="office-area"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.4 }}
      >

        <div className="sub-heading">
          <span>02</span>
          <h3>OFFICE BEARERS</h3>
        </div>

        <div className="coordinator-grid">

          {coordinators.map(([role, name], index) => (
            <motion.div
              className="coordinator-card"
              key={role}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.35,
                delay: index * 0.06,
              }}
            >

              <span className="coordinator-number">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div className="coordinator-content">
                <span>{role}</span>
                <h4>{name}</h4>
              </div>

              <div className="card-arrow">◆</div>

            </motion.div>
          ))}

        </div>

      </motion.div>

    </section>
  );
}
