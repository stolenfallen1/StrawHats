import luffy from "../Asset/CharacterAssets/luffy.png";
import zoro from "../Asset/CharacterAssets/zoro.png";
import nami from "../Asset/CharacterAssets/nami.png";
import sanji from "../Asset/CharacterAssets/sanji.png";
import usopp from "../Asset/CharacterAssets/usopp.png";
import robin from "../Asset/CharacterAssets/robin.png";
import chopper from "../Asset/CharacterAssets/chopper.png";
import franky from "../Asset/CharacterAssets/franky.png";
import jimbei from "../Asset/CharacterAssets/jimbei.png";

const CharacterList = () => {
  return (
    <div>
      <div>
        <img src={luffy} />
        <img src={zoro} />
        <img src={nami} />
        <img src={sanji} />
        <img src={usopp} />
        <img src={robin} />
        <img src={chopper} />
        <img src={franky} />
        <img src={jimbei} />
      </div>
    </div>
  );
};

export default CharacterList;
