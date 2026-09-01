import { motion } from "framer-motion";
import "./EventCoordinators.css";

const council = [
  {
    role: "VICE PRESIDENT",
    name: "Cassy",
  },
  {
    role: "SECRETARY",
    name: "Sri Hari",
  },
  {
    role: "JOINT SECRETARY",
    name: "Anesh",
  },
  {
    role: "TREASURER",
    name: "Rakesh",
  },
  {
    role: "JOINT TREASURER",
    name: "Abishesk Samuel",
  },
];

const team = [
  {
    role: "DISCIPLINE HEAD",
    names: ["Saahith", "Bala Kumaran"],
  },
  {
    role: "REGISTRATION HEAD",
    names: ["Manoj", "Naveen"],
  },
  {
    role: "DESIGN HEAD",
    names: ["Durai R"],
  },
  {
    role: "SOUVENIR",
    names: ["Rakesh"],
  },
  {
    role: "PURCHASE",
    names: ["Karthikeyan", "Deepak"],
    badge: "3RD YEAR",
  },
  {
    role: "RECEPTION",
    names: ["Shamuga Priya", "Aarthy"],
  },
  {
    role: "PROMOTION",
    names: ["Nithin Shyam", "Rithiga Roobini"],
  },
  {
    role: "FOOD",
    names: ["Karthik Selvam", "Gokula Dharshan"],
  },
];

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

export default function EventCoordinators() {
  return (
    <section className="court-section" id="team">

      {/* HEADER */}
      <motion.div
        className="court-heading"
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
      >
        <span className="section-number">04</span>

        <p className="eyebrow">
          THE HOUSE OF ZYVERSE
        </p>

        <h2>
          THE ROYAL <span>COURT</span>
        </h2>

        <p className="heading-description">
          The council that guides the realm —
          the minds and leaders behind Zyverse 2K26.
        </p>

        <div className="ornament">
          <i />
          <b>◆</b>
          <i />
        </div>
      </motion.div>

      {/* PRESIDENT */}
      <motion.div
        className="president-card"
        initial={{ opacity: 0, scale: 0.94 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
      >
        <span className="card-role">PRESIDENT</span>

        <h3>
          GOKUL
          <br />
          AMARAN
        </h3>

        <div className="small-ornament">◆</div>
      </motion.div>

      {/* COUNCIL */}
      <div className="council-grid">
        {council.map((person, index) => (
          <motion.div
            className="court-card"
            key={person.role}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.35,
              delay: index * 0.04,
            }}
          >
            <span>{person.role}</span>
            <strong>{person.name}</strong>
          </motion.div>
        ))}
      </div>

      {/* ZYVERSE TEAM */}
      <motion.div
        className="sub-heading"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2>THE COUNCIL</h2>
        <div className="sub-line" />
      </motion.div>

      <div className="team-grid">
        {team.map((person, index) => (
          <motion.div
            className="team-card"
            key={person.role}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.35,
              delay: index * 0.04,
            }}
          >
            <div className="team-card-top">
              <span>{person.role}</span>

              {person.badge && (
                <small>{person.badge}</small>
              )}
            </div>

            <div className="team-names">
              {person.names.map((name) => (
                <p key={name}>{name}</p>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* STAFF */}
      <motion.div
        className="sub-heading staff-heading"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2>COMMAND STAFF</h2>
        <div className="sub-line" />
      </motion.div>

      <div className="staff-grid">
        {staff.map((person, index) => (
          <motion.div
            className="staff-card"
            key={person.name}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.4,
              delay: index * 0.08,
            }}
          >
            <span>{person.role}</span>
            <h3>{person.name}</h3>
          </motion.div>
        ))}
      </div>

    </section>
  );
}
