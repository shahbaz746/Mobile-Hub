
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Layout from "./components/layout/Layout"
import ProductDetails from "./pages/ProductDetails"
import Cart from "./pages/Cart"
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
           <Route path="cart" element={<Cart />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
