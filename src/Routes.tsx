import { RouteObject } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About/About";
import Portfolio from "./pages/Portfolio/Portfolio";
import Contact from "./pages/Contact/Contact";
import Articles from "./pages/Articles/Articles";

export const routes: RouteObject[] = [
  { path: "", element: <Index /> },
  { path: "/about", element: <About /> },
  { path: "/portfolio", element: <Portfolio /> },
  { path: "/contact", element: <Contact /> },
  { path: "/blog", element: <Articles /> },
];
