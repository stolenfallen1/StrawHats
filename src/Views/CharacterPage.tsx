import { characterArray } from "../DataSource/characters";
import CharacterList from "../Components/CharacterList";

const CharacterPage = () => {
  return (
    <div className="p-0 m-0 box-border bg-custom-red">
      {characterArray.map((character, index) => (
        <CharacterList
          key={index}
          image={character.image}
          description={character.description}
        />
      ))}
    </div>
  );
};

export default CharacterPage;
