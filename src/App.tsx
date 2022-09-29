import "./App.css";
import Header from "./components/Header";
import AddDesigner from "./components/AddDesigner";
import Votes from "./components/Votes";
import "./components/fonts.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div>
        <AddDesigner />
      </div>
      <div>
        <Votes />
      </div>
    </div>
  );
}

export default App;
