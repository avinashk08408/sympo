import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Events from "./components/Events";
import Leadership from "./components/Leadership";
import Footer from "./components/Footer";
import EventPage from "./pages/EventPage";

import "./App.css";

function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Events />
        <Events />
        <Leadership />
      </main>

      <Footer />
    </>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/events/:eventId" element={<EventPage />} />
    </Routes>
  );
}
