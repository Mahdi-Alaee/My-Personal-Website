import { useEffect, useState } from "react";
import Menu from "./components/Menu/Menu";
import MenuButton from "./components/MenuButton";
import ThemeButton from "./components/ThemeButton";
import { useLocation, useRoutes } from "react-router-dom";
import { routes } from "./Routes";
import ThemeMenu from "./components/ThemeMenu";

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isThemeMenuOpen, setIsThemeMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const router = useRoutes(routes);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <div
      id="app"
      className="relative dark:bg-darkColor dark:text-white min-h-screen overflow-hidden"
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
      <ThemeButton
        isThemeMenuOpen={isThemeMenuOpen}
        setIsThemeMenuOpen={setIsThemeMenuOpen}
      />

      {/* Theme Menu */}
      <ThemeMenu isThemeMenuOpen={isThemeMenuOpen} isDark={isDark} setIsDark={setIsDark} />

      {/* pages */}
      <div className="relative z-10">{router}</div>
    </div>
  );
};

export default App;
