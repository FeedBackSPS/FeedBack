import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.jsx"), // hlavní stránka
  route("login", "routes/login.jsx"), // nová route /login
] satisfies RouteConfig;
