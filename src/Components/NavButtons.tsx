import { Link } from "react-router-dom";

function NavButtons() {
  return (
    <div className="flex flex-col justify-center h-full text-xl tracking-tight">
      <button className="text-white font-bold text-4xl py-2 hover:opacity-80">
        <Link to="/">Home</Link>
      </button>
      <button className="text-white font-bold text-4xl py-2 hover:opacity-80">
        <Link to="/characters">Characters</Link>
      </button>
      <button className="text-white font-bold text-4xl py-2 hover:opacity-80">
        <Link to="/forum">Forum</Link>
      </button>
    </div>
  );
}

export default NavButtons;