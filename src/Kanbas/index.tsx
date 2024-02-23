import Courses from "./Courses";
import Dashboard from "./Dashboard";
import KanbasNavigator from "./Navigation";
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

function Kanbas() {
  return (
    <div className="d-flex">
      <KanbasNavigator />
      <div style={{ flexGrow: 1}}>
        <Routes>
          <Route path="Account" element={<h2>Account</h2>} />
          <Route path="Dashboard" element={<Dashboard />} />
          <Route path="Calendar" element={<h2>Calendar</h2>} />
          <Route path="Courses/:courseId/*" element={<Courses />} />
        </Routes>
      </div>
    </div>
  );
}

export default Kanbas;