// interface MenuButtonProps {
//     isMenuOpen: boolean;
//     setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
//   }

const MenuButton: React.FC =
  //   <MenuButtonProps>
  () =>
    //         {
    //     isMenuOpen,
    //     setIsMenuOpen,
    //   }
    {
      return (
        <button
          id="btn-menu-responsive"
          className={`btn-menu dark:bg-darkBrown rounded-lg 
        ${
          // !isMenuOpen ? "" : "close"
          ""
        }
         lg:hidden bg-gray-300`}
          // onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <span></span>
        </button>
      );
    };

export default MenuButton;
