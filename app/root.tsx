import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation,
} from "react-router-dom";

import type { Route } from "./+types/root";
import "./app.css";
import TopBar from "./components/TopBar.jsx";
import Squares from "./components/Grid.tsx";
import ClickSpark from './components/ClickSpark.tsx';

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  const location = useLocation();

  // Check if the path matches the pattern for a singer detail page
  const isSingerDetailPage = /^\/singers\/.+/.test(location.pathname);

  // Dynamically set the max-width class based on the page
  const maxWidthClass = isSingerDetailPage ? 'max-w-[1900px]' : 'max-w-[1400px]';

  return (
    // This outer container prevents the browser's main scrollbar
    <div className="h-screen overflow-hidden text-gray-200 font-sans">
      {/* This is the fixed grid background that does not scroll */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
        }}
      >
        <Squares
          speed={0.2}
          squareSize={40}
          direction='right'
          borderColor='#fff'
          hoverFillColor='#222'
        />
      </div>
<ClickSpark
  sparkColor='#fff'
  sparkSize={10}
  sparkRadius={15}
  sparkCount={8}
  duration={400}
>
      {/* This new div is the single, transparent container for all scrollable content */}
      <div id="scroll-container" className="h-full w-full overflow-y-auto">

        <TopBar />
        <main className={`${maxWidthClass} mx-auto px-4 sm:px-6 lg:px-8 py-4`}>
          <Outlet />
        </main>
      </div>
</ClickSpark>
    </div>
  );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}