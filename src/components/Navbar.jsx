import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar">
      <Link to="/" className="brand">
        SYMPO
      </Link>

      <nav>
        <a href="/sympo/#about">ABOUT</a>
        <a href="/sympo/#events">EVENTS</a>
        <a href="/sympo/#contact">CONTACT</a>
      </nav>

      <a href="/sympo/#events" className="nav-button">
        ENTER THE REALM
      </a>
    </header>
  );
}

export default Navbar;
