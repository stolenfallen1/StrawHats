import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const HomeContent = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className={`px-5 py-40 ${
        isSmallScreen ? "flex justify-center items-center" : "flex justify-end"
      } `}
    >
      {isSmallScreen ? (
        <div>
          <div className="w-[400px] custom-400:w-[375px] custom-300:w-[300px] text-center">
            <h1 className="text-4xl text-custom-gold font-bold leading-normal">
              Embark on a Legendary Voyage: Uniting One Piece Enthusiasts
              Worldwide.
            </h1>
            <button className="mt-5 mr-5 px-3 py-2 bg-black text-white border-2 border-custom-red hover:border-custom-gold ease-in duration-300">
              <Link to="/characters" className="text-2xl">
                See More
              </Link>
            </button>
            <button className="mt-5 px-3 py-2 bg-black text-white border-2 border-custom-red hover:border-custom-gold ease-in duration-300">
              <Link to="/forum" className="text-2xl">
                Learn More
              </Link>
            </button>
          </div>
        </div>
      ) : (
        <>
          <div className="flex-1">
            <div className="lg:w-[400px] md:w-[300px] mx-auto">
              <h1 className="text-4xl text-custom-gold font-bold leading-normal">
                Unveiling Legends, Unleashing Dreams: Dive into the World of One
                Piece Characters.
              </h1>
              <button className="mt-5 px-3 py-2 bg-black text-white border-2 border-custom-red hover:border-custom-gold ease-in duration-300">
                <Link to="/characters" className="text-2xl">
                  See More
                </Link>
              </button>
            </div>
          </div>
          <div className="flex-1">
            <div className="text-right">
              <div className="lg:w-[400px] md:w-[300px] mx-auto text-right">
                <h1 className="text-4xl text-custom-gold font-bold leading-normal">
                  Embrace the Grand Line of Knowledge: Uniting One Piece Fans
                  Worldwide.
                </h1>
                <button className="mt-5 px-3 py-2 bg-black text-white border-2 border-custom-red hover:border-custom-gold ease-in duration-300">
                  <Link to="/forum" className="text-2xl">
                    Learn More
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default HomeContent;
