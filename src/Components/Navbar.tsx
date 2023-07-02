import { Link } from "react-router-dom";
import Logo from "../Asset/HomeAssets/LuffyHat.png";

const Navbar = () => {
  return (
    <div className="flex px-10 py-3 justify-between items-center bg-custom-red">
      <div>
        <img src={Logo} style={{ width: "85px", height: "auto" }} />
      </div>
      <ul className="flex items-center text-xl font-medium tracking-tight">
        <li className="px-3 text-custom-gold hover:text-opacity-70">
          <Link to="/">Home</Link>
        </li>
        <li className="px-3 text-custom-gold hover:text-opacity-70">
          <Link to="/characters">Characters</Link>
        </li>
        <li className="px-3 text-custom-gold hover:text-opacity-70">
          <Link to="/forum">Forum</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
