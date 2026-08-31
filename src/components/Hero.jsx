import { motion } from "framer-motion";

function Hero() {
  const scrollToEvents = () => {
    document
      .getElementById("events")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero">

      <div className="hero-smoke smoke-one" />
      <div className="hero-smoke smoke-two" />

      <div className="hero-content">

        {/* COLLEGE */}
        <motion.div
          className="college"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="college-logo">
            {/* Add your logo inside /public/images/college-logo.png */}
            <img
              src="/sympo/images/college-logo.png"
              alt="SRM Valliammai Engineering College"
            />
          </div>

          <div className="college-name">
            <span>SRM VALLIAMMAI</span>
            <strong>ENGINEERING COLLEGE</strong>
          </div>
        </motion.div>

        {/* EVENT */}
        <motion.p
          className="event-label"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          PRESENTS
        </motion.p>

        <motion.h1
          className="zyverse-title"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
        >
          <span className="special-z">Z</span>YVERSE
        </motion.h1>

        <motion.div
          className="hero-divider"
          initial={{ width: 0 }}
          animate={{ width: 180 }}
          transition={{ delay: 1, duration: 0.8 }}
        />

        {/* TIME BOMB */}
        <motion.p
          className="time-bomb"
          initial={{ opacity: 0, letterSpacing: "12px" }}
          animate={{ opacity: 1, letterSpacing: "5px" }}
          transition={{ delay: 1.1, duration: 0.8 }}
        >
          TIME BOMB
        </motion.p>

        {/* DATE */}
        <motion.div
          className="event-date"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
        >
          <span>16</span>
          <div>
            <strong>SEPTEMBER</strong>
            <small>2026</small>
          </div>
        </motion.div>

        {/* BUTTON */}
        <motion.button
          className="gold-button"
          onClick={scrollToEvents}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.7 }}
        >
          EXPLORE EVENTS
          <span> →</span>
        </motion.button>

      </div>

      <div className="scroll-indicator">
        <span>SCROLL TO ENTER THE REALM</span>
        <div />
      </div>

    </section>
  );
}

export default Hero;
