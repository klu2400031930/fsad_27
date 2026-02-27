import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function EventDetails({ user, setUser }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [registered, setRegistered] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const [eventData, setEventData] = useState(location.state);

  const handleLogout = () => {
    setUser(null);
    navigate("/login");
  };

  const handleChange = (field, value) => {
    setEventData({ ...eventData, [field]: value });
  };

  if (!eventData) {
    return (
      <div className="event-box">
        <p>No event selected.</p>
        <button onClick={() => navigate("/events")}>Back to Home</button>
      </div>
    );
  }

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <h1>Extracurricular Activities Management</h1>
        <div className="right-section">
          <span className="user-info">Welcome, {user.id}</span>
          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </nav>

      {/* Event Details Box */}
      <div className="event-box">
        {isEditing ? (
          <div className="edit-form">
            <label>
              <b>Name:</b>
              <input
                type="text"
                value={eventData.name}
                onChange={(e) => handleChange("name", e.target.value)}
              />
            </label>

            <label>
              <b>About:</b>
              <textarea
                value={eventData.desc}
                onChange={(e) => handleChange("desc", e.target.value)}
              />
            </label>

            <label>
              <b>Date:</b>
              <input
                type="text"
                value={eventData.date}
                onChange={(e) => handleChange("date", e.target.value)}
              />
            </label>

            <label>
              <b>Time:</b>
              <input
                type="text"
                value={eventData.time}
                onChange={(e) => handleChange("time", e.target.value)}
              />
            </label>

            <label>
              <b>Location:</b>
              <input
                type="text"
                value={eventData.location}
                onChange={(e) => handleChange("location", e.target.value)}
              />
            </label>
          </div>
        ) : (
          <>
            <h2>{eventData.name}</h2>
            <p><b>About:</b> {eventData.desc}</p>
            <p className="extra-desc">
              This event is designed to give students hands-on experience and deeper insights. It’s a great opportunity to learn, collaborate, and showcase your skills.
            </p>
            <p><b>Date:</b> {eventData.date}</p>
            <p><b>Time:</b> {eventData.time}</p>
            <p><b>Location:</b> {eventData.location}</p>
          </>
        )}

        {/* ✅ Message box only when registered */}
        {registered && (
          <div className="registered-box">
            You have already registered for this event
          </div>
        )}

        {/* Buttons */}
        <div className="button-row">
          <button className="home-btn" onClick={() => navigate("/events")}>
            Go to Home
          </button>

          {user.role === "admin" ? (
            <button
              className="register-btn"
              onClick={() => setIsEditing(!isEditing)}
            >
              {isEditing ? "Done Editing" : "Edit"}
            </button>
          ) : !registered ? (
            <button
              className="register-btn"
              onClick={() => {
                setRegistered(true);
                setPopupMessage(
                  <>
                    ✅ Registration Successful! <br />
                    You have successfully registered for {eventData.name}.
                  </>
                );
                setShowPopup(true);
              }}
            >
              Register for Event
            </button>
          ) : (
            <button
              className="deregister-btn"
              onClick={() => {
                setRegistered(false);
                setPopupMessage(
                  <>
                    ❌ Deregistration Successful! <br />
                    You have successfully deregistered from {eventData.name}.
                  </>
                );
                setShowPopup(true);
              }}
            >
              Deregister from Event
            </button>
          )}
        </div>
      </div>

      {/* Popup Modal */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-box">
            <p>{popupMessage}</p>
            <button className="home-btn" onClick={() => setShowPopup(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}