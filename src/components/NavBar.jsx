import React from "react";
import { useNavigate } from "react-router-dom";

export default function NavBar({ user, setUser }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null); // clear user state
    navigate("/login"); // redirect to login page
  };

  return (
    <nav className="navbar">
      <h1>Extracurricular Activities Management</h1>
      {user && (
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <span className="user-info">Welcome, {user.id}</span>
          <button onClick={handleLogout} className="logout-btn">
            Logout
          </button>
        </div>
      )}
    </nav>
  );
}