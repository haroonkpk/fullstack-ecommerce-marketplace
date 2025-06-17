import { Route, Routes } from "react-router-dom"
import Header from "./components/navbar/header"
import HeaderForMobile from "./components/navbar/HeaderForMobile"
import HomePage from "./pages/HomePage"
import Navbar from "./components/navbar/Navbar"
import Footer from "./components/Footer/Footer"
import ProductListPage from "./pages/ProductListPage"
import DetailPage from "./pages/DetailPage"

function App() {

  return (
    <div>
      <Header />
      <Navbar />
      <HeaderForMobile/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/category/:id" element={<ProductListPage />} />
        <Route path="/product/:id" element={<DetailPage />} />

      </Routes>
      <Footer/>
    </div>
  );
}

export default App
