interface CharacterListProps {
  index: number;
  image?: string;
  description?: string;
}

const CharacterList = ({ index, image, description }: CharacterListProps) => {
  const isReverse = index % 2 === 0;

  return (
    <div>
      <div
        className={`flex items-center gap-40 ${
          isReverse ? "flex-row-reverse" : "flex-row"
        }`}
      >
        <img src={image} />
        <p
          className="text-custom-gold text-2xl font-bold leading-10"
          style={{ width: "500px" }}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

export default CharacterList;
