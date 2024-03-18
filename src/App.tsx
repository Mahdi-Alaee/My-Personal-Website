import { useState } from "react";
import Menu from "./components/Menu";
import MenuButton from "./components/MenuButton";
import ThemeButton from "./components/ThemeButton";
import { useRoutes } from "react-router-dom";
import { routes } from "./Routes";

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // setIsMenuOpen
  const router = useRoutes(routes);

  return (
    <div
      id="app"
      className="relative bg-darkColor text-white min-h-screen overflow-hidden"
    >
      {/* background shape */}
      <div className="absolute bg-yellowColor h-screen w-1/4 skew-x-12 -left-36 hidden lg:block"></div>

      {/* menu */}
      <Menu isMenuOpen={isMenuOpen} />

      {/* menu button */}
      <MenuButton isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      {/* Theme Button */}
      <ThemeButton />

      {/* pages */}
      {router}
    </div>
  );
};

export default App;
