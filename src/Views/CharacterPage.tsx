import { characterArray } from "../DataSource/characters";
import CharacterList from "../Components/CharacterList";

const CharacterPage = () => {
  return (
    <div className="xl:m-0 lg:p-15 md:p-10 sm:p-10 custom-400:p-8 custom-300:p-6 box-border bg-custom-red">
      {characterArray.map((character, index) => (
        <CharacterList
          name={character.name}
          index={index}
          image={character.image}
          description={character.description}
        />
      ))}
    </div>
  );
};

export default CharacterPage;
