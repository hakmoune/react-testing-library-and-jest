import logo from "./logo.svg";
import "./App.css";

export const sum = (a, b) => {
  return a + b;
};

function App() {
  return (
    <div>
      <button>{sum(1, 5)}</button>
      <h1 data-testid="myTitle">{sum(1, 5)}</h1>
      <h3>Hakmoune el mahdi</h3>
    </div>
  );
}

export default App;
