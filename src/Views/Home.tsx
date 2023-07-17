import { useState } from "react";
import HomeWallpaper from "../Asset/HomeAssets/HomeWallpaper.jpg";
import Navbar from "../Components/Navbar";
import NavButtons from "../Components/NavButtons";
import HomeContent from "../Components/HomeContent";

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
          <NavButtons />
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
