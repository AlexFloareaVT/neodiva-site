import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './router'; // Import your router configuration

// Get the root element from your HTML (usually index.html)
const rootElement = document.getElementById('root');

ReactDOM.createRoot(rootElement!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);