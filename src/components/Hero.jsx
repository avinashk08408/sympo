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

      <div className="embers">
        <span>✦</span>
        <span>·</span>
        <span>✦</span>
        <span>·</span>
        <span>✦</span>
        <span>·</span>
      </div>

      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        <p className="eyebrow">THE REALM AWAITS</p>

        <h1>
          SYMPO
          <span>2026</span>
        </h1>

        <div className="hero-line" />

        <p className="hero-tagline">
          WHERE MINDS RISE
          <br />
          AND LEGENDS BEGIN
        </p>

        <button
          className="gold-button"
          onClick={scrollToEvents}
        >
          ENTER THE REALM
        </button>
      </motion.div>

      <div className="scroll-indicator">
        <span>SCROLL TO EXPLORE</span>
        <div />
      </div>

    </section>
  );
}

export default Hero;
