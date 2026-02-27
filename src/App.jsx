import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import LoginRegister from "./components/LoginRegister";
import Register from "./components/Register";
import Events from "./components/Events";
import EventDetails from "./components/EventDetails";
import Admin from "./components/Admin";
import ManageOptions from "./components/ManageOptions";
import RemoveEvents from "./components/RemoveEvents";

function App() {
  const [user, setUser] = useState(null);

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<LoginRegister setUser={setUser} />} />
      <Route path="/register" element={<Register setUser={setUser} />} />

      {/* Shared Events Page for both students and admins */}
      <Route
        path="/events"
        element={
          user ? (
            <Events user={user} setUser={setUser} />
          ) : (
            <Navigate to="/login" />
          )
        }
      />

      {/* Event Details Page */}
      <Route
        path="/events/:id"
        element={
          user ? (
            <EventDetails user={user} setUser={setUser} />
          ) : (
            <Navigate to="/login" />
          )
        }
      />

      {/* Manage Events Choice Screen */}
      <Route
        path="/admin"
        element={
          user?.role === "admin" ? (
            <ManageOptions user={user} setUser={setUser} />
          ) : (
            <Navigate to="/login" />
          )
        }
      />

      {/* Direct Admin Page */}
      <Route
        path="/adminPage"
        element={
          user?.role === "admin" ? (
            <Admin user={user} setUser={setUser} />
          ) : (
            <Navigate to="/login" />
          )
        }
      />

      {/* Add Event */}
      <Route
        path="/admin/add"
        element={
          user?.role === "admin" ? (
            <Admin user={user} setUser={setUser} />
          ) : (
            <Navigate to="/login" />
          )
        }
      />

      {/* Remove Event */}
      <Route
        path="/admin/remove"
        element={
          user?.role === "admin" ? (
            <RemoveEvents user={user} setUser={setUser} />
          ) : (
            <Navigate to="/login" />
          )
        }
      />
    </Routes>
  );
}

export default App;