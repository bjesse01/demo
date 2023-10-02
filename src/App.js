import { Media } from "./components/Media";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import "./App.css";
import { Footer } from "./container/Footer";

function App() {
  return (
    <div>
      <Media />
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
