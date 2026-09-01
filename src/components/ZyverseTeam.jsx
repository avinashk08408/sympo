import { motion } from "framer-motion";
import "./ZyverseTeam.css";

const teams = [
  {
    role: "DISCIPLINE HEAD",
    members: ["Saahith", "Bala Kumaran"],
  },
  {
    role: "REGISTRATION HEAD",
    members: ["Manoj", "Naveen"],
  },
  {
    role: "DESIGN HEAD",
    members: ["Durai R"],
  },
  {
    role: "SOUVENIR",
    members: ["Rakesh"],
  },
  {
    role: "PURCHASE",
    members: ["Karthikeyan", "Deepak — 3rd Year"],
  },
  {
    role: "RECEPTION",
    members: ["Shamuga Priya", "Aarthy"],
  },
  {
    role: "PROMOTION",
    members: ["Nithin Shyam", "Rithiga Roobini"],
  },
  {
    role: "FOOD",
    members: ["Karthik Selvam", "Gokula Dharshan"],
  },
];

export default function ZyverseTeam() {
  return (
    <section id="team" className="zyverse-team-section">

      <motion.div
        className="team-heading"
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.4 }}
      >

        <span>
          THE COUNCIL OF THE REALM
        </span>

        <h2>
          ZYVERSE <b>TEAM</b>
        </h2>

        <div className="team-ornament">
          <i />
          <strong>◆</strong>
          <i />
        </div>

      </motion.div>


      <div className="team-grid">

        {teams.map((team, index) => (
          <motion.article
            className="team-card"
            key={team.role}
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
              amount: 0.1,
            }}
            transition={{
              duration: 0.35,
              delay: index * 0.05,
            }}
          >

            <div className="team-card-top">

              <span className="team-index">
                {String(index + 1).padStart(2, "0")}
              </span>

              <span className="team-mark">
                ◆
              </span>

            </div>

            <div className="team-card-body">

              <p>
                {team.role}
              </p>

              <div className="team-members">

                {team.members.map((member) => (
                  <h3 key={member}>
                    {member}
                  </h3>
                ))}

              </div>

            </div>

            <div className="team-card-line" />

          </motion.article>
        ))}

      </div>

    </section>
  );
}
