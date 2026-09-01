import { motion } from "framer-motion";
import "./ZyverseTeam.css";

const team = [
  {
    role: "DISCIPLINE HEAD",
    names: ["SAAHITH", "BALA KUMARAN"],
  },
  {
    role: "REGISTRATION HEAD",
    names: ["MANOJ", "NAVEEN"],
  },
  {
    role: "DESIGN HEAD",
    names: ["DURAI R"],
  },
  {
    role: "SOUVENIR",
    names: ["RAKESH"],
  },
  {
    role: "PURCHASE",
    names: ["KARTHIKEYAN", "DEEPAK"],
    badge: "3RD YEAR",
  },
  {
    role: "RECEPTION",
    names: ["SHAMUGA PRIYA", "AARTHY"],
  },
  {
    role: "PROMOTION",
    names: ["NITHIN SHYAM", "RITHIGA ROOBINI"],
  },
  {
    role: "FOOD",
    names: ["KARTHIK SELVAM", "GOKULA DHARSHAN"],
  },
];

export default function ZyverseTeam() {
  return (
    <section className="zyverse-team-section" id="zyverse-team">

      {/* HEADER */}

      <motion.div
        className="zyverse-heading"
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
          amount: 0.2,
        }}
        transition={{
          duration: 0.45,
        }}
      >
        <span className="section-number">
          05
        </span>

        <p className="eyebrow">
          THE PEOPLE BEHIND THE REALM
        </p>

        <h2>
          ZYVERSE <span>TEAM</span>
        </h2>

        <p className="heading-description">
          The council of minds who forged Zyverse 2K26.
        </p>

        <div className="ornament">
          <i></i>
          <b>◆</b>
          <i></i>
        </div>
      </motion.div>


      {/* THE COUNCIL */}

      <motion.div
        className="council-title"
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
        }}
        transition={{
          duration: 0.35,
        }}
      >
        <h3>THE COUNCIL</h3>

        <div></div>
      </motion.div>


      {/* TEAM CARDS */}

      <div className="zyverse-team-grid">

        {team.map((person, index) => (
          <motion.div
            className="zyverse-team-card"
            key={person.role}
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
              amount: 0.15,
            }}
            transition={{
              duration: 0.3,
              delay: index * 0.04,
            }}
          >

            <div className="team-card-header">

              <span>{person.role}</span>

              {person.badge && (
                <small>{person.badge}</small>
              )}

            </div>

            <div className="team-names">

              {person.names.map((name) => (
                <p key={name}>
                  {name}
                </p>
              ))}

            </div>

          </motion.div>
        ))}

      </div>

    </section>
  );
}
