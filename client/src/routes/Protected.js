import React, { useEffect } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import MainLayout from "../components/Navigation/MainLayout";

const Protected = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/home");
    } else if (!token) {
      localStorage.removeItem("token");
      navigate("/");
    }
  }, [token]);
  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  );
};

export default Protected;
