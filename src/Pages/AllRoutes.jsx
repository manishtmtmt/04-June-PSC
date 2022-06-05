import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import { PrivateRoute } from "../components/PrivateRoute";
import Login from "./Login";
import Users from "./Users";
import UserPage from "./UserPage";

export const AllRoutes = () => {
  return (
    <div>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<div>Home</div>} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/users"
            element={
              // <PrivateRoute>
                <Users />
              // </PrivateRoute>
            }
          />
          <Route
            path="/users/:id"
            element={
              <PrivateRoute>
                <UserPage />
              </PrivateRoute>
            }
          />
        </Routes>
      </div>
    </div>
  );
};
