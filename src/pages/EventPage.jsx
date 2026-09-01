import { Link, useParams } from "react-router-dom";
import { events } from "../data/events";

export default function EventPage() {
  const { eventId } = useParams();

  const event = events.find((item) => item.id === eventId);

  if (!event) {
    return (
      <div
        style={{
          minHeight: "100vh",
          background: "#070605",
          color: "#d8c28d",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <h1>EVENT NOT FOUND</h1>
        <Link to="/" style={{ color: "#c19a50" }}>
          RETURN HOME
        </Link>
      </div>
    );
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#070605",
        color: "#d8c28d",
        padding: "50px",
      }}
    >
      <Link
        to="/"
        style={{
          color: "#c19a50",
          textDecoration: "none",
        }}
      >
        ← BACK
      </Link>

      <h1 style={{ marginTop: "50px" }}>
        {event.name}
      </h1>

      <p>{event.description}</p>

      <p>Event ID: {event.id}</p>

      <p>Category: {event.category}</p>
    </div>
  );
}
