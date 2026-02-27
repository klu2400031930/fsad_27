import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register({ setUser }) {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    if (id.length === 0) {
      alert("Enter Student ID");
      return;
    }
    if (id.length > 10) {
      alert("ID must be max 10 digits");
      return;
    }
    if (password.length === 0) {
      alert("Enter Password");
      return;
    }

    const newUser = { id, role: isAdmin ? "admin" : "student" };
    setUser(newUser);

    // ✅ Redirect all users to Events page
    navigate("/events");
  };

  return (
    <div>
      <nav className="navbar">
        <h1>Extracurricular Activities Management</h1>
      </nav>

      {/* ✅ Use same container and form classes as Login */}
      <div className="login-container">
        <h2>Create Account</h2>
        <p>Register to access extracurricular activities</p>

        <form onSubmit={handleRegister} className="login-form">
          <label>Student ID / Username</label>
          <input
            type="text"
            placeholder="Enter your student ID"
            value={id}
            onChange={(e) => setId(e.target.value)}
            maxLength={10}
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="checkbox">
            <input
              type="checkbox"
              checked={isAdmin}
              onChange={(e) => setIsAdmin(e.target.checked)}
            />
            <span>Register as Administrator</span>
          </div>

          <button type="submit">Register</button>
        </form>

        <p>
          Already have an account? <a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
}