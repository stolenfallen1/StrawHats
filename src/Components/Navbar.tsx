import Logo from "../Asset/HomeAssets/LuffyHat.png";
import { Squash as Hamburger } from "hamburger-react";

type NavbarProps = {
  isOpen: boolean;
  toggleMenu: () => void;
};

const Navbar = ({ isOpen, toggleMenu }: NavbarProps) => {
  return (
    <div className="flex px-10 py-3 justify-between items-center bg-custom-red">
      <div>
        <img src={Logo} style={{ width: "85px", height: "auto" }} alt="Logo" />
      </div>
      <Hamburger toggled={isOpen} toggle={toggleMenu} />
    </div>
  );
};

export default Navbar;
