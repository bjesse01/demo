import { Media } from "./components/Media";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import "./App.css";

function App() {
  return (
    <div>
      <Media />
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
