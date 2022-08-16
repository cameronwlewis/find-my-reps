import logo from "./logo.svg";
import "./App.css";
import FindMyReps from "./components/FindMyReps";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <FindMyReps />
      </header>
    </div>
  );
}

export default App;
