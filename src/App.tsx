import { useContext } from "react";
import Card from "./components/card.component";
import { WordContext } from "./context/word.contex";

function App() {
  const { word } = useContext(WordContext);
  return (
    <div className="flex justify-center bg-zinc-100 h-screen items-center">
      <Card />
    </div>
  );
}

export default App;
