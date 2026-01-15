import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.jsx"), // hlavní stránka
  route("login", "routes/login.jsx"), // nová route /login
  route("logout", "routes/logout.jsx"), // nová route /logout
  route("sendAnswers", "routes/sendAnswers.jsx"), // nová route /sendAnswers
] satisfies RouteConfig;
