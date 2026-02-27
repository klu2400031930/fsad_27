import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function RemoveEvents({ user, setUser }) {
  const navigate = useNavigate();

  // ✅ Initial events grouped by domain
  const [domains, setDomains] = useState({
    Technical: [
      "Web Development Workshop",
      "AI & ML Seminar",
      "Hackathon 2026",
      "Cybersecurity Awareness",
      "Cloud Computing Basics",
      "Data Science Bootcamp",
    ],
    "Non-Technical": [
      "Public Speaking Workshop",
      "Creative Writing Club",
      "Photography Exhibition",
      "Cooking Challenge",
      "Debate Competition",
      "Art & Painting",
    ],
    Sports: [
      "Basketball Tournament",
      "Cricket Championship",
      "Marathon Run 5K",
      "Badminton Singles",
      "Table Tennis",
      "Volleyball",
    ],
    Cultural: [
      "Annual Cultural Fest",
      "Classical Music Evening",
      "Drama Competition",
      "Traditional Day Celebration",
      "Fashion Show",
      "Film Screening",
    ],
  });

  const handleLogout = () => {
    setUser(null);
    navigate("/login");
  };

  const removeEvent = (domain, eventName) => {
    setDomains({
      ...domains,
      [domain]: domains[domain].filter((e) => e !== eventName),
    });
    alert(`Event "${eventName}" removed successfully!`);
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <h1>Extracurricular Activities Management</h1>
        <div className="right-section">
          <span className="user-info">Welcome, {user.id}</span>
          <button className="logout-btn" onClick={handleLogout}>Logout</button>
        </div>
      </nav>

      {/* Remove Events Panel */}
      <div className="admin-container">
        <h3>Remove an Event</h3>

        {/* One by one domain sections */}
        {Object.keys(domains).map((domain) => (
          <div key={domain} style={{ marginBottom: "30px" }}>
            <h4 style={{ textAlign: "left", color: "#004080" }}>{domain}</h4>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <tbody>
                {domains[domain].map((event, index) => (
                  <tr key={index} style={{ borderBottom: "1px solid #ddd" }}>
                    <td style={{ padding: "8px", textAlign: "left" }}>
                      {event}
                    </td>
                    <td style={{ padding: "8px", textAlign: "right" }}>
                      <button
                        className="deregister-btn"
                        onClick={() => removeEvent(domain, event)}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}

        <div className="button-row">
          <button className="home-btn" onClick={() => navigate("/events")}>
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}