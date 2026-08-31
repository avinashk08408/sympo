import { motion } from "framer-motion";

function About() {
  return (
    <section className="about section" id="about">

      <motion.div
        className="section-heading"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span>01</span>
        <p>THE REALM</p>
        <h2>ABOUT THE SYMPOSIUM</h2>
      </motion.div>

      <div className="about-grid">

        <div className="about-emblem">
          <div className="emblem-ring">
            🐉
          </div>
        </div>

        <div className="about-content">
          <p className="large-text">
            A gathering where{" "}
            <strong>knowledge, technology and creativity</strong>{" "}
            meet.
          </p>

          <p>
            Welcome to our symposium — a realm created for students,
            innovators and technology enthusiasts to challenge
            themselves, share ideas and compete with the best.
          </p>

          <p>
            Five events. Countless challenges. One throne.
          </p>

          <div className="stats">
            <div>
              <strong>05</strong>
              <span>EVENTS</span>
            </div>

            <div>
              <strong>∞</strong>
              <span>POSSIBILITIES</span>
            </div>

            <div>
              <strong>01</strong>
              <span>REALM</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;
