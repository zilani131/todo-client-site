
import './App.css';
import { Routes, Route} from "react-router-dom";
import Home from './Pages/Home';
import About from './Pages/About';
import Navbar from './Shared/Navbar';
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
<button class="btn btn-outline btn-primary">Button</button>
<Routes>
        <Route path="/home" element={<Home></Home>} />
        <Route path="/about" element={<About></About>} />
      </Routes>
    </div>
  );
}

export default App;
