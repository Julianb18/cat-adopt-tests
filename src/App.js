import "./App.css";
import { Card } from "./components/Card/Card";

function App() {
  return (
    <div className="App">
      <Card
        name="Sydney"
        phone="111-111-1111"
        email="forrest@gmail.com"
        image={{
          url: "https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
          alt: "cute cat",
        }}
        favoured={false}
      />
    </div>
  );
}

export default App;
