
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Layout from "./components/layout/Layout"
import ProductDetails from "./pages/ProductDetails"
import Cart from "./pages/Cart"
import CategoryPage from "./pages/Category"
import { useState } from "react"
function App() {

  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
        {/* <Layout
      searchQuery={searchQuery}
      setSearchQuery={setSearchQuery}
    /> */}
      <Routes>
        <Route path="/" element={<Layout searchQuery={searchQuery} setSearchQuery={setSearchQuery} />}>
          <Route index element={<Home searchQuery={searchQuery} />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="cart" element={<Cart />} />
          <Route path="/category/:categoryName" element={<CategoryPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
