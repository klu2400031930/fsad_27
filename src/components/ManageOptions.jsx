import React from "react";
import { useNavigate } from "react-router-dom";

export default function ManageOptions({ user, setUser }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    navigate("/login");
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <h1>Extracurricular Activities Management</h1>
        <div className="right-section">
          <span className="user-info">Welcome, {user.id}</span>
          <button
            className="manage-btn"
            onClick={() => navigate("/admin")}
            style={{ backgroundColor: "#f7d673", color: "#000" }}
          >
            Manage Events
          </button>
          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </nav>

      {/* Manage Options Box */}
      <div className="admin-container">
        <h3>Manage Events</h3>
        <button
          style={{ backgroundColor: "#007bff", color: "white" }}
          onClick={() => navigate("/admin/add")}
        >
          Add an Event
        </button>
        <button
          style={{ backgroundColor: "#dc3545", color: "white" }}
          onClick={() => navigate("/admin/remove")}
        >
          Remove an Event
        </button>
      </div>
    </div>
  );
}