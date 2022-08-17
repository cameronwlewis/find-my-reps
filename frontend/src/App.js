import logo from "./logo.svg";
import "./App.css";
import FindMyCongressmen from "./components/FindMyCongressmen";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <FindMyCongressmen />
      </header>
    </div>
  );
}

export default App;
