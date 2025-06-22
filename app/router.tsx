import React from 'react';
import { createBrowserRouter } from "react-router-dom";

// Import the main layout and error boundary
import App, { ErrorBoundary, Layout } from './root';

// Import all the page components
import HomePage from './routes/home';
import AboutPage from './routes/about';
import SingersPage from './routes/singers';
import SingerDetailPage from './routes/singer-detail';

// Create the browser router configuration.
// The 'basename' is crucial for GitHub Pages project sites.
// Replace 'NeoDivaREVAMP' with your actual repository name.
export const router = createBrowserRouter([
  {
    // The App component provides the consistent layout (TopBar, background, etc.)
    element: <App />,
    // The ErrorBoundary will catch errors in the layout and child routes
    errorElement: <ErrorBoundary />,
    children: [
      {
        // The index route for the base path '/'
        index: true,
        element: <HomePage />,
      },
      {
        path: "home",
        element: <HomePage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "singers",
        // The singers list page. Note: The full path will be /NeoDivaREVAMP/singers
        // due to the basename configuration.
        element: <SingersPage />,
      },
      {
        path: "singers/:singerName",
        // The singer detail page at '/singers/some-name'
        element: <SingerDetailPage />,
      },
    ],
  },
], {
  basename: "/NeoDivaREVAMP/", // Your GitHub repository name
});