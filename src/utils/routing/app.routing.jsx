import React from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import HerStepApp from "@/HerStepApp";
import Login from "@views/Login/Login";
import Solutions from "@views/Solutions/Solutions";
import Resources from "@views/Resources/Resources";
import Steps from "@views/Steps/Steps";

export const appRouting = createBrowserRouter([
  {
    path: "*",
    element: <Navigate to="/soluciones" replace />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/*",
    element: <HerStepApp />,
    children: [
      {
        path: "soluciones",
        element: <Solutions />,
        index: true,
      },
      {
        path: "recursos",
        element: <Resources />,
      },
      {
        path: "Pasos",
        element: <Steps />,
      },
    ],
  },
]);
