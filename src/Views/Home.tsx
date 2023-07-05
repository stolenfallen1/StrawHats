import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import HomeContent from "../Components/HomeContent";
import HomeWallpaper from "../Asset/HomeAssets/HomeWallpaper.jpeg";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col h-screen">
      <div style={{ height: "12vh" }}>
        <Navbar isOpen={isOpen} toggleMenu={toggleMenu} />
      </div>
      <div className="relative">
        <img
          src={HomeWallpaper}
          className="absolute inset-0 w-full object-cover"
          style={{ height: "88vh" }}
          alt="Home Wallpaper"
        />
        <div
          className={`fixed inset-0 top-0 left-0 bg-black z-50 transition-transform duration-700 ${
            isOpen ? "translate-y-0" : "translate-y-full"
          }`}
          style={{ backgroundColor: "rgba(0, 0, 0, 0.85)" }}
          onClick={toggleMenu}
        >
          <div className="flex flex-col justify-center h-full text-xl tracking-tight">
            <button className="text-white font-bold text-4xl py-2 hover:opacity-80">
              <Link to="/" onClick={toggleMenu}>
                Home
              </Link>
            </button>
            <button className="text-white font-bold text-4xl py-2 hover:opacity-80">
              <Link to="/characters" onClick={toggleMenu}>
                Characters
              </Link>
            </button>
            <button className="text-white font-bold text-4xl py-2 hover:opacity-80">
              <Link to="/forum" onClick={toggleMenu}>
                Forum
              </Link>
            </button>
          </div>
        </div>
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/50 z-999"
          style={{ height: "88vh" }}
        ></div>
        <div className="absolute inset-0 z-100">
          <HomeContent />
        </div>
      </div>
    </div>
  );
};

export default Home;
