interface CharacterListProps {
  image?: string;
  description?: string;
}

const CharacterList = ({ image, description }: CharacterListProps) => {
  return (
    <div>
      <div className="flex items-center gap-10">
        <img src={image} />
        <p className="text-custom-gold">{description}</p>
      </div>
    </div>
  );
};

export default CharacterList;
