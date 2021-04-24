import "./App.css";
import Header from "./components/Header/Header"; // Auto Import - ES6, TS, JSX, TSX (VSCode Extension)

function App() {
  return (
    // BEM
    <div className="app">
      <Header />
    </div>
  );
}

export default App;
