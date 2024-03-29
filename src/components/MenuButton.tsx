interface MenuButtonProps {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MenuButton: React.FC<MenuButtonProps> = ({
  isMenuOpen,
  setIsMenuOpen,
}) => {
  return (
    <button
      id="btn-menu-responsive"
      className={`btn-menu bg-darkBrown rounded-lg ${!isMenuOpen ? "" : "close"} lg:hidden`}
      onClick={() => setIsMenuOpen((prev) => !prev)}
    >
      <span></span>
    </button>
  );
};

export default MenuButton;
