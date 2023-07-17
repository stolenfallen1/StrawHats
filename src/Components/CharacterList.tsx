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
        className={`flex items-center gap-40 ${
          isReverse ? "flex-row-reverse" : "flex-row"
        }`}
      >
        <img src={image} />
        <div>
          <h1 className="mb-5 text-white text-3xl font-extrabold">{name}</h1>
          <p
            className="text-custom-gold text-xl font-bold leading-10"
            style={{ width: "500px" }}
          >
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CharacterList;
