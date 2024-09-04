
import { Route, Routes } from "react-router-dom";
import Playstation from "./pages/Playstation";
import Xbox from "./pages/Xbox";
import Nintendo from "./pages/Nintendo";



function App() {

  return (
    <>
  <Routes>
    <Route index element={< Playstation/>}/>
    <Route path="xbox" element={< Xbox />}/>
    <Route path="nintendo" element={< Nintendo/>}/>
  </Routes>
    
    </>
  )
}

export default App;