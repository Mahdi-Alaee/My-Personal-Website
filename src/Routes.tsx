import { RouteObject } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About/About";

export const routes: RouteObject[] = [
  { path: "", element: <Index /> },
  { path: "/about", element: <About /> }
];
