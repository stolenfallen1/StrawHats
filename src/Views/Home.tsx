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
        />
        {isOpen && (
          <div className="fixed top-0 left-0 w-full h-full bg-white">
            <div className="flex flex-col items-center justify-center h-full text-xl font-medium tracking-tight">
              <Link to="/" onClick={toggleMenu}>
                Home
              </Link>
              <Link to="/characters" onClick={toggleMenu}>
                Characters
              </Link>
              <Link to="/forum" onClick={toggleMenu}>
                Forum
              </Link>
            </div>
          </div>
        )}
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/50 z-999"
          style={{ height: "88vh" }}
        >
          <HomeContent />
        </div>
      </div>
    </div>
  );
};

export default Home;
