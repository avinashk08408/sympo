import { motion } from "framer-motion";
import "./EventCoordinators.css";

const staff = [
  {
    role: "STAFF COORDINATOR",
    name: "MR. S. GIRIDHARAN",
  },
  {
    role: "STAFF COORDINATOR",
    name: "MR. G. AVINESH KUMAR",
  },
];

const leadership = [
  {
    role: "VICE PRESIDENT",
    name: "CASSY",
  },
  {
    role: "SECRETARY",
    name: "SRI HARI",
  },
  {
    role: "JOINT SECRETARY",
    name: "ANESH",
  },
  {
    role: "TREASURER",
    name: "RAKESH",
  },
  {
    role: "JOINT TREASURER",
    name: "ABISHESK SAMUEL",
  },
];

export default function EventCoordinators() {
  return (
    <section className="coordinators-section" id="coordinators">

      {/* =========================
          SECTION INTRO
      ========================= */}

      <motion.div
        className="coordinators-heading"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.45 }}
      >
        <span className="section-number">04</span>

        <p className="eyebrow">
          THE HOUSE OF ZYVERSE
        </p>

        <h2>
          EVENT <span>COORDINATORS</span>
        </h2>

        <p className="heading-description">
          The guardians and leaders guiding the realm
          of Zyverse 2K26.
        </p>

        <div className="ornament">
          <i></i>
          <b>◆</b>
          <i></i>
        </div>
      </motion.div>


      {/* =========================
          STAFF COORDINATORS
      ========================= */}

      <div className="staff-grid">

        {staff.map((person, index) => (
          <motion.div
            className="staff-card"
            key={person.name}
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.35,
              delay: index * 0.08,
            }}
          >
            <span>{person.role}</span>

            <h3>{person.name}</h3>

            <div className="card-symbol">
              ◆
            </div>
          </motion.div>
        ))}

      </div>


      {/* =========================
          ROYAL COURT
      ========================= */}

      <motion.div
        className="court-heading"
        initial={{
          opacity: 0,
          y: 25,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.4,
        }}
      >
        <p className="eyebrow">
          THE RULERS OF THE REALM
        </p>

        <h2>
          THE ROYAL <span>COURT</span>
        </h2>

        <div className="sub-line"></div>
      </motion.div>


      {/* =========================
          PRESIDENT
      ========================= */}

      <motion.div
        className="president-card"
        initial={{
          opacity: 0,
          scale: 0.95,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.4,
        }}
      >
        <span>PRESIDENT</span>

        <h3>
          GOKUL
          <br />
          AMARAN
        </h3>

        <div className="card-symbol">
          ◆
        </div>
      </motion.div>


      {/* =========================
          LEADERSHIP
      ========================= */}

      <div className="leadership-grid">

        {leadership.map((person, index) => (
          <motion.div
            className="leadership-card"
            key={person.role}
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
              duration: 0.3,
              delay: index * 0.04,
            }}
          >
            <span>{person.role}</span>

            <strong>{person.name}</strong>
          </motion.div>
        ))}

      </div>

    </section>
  );
}
