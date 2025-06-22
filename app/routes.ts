import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("about", "routes/about.tsx"),
  route("singers", "routes/singers.tsx"),
  route("singers/:singerName", "routes/singer-detail.tsx"), // <-- Add this line
] satisfies RouteConfig;