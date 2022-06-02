import React, { useEffect } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import MainLayout from "../components/Navigation/MainLayout";

const Protected = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      navigate("/home");
    } else if (!token) {
      navigate("/");
    }
  }, [token]);

  setTimeout(() => {
    localStorage.clear();
    navigate("/");
  }, 15000);

  return (
    <MainLayout> 
      <Outlet />
    </MainLayout>
  );
};

export default Protected;
