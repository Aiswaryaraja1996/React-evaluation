import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Allroutes from "./routes/Allroutes";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Allroutes />
    </BrowserRouter>
  );
}

export default App;
