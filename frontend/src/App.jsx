import { Route, Routes } from "react-router-dom"
import Header from "./components/navbar/header"
import HeaderForMobile from "./components/navbar/HeaderForMobile"
import HomePage from "./pages/HomePage"
import Navbar from "./components/navbar/Navbar"
import Footer from "./components/Footer/Footer"
import ProductListPage from "./pages/ProductListPage"
import DetailPage from "./pages/DetailPage"
import AdminPage from "./pages/AdminPage"
import DialogBox from "./components/login.signup/DialogBox"
import { useAuthStore } from "./stores/auth.store"
import { useEffect } from "react"
import Profile from "./pages/Profile"
import { Toaster } from "react-hot-toast"

function App() {
  const {authUser, checkAuth}=useAuthStore();

  useEffect(()=>{
    checkAuth()
  },[])
  return (
    <div>
     <DialogBox />
      <Profile />
      <Header />
      <Navbar />
      <HeaderForMobile />
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/admin" element={<AdminPage />} />
        <Route path="/category/:id" element={<ProductListPage />} />
        <Route path="/product/:id" element={<DetailPage />} />
      </Routes>
      <Footer />
      <Toaster position="top-center"  />
    </div>
  );
}

export default App
