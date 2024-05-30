import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.scss';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from './pages/Homepage';
import PetID from './pages/PetID';
import * as serviceWorkerRegistration from './serviceWorkerRegistration'; // Bu satırı ekleyin

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

// Service worker'ı kaydedin
serviceWorkerRegistration.register();