import { Link } from "react-router-dom";

const HomeContent = () => {
  return (
    <div className="flex justify-end px-5 py-40">
      <div className="flex-1">
        <div className="w-[400px] mx-auto">
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
          <div className="w-[400px] mx-auto text-right">
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
    </div>
  );
};

export default HomeContent;
