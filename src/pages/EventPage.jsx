import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import { events } from "../data/events";

import "./EventPage.css";

export default function EventPage() {
  const { eventId } = useParams();

  const event = events.find(
    (item) => item.id === eventId
  );

  const videoRef = useRef(null);

  const [introFinished, setIntroFinished] =
    useState(false);

  const [videoError, setVideoError] =
    useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [eventId]);

  if (!event) {
    return (
      <main className="not-found">

        <h1>
          EVENT NOT FOUND
        </h1>

        <Link to="/">
          RETURN TO THE REALM
        </Link>

      </main>
    );
  }

  const skipIntro = () => {
    setIntroFinished(true);

    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <main className="event-page">

      {/* =====================================
          CINEMATIC EVENT INTRO
      ===================================== */}

      {!introFinished && !videoError && (
        <section className="event-intro">

          <video
            ref={videoRef}
            className="event-intro-video"

            autoPlay
            muted
            playsInline

            onEnded={() =>
              setIntroFinished(true)
            }

            onError={() =>
              setVideoError(true)
            }
          >

            <source
              src={event.introVideo}
              type="video/mp4"
            />

          </video>

          <div className="event-intro-overlay" />

          <div className="event-intro-content">

            <p>
              EVENT {event.number}
            </p>

            <h1>
              {event.name}
            </h1>

            <span>
              {event.category}
            </span>

          </div>

          {/* SKIP BUTTON */}

          <button
            className="skip-intro"
            onClick={skipIntro}
          >
            SKIP INTRO
            <span>
              →
            </span>
          </button>

        </section>
      )}

      {/* =====================================
          EVENT INFORMATION
      ===================================== */}

      <div
        className={
          introFinished || videoError
            ? "event-content visible"
            : "event-content"
        }
      >

        {/* TOP */}

        <div className="event-page-top">

          <Link
            to="/"
            className="back-button"
          >
            ← RETURN TO THE REALM
          </Link>

        </div>

        {/* EVENT HERO */}

        <motion.section
          className="event-hero"

          initial={{
            opacity: 0,
            y: 20,
          }}

          animate={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            duration: 0.6,
          }}
        >

          <p>
            EVENT {event.number}
          </p>

          <div className="event-page-symbol">
            ◆
          </div>

          <h1>
            {event.name}
          </h1>

          <span>
            {event.category}
          </span>

          <blockquote>
            "{event.tagline}"
          </blockquote>

          <a
            href="#register"
            className="gold-button"
          >
            REGISTER NOW
          </a>

        </motion.section>

        {/* INFORMATION */}

        <section className="event-information">

          <div>

            <p className="label">
              ABOUT THE EVENT
            </p>

            <h2>
              THE BATTLE AWAITS
            </h2>

            <p>
              {event.description}
            </p>

          </div>

          <div className="event-details">

            <div>
              <span>
                TEAM SIZE
              </span>

              <strong>
                {event.teamSize}
              </strong>
            </div>

            <div>
              <span>
                DURATION
              </span>

              <strong>
                {event.duration}
              </strong>
            </div>

            <div>
              <span>
                VENUE
              </span>

              <strong>
                {event.venue}
              </strong>
            </div>

          </div>

        </section>

        {/* RULES */}

        <section className="rules">

          <p className="label">
            THE LAWS OF THE REALM
          </p>

          <h2>
            RULES & REGULATIONS
          </h2>

          <ol>

            {event.rules.map(
              (rule, index) => (
                <li key={index}>

                  <span>
                    {String(
                      index + 1
                    ).padStart(2, "0")}
                  </span>

                  {rule}

                </li>
              )
            )}

          </ol>

        </section>

        {/* REGISTER */}

        <section
          className="register"
          id="register"
        >

          <p className="label">
            YOUR JOURNEY BEGINS
          </p>

          <h2>
            CLAIM YOUR PLACE
          </h2>

          <p>
            Gather your team and prepare
            for the challenge.
          </p>

          <button className="gold-button">
            REGISTER NOW
          </button>

        </section>

      </div>

    </main>
  );
}
