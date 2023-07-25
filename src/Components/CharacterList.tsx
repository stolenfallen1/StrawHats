interface CharacterListProps {
  name: string;
  index: number;
  image?: string;
  description?: string;
}

const CharacterList = ({
  name,
  index,
  image,
  description,
}: CharacterListProps) => {
  const isReverse = index % 2 === 0;

  return (
    <div>
      <div
        className={`flex items-center md:flex-col sm:flex-col custom-400:flex-col custom-300:flex-col xl:gap-40 lg:gap-10 md:gap-8 ${
          isReverse ? "lg:flex-row-reverse" : "lg:flex-row"
        }`}
      >
        <img
          src={image}
          className="lg:mt-0 md:mt-5 sm:mt-8 custom-400:mt-9 custom-300:mt-10"
        />
        <div>
          <h1
            className="lg:mt-0 md:mt-5 sm:mt-6 custom-400:mt-7 custom-300:mt-8 mb-5 text-white 
          md:text-left sm:text-center custom-400:text-center custom-300:text-center text-3xl font-extrabold italic"
          >
            {name}
          </h1>
          <p className="custom-styles text-custom-gold text-xl text-justify font-bold leading-10">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CharacterList;
