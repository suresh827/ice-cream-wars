import "./App.css";
import Header from "./components/Header";
import AddDesigner from "./components/AddDesigner";
import Votes from "./components/Votes";
import "./components/fonts.css";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="App">
      <Header />
      <table width="100%">
        <tr>
          <td width="50%">
            <AddDesigner />
          </td>
          <td width="50%">
            <Votes />
          </td>
        </tr>
      </table>
    </div>
  );
}

export default App;
