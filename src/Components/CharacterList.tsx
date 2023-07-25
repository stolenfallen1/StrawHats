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
        <img src={image} />
        <div>
          <h1 className="mb-5 text-white text-3xl font-extrabold italic">
            {name}
          </h1>
          <p className="text-custom-gold text-xl font-bold leading-10 lg:w-96 md:w-auto">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CharacterList;
