import { useState } from "react";
import Menu from "./components/Menu";

const App : React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  return (
    <div id='app' className="relative bg-darkColor min-h-screen overflow-hidden">
      {/* background shape */}
      <div className="absolute bg-yellowColor h-screen w-1/4 skew-x-12 -left-36 hidden lg:block"></div>

      <Menu isMenuOpen={isMenuOpen} />
    </div>
  )
}

export default App;