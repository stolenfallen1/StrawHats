import { useState } from "react";
import Navbar from "../Components/Navbar";

const CharacterPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div>
      <div>
        <Navbar isOpen={isOpen} toggleMenu={toggleMenu} />
      </div>
    </div>
  );
};

export default CharacterPage;
