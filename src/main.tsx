import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";

import Booking from "./components/Booking.tsx";
import ErrorPage from "./pages/ErrorPage.tsx";
import DetailedFeatures from "./pages/DetailedFeatures.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    // loader: rootLoader,
    // action: rootAction,
  },
  {
    path: "/booking",
    element: <Booking />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/features/:id",
    element: <DetailedFeatures />
  }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
