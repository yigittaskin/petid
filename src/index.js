import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.scss';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from './pages/Homepage';
import PetID from './pages/PetID';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "app/:id",
    element: <PetID />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <RouterProvider router={router} />
  </>
);
