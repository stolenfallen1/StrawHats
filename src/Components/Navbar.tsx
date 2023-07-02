import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <ul className="flex px-10 py-8 justify-end items-center text-xl font-medium tracking-tight bg-custom-red">
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
