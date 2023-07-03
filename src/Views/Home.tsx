import Navbar from "../Components/Navbar";
import HomeContent from "../Components/HomeContent";
import HomeWallpaper from "../Asset/HomeAssets/HomeWallpaper.jpeg";

const Home = () => {
  return (
    <div className="flex flex-col h-screen">
      <div style={{ height: "12vh" }}>
        <Navbar />
      </div>
      <div className="relative">
        <img
          src={HomeWallpaper}
          className="absolute inset-0 w-full object-cover"
          style={{ height: "88vh" }}
        />
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
