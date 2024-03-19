import { useEffect, useState } from "react";
import Menu from "./components/Menu/Menu";
import MenuButton from "./components/MenuButton";
import ThemeButton from "./components/ThemeButton";
import { useLocation, useRoutes } from "react-router-dom";
import { routes } from "./Routes";

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // setIsMenuOpen
  const router = useRoutes(routes);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <div
      id="app"
      className="relative bg-darkColor text-white min-h-screen overflow-hidden"
    >
      {/* background shape */}
      {location.pathname === "/" && (
        <div className="absolute bg-yellowColor h-screen skew-x-12 -left-36 hidden lg:block lg:w-4/12 xxl:w-3/12"></div>
      )}

      {/* menu */}
      <Menu isMenuOpen={isMenuOpen} />

      {/* menu button */}
      <MenuButton isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      {/* Theme Button */}
      <ThemeButton />

      {/* pages */}
      <div className="relative z-10">{router}</div>
    </div>
  );
};

export default App;
