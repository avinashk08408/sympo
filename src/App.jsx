import { HashRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Events from "./components/Events";
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
      </main>

      <Footer />
    </>
  );
}


function App() {
  return (
    <HashRouter>
      <Routes>

        {/* HOME */}
        <Route
          path="/"
          element={<Home />}
        />

        {/* EVENT DETAILS */}
        <Route
          path="/events/:eventId"
          element={<EventPage />}
        />

        {/* IMPORTANT:
            Allows existing #about, #events,
            #contact etc. navigation to keep working */}
        <Route
          path="*"
          element={<Home />}
        />

      </Routes>
    </HashRouter>
  );
}


export default App;
