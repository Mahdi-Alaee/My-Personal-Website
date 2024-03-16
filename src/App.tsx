import { useState } from "react";
import Menu from "./components/Menu";
import MenuButton from "./components/MenuButton";

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true); // setIsMenuOpen

  return (
    <div
      id="app"
      className="relative bg-darkColor min-h-screen overflow-hidden"
    >
      {/* background shape */}
      <div className="absolute bg-yellowColor h-screen w-1/4 skew-x-12 -left-36 hidden lg:block"></div>

      {/* menu */}
      <Menu isMenuOpen={isMenuOpen} />

      {/* menu button */}
      <MenuButton isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </div>
  );
};

export default App;
