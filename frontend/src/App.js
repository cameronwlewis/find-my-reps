import "./App.css";
import FindMyCongressmen from "./components/FindMyCongressmen";

function App() {
  return (
    <div className="App">
      <header className="appHeader">
        <div>Find your</div>
        <div>congressmen.</div>
      </header>
      <div className={"appBody"}>
        <FindMyCongressmen />
      </div>
    </div>
  );
}

export default App;
