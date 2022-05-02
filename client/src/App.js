import "./App.css";

import { CardWrapper } from "./components/CardWrapper/CardWrapper";
import cats from "../src/components/mocks/cats.json";

function App() {
  return (
    <div className="App">
      <CardWrapper cats={cats} />
    </div>
  );
}

export default App;
