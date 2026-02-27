import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Events({ user, setUser }) {
  const navigate = useNavigate();

  const [domains] = useState({
    Technical: [
      {
        name: "Web Development Workshop",
        desc: "Learn React, Node.js, and databases.",
        date: "March 18, 2026",
        time: "10:00 AM - 3:00 PM",
        location: "Computer Lab A, Building 3",
      },
      {
        name: "AI & ML Seminar",
        desc: "Explore fundamentals of AI and ML.",
        date: "March 20, 2026",
        time: "2:00 PM - 5:00 PM",
        location: "Auditorium Hall, Main Building",
      },
      {
        name: "Hackathon 2026",
        desc: "24-hour coding marathon with prizes.",
        date: "March 25, 2026",
        time: "9:00 AM - 9:00 PM",
        location: "Innovation Center",
      },
      {
        name: "Cybersecurity Awareness",
        desc: "Understand threats and ethical hacking.",
        date: "April 1, 2026",
        time: "11:00 AM - 2:00 PM",
        location: "Computer Lab B, Building 3",
      },
      {
        name: "Cloud Computing Basics",
        desc: "Intro to cloud platforms and services.",
        date: "April 5, 2026",
        time: "10:00 AM - 1:00 PM",
        location: "Lab C",
      },
      {
        name: "Data Science Bootcamp",
        desc: "Hands-on with Python and data analysis.",
        date: "April 10, 2026",
        time: "9:00 AM - 4:00 PM",
        location: "Lab D",
      },
    ],
    "Non-Technical": [
      {
        name: "Public Speaking Workshop",
        desc: "Boost confidence and presentation skills.",
        date: "March 18, 2026",
        time: "4:00 PM - 6:00 PM",
        location: "Seminar Hall 2",
      },
      {
        name: "Creative Writing Club",
        desc: "Improve storytelling and writing skills.",
        date: "March 22, 2026",
        time: "5:00 PM - 7:00 PM",
        location: "Library Room 1",
      },
      {
        name: "Photography Exhibition",
        desc: "Showcase student photography work.",
        date: "March 28, 2026",
        time: "1:00 PM - 8:00 PM",
        location: "Art Gallery",
      },
      {
        name: "Cooking Challenge",
        desc: "Fun cooking competition with peers.",
        date: "March 30, 2026",
        time: "11:00 AM - 2:00 PM",
        location: "Cafeteria",
      },
      {
        name: "Debate Competition",
        desc: "Sharpen critical thinking and arguments.",
        date: "April 3, 2026",
        time: "2:00 PM - 6:00 PM",
        location: "Auditorium",
      },
      {
        name: "Art & Painting",
        desc: "Express creativity through colors.",
        date: "April 6, 2026",
        time: "10:00 AM - 1:00 PM",
        location: "Fine Arts Room",
      },
    ],
    Sports: [
      {
        name: "Basketball Tournament",
        desc: "Annual inter-department basketball championship.",
        date: "March 16, 2026",
        time: "4:00 PM - 8:00 PM",
        location: "Basketball Court",
      },
      {
        name: "Cricket Championship",
        desc: "T20 cricket tournament.",
        date: "March 21, 2026",
        time: "2:00 PM - 7:00 PM",
        location: "Cricket Ground",
      },
      {
        name: "Marathon Run 5K",
        desc: "Promoting fitness and health awareness.",
        date: "March 27, 2026",
        time: "6:00 AM - 9:00 AM",
        location: "Campus Main Gate",
      },
      {
        name: "Badminton Singles",
        desc: "Knockout rounds for singles.",
        date: "April 2, 2026",
        time: "5:00 PM - 8:00 PM",
        location: "Indoor Stadium",
      },
      {
        name: "Table Tennis",
        desc: "Quick reflex indoor sport.",
        date: "April 7, 2026",
        time: "3:00 PM - 6:00 PM",
        location: "Sports Hall",
      },
      {
        name: "Volleyball",
        desc: "Team sport with spikes and blocks.",
        date: "April 12, 2026",
        time: "4:00 PM - 7:00 PM",
        location: "Volleyball Court",
      },
    ],
    Cultural: [
      {
        name: "Annual Cultural Fest",
        desc: "Grand festival of dance, music, drama.",
        date: "March 17, 2026",
        time: "5:00 PM - 10:00 PM",
        location: "Open Grounds",
      },
      {
        name: "Classical Music Evening",
        desc: "An evening of classical performances.",
        date: "March 23, 2026",
        time: "6:00 PM - 9:00 PM",
        location: "Auditorium",
      },
      {
        name: "Drama Competition",
        desc: "Inter-department drama competition.",
        date: "March 29, 2026",
        time: "4:00 PM - 9:00 PM",
        location: "Drama Hall",
      },
      {
        name: "Traditional Day Celebration",
        desc: "Celebrate diversity with traditional attire.",
        date: "April 4, 2026",
        time: "10:00 AM - 6:00 PM",
        location: "Campus Grounds",
      },
      {
        name: "Fashion Show",
        desc: "Showcase creativity in fashion.",
        date: "April 8, 2026",
        time: "5:00 PM - 8:00 PM",
        location: "Auditorium",
      },
      {
        name: "Film Screening",
        desc: "Watch and discuss classic films.",
        date: "April 15, 2026",
        time: "6:00 PM - 9:00 PM",
        location: "Media Room",
      },
    ],
  });

  const [selectedDomain, setSelectedDomain] = useState("Technical");

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <h1>Extracurricular Activities Management</h1>
        <div className="right-section">
          <span className="user-info">Welcome, {user.id}</span>

          {user.role === "admin" && (
            <button
              className="manage-btn"
              onClick={() => navigate("/admin")}
              style={{ backgroundColor: "#f7d673", color: "#000" }}
            >
              Manage Events
            </button>
          )}

          <button
            className="logout-btn"
            onClick={() => {
              setUser(null);
              navigate("/login");
            }}
          >
            Logout
          </button>
        </div>
      </nav>

      {/* Domain Tabs */}
      <div className="domain-tabs">
        {Object.keys(domains).map((domain) => (
          <button
            key={domain}
            className={selectedDomain === domain ? "active-tab" : "tab"}
            onClick={() => setSelectedDomain(domain)}
          >
            {domain}
          </button>
        ))}
      </div>

      {/* Activities Grid */}
      <div className="activities-grid">
        {domains[selectedDomain].map((activity, index) => (
          <div key={index} className="activity-card">
            <h3>{activity.name}</h3>
            <p>{activity.desc}</p>
            <p>
              <b>Date:</b> {activity.date}
            </p>
            <p>
              <b>Time:</b> {activity.time}
            </p>
            <button
              className="details-btn"
              onClick={() =>
                navigate(`/events/${index}`, { state: activity })
              }
            >
              More Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}