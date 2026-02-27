import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Admin({ user, setUser }) {
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState({
    name: "",
    about: "",
    desc: "",
    date: "",
    startTime: "",
    endTime: "",
  });
  const navigate = useNavigate();

  const addEvent = () => {
    // ✅ Date constraint: must be >= 26-02-2026
    const minDate = new Date("2026-02-26");
    const selectedDate = new Date(newEvent.date);

    if (!newEvent.name || !newEvent.about || !newEvent.desc || !newEvent.date) {
      alert("Please fill all required fields");
      return;
    }
    if (selectedDate < minDate) {
      alert("Date must be on or after 26-02-2026");
      return;
    }

    setEvents([...events, newEvent]);
    setNewEvent({
      name: "",
      about: "",
      desc: "",
      date: "",
      startTime: "",
      endTime: "",
    });
    alert("Event added successfully!");
  };

  const removeEvent = (eventName) => {
    setEvents(events.filter((e) => e.name !== eventName));
  };

  const handleLogout = () => {
    setUser(null);
    navigate("/login");
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <h2>Extracurricular Activities Management</h2>
        <div className="right-section">
          <span className="user-info">Welcome, {user.id}</span>
          <button className="logout-btn" onClick={handleLogout}>Logout</button>
        </div>
      </nav>

      {/* Admin Panel */}
      <div className="admin-container">
        <h3>Add an Event</h3>

        <div className="form-row">
          <label>Name:</label>
          <input
            type="text"
            value={newEvent.name}
            onChange={(e) => setNewEvent({ ...newEvent, name: e.target.value })}
          />
        </div>

        <div className="form-row">
          <label>About:</label>
          <input
            type="text"
            value={newEvent.about}
            onChange={(e) => setNewEvent({ ...newEvent, about: e.target.value })}
          />
        </div>

        <div className="form-row">
          <label>Description:</label>
          <textarea
            value={newEvent.desc}
            onChange={(e) => setNewEvent({ ...newEvent, desc: e.target.value })}
          />
        </div>

        <div className="form-row">
          <label>Date:</label>
          <input
            type="date"
            value={newEvent.date}
            onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
          />
        </div>

        <div className="form-row">
          <label>Start Time:</label>
          <input
            type="time"
            value={newEvent.startTime}
            onChange={(e) =>
              setNewEvent({ ...newEvent, startTime: e.target.value })
            }
          />
        </div>

        <div className="form-row">
          <label>End Time:</label>
          <input
            type="time"
            value={newEvent.endTime}
            onChange={(e) =>
              setNewEvent({ ...newEvent, endTime: e.target.value })
            }
          />
        </div>

        {/* Buttons Row */}
        <div className="button-row">
          <button onClick={addEvent}>Add Event</button>
          <button className="home-btn" onClick={() => navigate("/events")}>
            Back to Home
          </button>
        </div>

        <h4>Manage Events</h4>
        <ul>
          {events.map((event, index) => (
            <li key={index}>
              {event.name}{" "}
              <button onClick={() => removeEvent(event.name)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}