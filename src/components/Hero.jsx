import { useEffect, useState } from "react";
import "./Hero.css";

const targetDate = new Date("2026-09-16T09:00:00+05:30");

function getTimeLeft() {
  const difference = targetDate.getTime() - Date.now();

  if (difference <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor(
      (difference / (1000 * 60 * 60)) % 24
    ),
    minutes: Math.floor(
      (difference / (1000 * 60)) % 60
    ),
    seconds: Math.floor(
      (difference / 1000) % 60
    ),
  };
}

function pad(number) {
  return String(number).padStart(2, "0");
}

export default function Hero() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const goToEvents = () => {
    document
      .getElementById("events")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };

  return (
    <section className="hero">

      {/* BACKGROUND */}
      <div className="hero-overlay" />
      <div className="hero-glow hero-glow-one" />
      <div className="hero-glow hero-glow-two" />

      {/* COLLEGE */}
      <div className="hero-college">

        <img
          src="/sympo/images/srm-logo.png"
          alt="SRM Valliammai Engineering College"
          className="srm-logo"
        />

        <div className="college-text">
          <h3>SRM VALLIAMMAI</h3>
          <p>ENGINEERING COLLEGE</p>
        </div>

      </div>

      {/* DEPARTMENT */}
      <p className="hero-department">
        DEPARTMENT OF CYBER SECURITY
      </p>

      {/* EVENT LOGO */}
      <div className="zyverse">

        <div className="zyverse-name">

          <span className="zyverse-z">
            Z
          </span>

          <span className="zyverse-yverse">
            YVERSE
          </span>

        </div>

        <div className="zyverse-year">
          2K26
        </div>

      </div>

      {/* DECORATIVE LINE */}
      <div className="hero-line">
        <span />
        <b>◆</b>
        <span />
      </div>

      {/* EVENT NAME */}
      <div className="time-bomb">
        <span>TIME BOMB</span>
      </div>

      {/* COUNTDOWN */}
      <div className="countdown-title">
        EVENT BEGINS IN
      </div>

      <div className="countdown">

        <div className="count-item">
          <strong>{pad(timeLeft.days)}</strong>
          <span>DAYS</span>
        </div>

        <div className="count-item">
          <strong>{pad(timeLeft.hours)}</strong>
          <span>HRS</span>
        </div>

        <div className="count-item">
          <strong>{pad(timeLeft.minutes)}</strong>
          <span>MINS</span>
        </div>

        <div className="count-item">
          <strong>{pad(timeLeft.seconds)}</strong>
          <span>SECS</span>
        </div>

      </div>

      {/* DATE */}
      <div className="event-date">
        16 SEPTEMBER 2026
      </div>

      {/* BUTTON */}
      <button
        className="explore-button"
        onClick={goToEvents}
      >
        EXPLORE EVENTS
        <span>↓</span>
      </button>

      {/* BOTTOM NAV */}
      <div className="hero-scroll">
        <span>SCROLL TO EXPLORE</span>
        <i />
      </div>

    </section>
  );
}
