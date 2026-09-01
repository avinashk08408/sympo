import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Events from "./components/Events";
import Footer from "./components/Footer";

import EventCoordinators from "./components/EventCoordinators";
import ZyverseTeam from "./components/ZyverseTeam";

import EventPage from "./pages/EventPage";

import "./App.css";

function Home() {
  return (
    <>
      <Navbar />

      <main>
        {/* HERO */}
        <Hero />

        {/* ABOUT */}
        <About />

        {/* FIVE EVENTS */}
        <Events />

        {/* EVENT COORDINATORS */}
        <EventCoordinators />

        {/* ZYVERSE TEAM */}
        <ZyverseTeam />
      </main>

      {/* FOOTER */}
      <Footer />
    </>
  );
}

function App() {
  return (
    <Routes>
      {/* MAIN WEBSITE */}
      <Route path="/" element={<Home />} />

      {/* INDIVIDUAL EVENT PAGE */}
      <Route
        path="/events/:eventId"
        element={<EventPage />}
      />
    </Routes>
  );
}

export default App;
