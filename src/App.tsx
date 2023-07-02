import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Views/Home";
import CharacterPage from "./Views/CharacterPage";

function App() {
  return (
    <div className="p-0 m-0 box-border">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/characters" element={<CharacterPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
