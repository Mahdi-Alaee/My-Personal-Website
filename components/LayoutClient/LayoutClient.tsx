"use client";

import { useState } from "react";
import Menu from "../Menu/Menu";
import MenuButton from "../MenuButton/MenuButton";
import ThemeButton from "../ThemeButton/ThemeButton";
import ThemeMenu from "../ThemeMenu/ThemeMenu";
import HomeShape from "../HomeShape/HomeShape";

export default function LayoutClient() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isThemeMenuOpen, setIsThemeMenuOpen] = useState(false);

  return (
    <>
      {location.pathname === "/" && <HomeShape />}
      <Menu isMenuOpen={isMenuOpen} />
      <MenuButton isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <ThemeButton
        isThemeMenuOpen={isThemeMenuOpen}
        setIsThemeMenuOpen={setIsThemeMenuOpen}
      />
      <ThemeMenu isThemeMenuOpen={isThemeMenuOpen} />
    </>
  );
}
