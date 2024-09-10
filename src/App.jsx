
import { Route, Routes } from "react-router-dom";
import Playstation from "./pages/Playstation";
import Xbox from "./pages/Xbox";
import Nintendo from "./pages/Nintendo";
import Cart from "./pages/Cart";





function App() {

  return (
    <>
  <Routes>
    <Route index element={< Playstation/>}/>
    <Route path="xbox" element={< Xbox />}/>
    <Route path="nintendo" element={< Nintendo/>}/>
    <Route path="cart" element={< Cart />}/>
  </Routes>
    
    </>
  )
}

export default App;