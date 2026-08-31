import { motion } from "framer-motion";
import "./Leadership.css";

const staff = [
  "Mr. S. Giridharan",
  "Mr. G. Avinesh Kumar",
];

const officeBearers = [
  ["PRESIDENT", "Gokul Amaran"],
  ["VICE PRESIDENT", "Cassy"],
  ["SECRETARY", "Sri hari"],
  ["JOINT SECRETARY", "anesh"],
  ["TREASURER", "Rakesh"],
  ["JOINT TREASURER", "Abishesk Samuel"],
  ["EVENT COORDINATOR", "Naveen"],
];

const committees = [
  {
    title: "DISCIPLINE HEAD",
    members: ["Saahith", "Bala kumaran"],
  },
  {
    title: "REGISTRATION HEAD",
    members: ["Manoj", "Naveen"],
  },
  {
    title: "DESIGN HEAD",
    members: ["Durai R"],
  },
  {
    title: "SOUVENIR",
    members: ["Rakesh"],
  },
  {
    title: "PURCHASE",
    members: ["Karthikeyan", "Deepak — 3rd Year"],
  },
  {
    title: "RECEPTION",
    members: ["Shamuga priya", "Aarthy"],
  },
  {
    title: "PROMOTION",
    members: ["Nithin shyam", "Rithiga roobini"],
  },
  {
    title: "FOOD",
    members: ["Karthik selvam", "Gokula dharshan"],
  },
];

function SectionTitle({ number, label, title }) {
  return (
    <motion.div
      className="leadership-heading"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <span className="section-number">{number}</span>

      <p>{label}</p>

      <h2>{title}</h2>

      <div className="royal-divider">
        <span />
        <b>◆</b>
        <span />
      </div>
    </motion.div>
  );
}

export default function Leadership() {
  return (
    <>
      {/* ==================================================
          STAFF & OFFICE BEARERS
      ================================================== */}

      <section className="leadership-section" id="staff">

        <SectionTitle
          number="03"
          label="THE COUNCIL"
          title="STAFF & OFFICE BEARERS"
        />

        {/* STAFF */}
        <div className="staff-area">

          <div className="sub-heading">
            <span>STAFF COORDINATORS</span>
          </div>

          <div className="staff-grid">

            {staff.map((name, index) => (
              <motion.div
                className="staff-card"
                key={name}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
              >
                <span className="crown-mark">♛</span>

                <p>STAFF</p>

                <h3>{name}</h3>
              </motion.div>
            ))}

          </div>
        </div>


        {/* OFFICE BEARERS */}
        <div className="office-area">

          <div className="sub-heading">
            <span>OFFICE BEARERS</span>
          </div>

          <div className="office-grid">

            {officeBearers.map(
              ([role, name], index) => (
                <motion.div
                  className="office-card"
                  key={role}
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
                    duration: 0.5,
                    delay: index * 0.06,
                  }}
                >

                  <span className="role">
                    {role}
                  </span>

                  <h3>{name}</h3>

                  <div className="small-line" />

                </motion.div>
              )
            )}

          </div>
        </div>

      </section>


      {/* ==================================================
          ZYVERSE TEAM
      ================================================== */}

      <section
        className="team-section"
        id="team"
      >

        <SectionTitle
          number="04"
          label="THE REALM BEHIND THE EVENT"
          title="ZYVERSE TEAM"
        />


        <div className="committee-grid">

          {committees.map(
            (committee, index) => (
              <motion.div
                className="committee-card"
                key={committee.title}
                initial={{
                  opacity: 0,
                  y: 35,
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
                  duration: 0.55,
                  delay: index * 0.06,
                }}
              >

                <div className="committee-top">

                  <span className="committee-symbol">
                    ◆
                  </span>

                  <span className="committee-role">
                    {committee.title}
                  </span>

                </div>

                <div className="committee-line" />

                <div className="committee-members">

                  {committee.members.map(
                    (member) => (
                      <div
                        className="member"
                        key={member}
                      >
                        <span>◇</span>
                        <p>{member}</p>
                      </div>
                    )
                  )}

                </div>

              </motion.div>
            )
          )}

        </div>

      </section>
    </>
  );
}
