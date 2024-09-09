import {Routes, Route} from "react-router-dom"
import Home from "./pages/home"
import './App.css'
import Products from "./pages/products"
import Clients from "./pages/clients"

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/clients" element={<Clients />} />
    </Routes>
  )
}

export default App
