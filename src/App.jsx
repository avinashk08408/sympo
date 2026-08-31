import { BrowserRouter, Routes, Route } from "react-router-dom";

import Hero from "./components/Hero";
import Events from "./components/Events";
import Leadership from "./components/Leadership";

import "./App.css";

function Home() {
  return (
    <>
      <Hero />

      <Events />

      <Leadership />

      {/* CONTACT SECTION */}
      <section id="contact" className="contact-section">
        <p>GET IN TOUCH</p>

        <h2>CONTACT & COLLABORATION</h2>

        <span>
          Join us at ZYVERSE — TIME BOMB
        </span>

        <div className="contact-date">
          16 SEPTEMBER 2026
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-title">
          <strong>Z</strong>YVERSE
        </div>

        <p>
          SRM Valliammai Engineering College
        </p>

        <small>
          Department of Cyber Security
        </small>

        <div className="footer-line" />

        <span>
          © 2026 ZYVERSE. ALL RIGHTS RESERVED.
        </span>
      </footer>
    </>
  );
}


/* ==============================
   EVENT DETAIL PAGE
============================== */

function EventPage() {
  return (
    <div className="event-page">
      <h1>EVENT</h1>

      <p>
        Event details will be displayed here.
      </p>

      <button
        onClick={() => window.history.back()}
      >
        ← BACK
      </button>
    </div>
  );
}


export default function App() {
  return (
    <BrowserRouter basename="/sympo">
      <Routes>

        {/* MAIN SPA */}
        <Route
          path="/"
          element={<Home />}
        />

        {/* INDIVIDUAL EVENT PAGES */}
        <Route
          path="/events/:eventId"
          element={<EventPage />}
        />

      </Routes>
    </BrowserRouter>
  );
}
