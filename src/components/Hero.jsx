import { motion } from "framer-motion";

const HERO_VIDEO =
  "https://res.cloudinary.com/egrvexxs/video/upload/v1788282471/InShot_20260831_191916680.mp4";

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        width: "100%",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#070605",
      }}
    >
      {/* VIDEO BACKGROUND */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
        }}
      >
        <source src={HERO_VIDEO} type="video/mp4" />
      </video>

      {/* DARK OVERLAY */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,

          background:
            "linear-gradient(180deg, rgba(5,4,3,0.35) 0%, rgba(7,6,5,0.48) 45%, rgba(7,6,5,0.96) 100%)",
        }}
      />

      {/* GOLD/BLACK CINEMATIC OVERLAY */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 2,

          background:
            "radial-gradient(circle at center, rgba(193,154,80,0.08), transparent 55%)",

          pointerEvents: "none",
        }}
      />

      {/* HERO CONTENT */}
      <motion.div
        initial={{
          opacity: 0,
          y: 35,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
        style={{
          position: "relative",
          zIndex: 3,

          width: "90%",
          maxWidth: "1000px",

          textAlign: "center",

          color: "#d8c28d",
        }}
      >
        <p
          style={{
            margin: "0 0 18px",

            fontFamily: "Cinzel, serif",

            fontSize: "11px",

            letterSpacing: "5px",

            color: "#b28a46",
          }}
        >
          THE HOUSE OF THE DRAGON
        </p>

        <h1
          style={{
            margin: 0,

            fontFamily: "Cinzel, serif",

            fontSize: "clamp(42px, 9vw, 100px)",

            fontWeight: 500,

            lineHeight: 1.05,

            letterSpacing: "4px",

            color: "#e1c98d",

            textShadow:
              "0 4px 25px rgba(0,0,0,0.9)",
          }}
        >
          ZYVERSE
        </h1>

        <p
          style={{
            marginTop: "18px",

            fontFamily: "Cinzel, serif",

            fontSize: "clamp(13px, 2vw, 18px)",

            letterSpacing: "7px",

            color: "#c7ad72",
          }}
        >
          2K26
        </p>

        <div
          style={{
            width: "90px",
            height: "1px",

            margin: "28px auto",

            background:
              "linear-gradient(90deg, transparent, #c19a50, transparent)",
          }}
        />

        <p
          style={{
            maxWidth: "600px",

            margin: "0 auto",

            fontSize: "13px",

            lineHeight: 1.8,

            color: "#c0b49c",
          }}
        >
          Five battles. One realm. One throne.
        </p>

        {/* SCROLL TO EXPLORE */}
        <motion.div
          animate={{
            y: [0, 8, 0],
          }}
          transition={{
            duration: 1.6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            marginTop: "55px",

            display: "flex",
            flexDirection: "column",
            alignItems: "center",

            gap: "12px",

            cursor: "pointer",
          }}
          onClick={() => {
            document
              .getElementById("about")
              ?.scrollIntoView({
                behavior: "smooth",
              });
          }}
        >
          <span
            style={{
              fontFamily: "Cinzel, serif",

              fontSize: "14px",

              letterSpacing: "4px",

              color: "#d4bd82",

              textShadow:
                "0 2px 10px rgba(0,0,0,0.9)",
            }}
          >
            SCROLL TO EXPLORE
          </span>

          <span
            style={{
              fontSize: "18px",

              color: "#c19a50",
            }}
          >
            ↓
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
}
