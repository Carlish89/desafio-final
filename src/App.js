
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Home from "./views/home";
import Navbar from "./components/Navbar";
import { Provider } from "./Context";
import Pizza from "./views/Pizza";
import  Carrito  from "./views/Carrito";
function App() {
 
  return (
    <div className="App">
      <Provider>
      <BrowserRouter>
        <Navbar />
        <Routes>
        <Route path="/carrito" element={<Carrito />} />
          <Route path="/" element={<Home />} />
          <Route path="/pizza/:id" element={<Pizza />} />
        </Routes>
      </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
