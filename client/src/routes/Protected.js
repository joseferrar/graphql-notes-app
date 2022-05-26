import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import MainLayout from "../components/Navigation/MainLayout";

const Protected = () => {
  return  (
    <MainLayout>
      <Outlet />
    </MainLayout>
  ) 
};

export default Protected;