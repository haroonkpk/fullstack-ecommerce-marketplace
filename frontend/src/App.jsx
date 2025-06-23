import { Navigate, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { useAuthStore } from "./stores/auth.store";
import { useProductStore } from "./stores/product.store";

// Layout Components
import Header from "./components/navbar/header";
import HeaderForMobile from "./components/navbar/HeaderForMobile";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/Footer/Footer";
import DialogBox from "./components/login.signup/DialogBox";

// Pages
import HomePage from "./pages/HomePage";
import ProductListPage from "./pages/ProductListPage";
import DetailPage from "./pages/DetailPage";
import AdminPage from "./pages/AdminPage";
import Profile from "./pages/Profile";

// Misc
import { Toaster } from "react-hot-toast";
import CartPage from "./pages/CartPage";

function App() {
  const { authUser, checkAuth, loader } = useAuthStore();
  const { loading } = useProductStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  const isAppLoading = loader || loading;

  if (isAppLoading) {
    return (
      <div className="w-screen h-screen flex items-center justify-center bg-[#f8f9fc]">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Navbar />
      <HeaderForMobile />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route
            path="/admin"
            element={
              authUser?.role === "admin" ? <AdminPage /> : <Navigate to="/" />
            }
          />
          <Route path="/product/:id" element={<DetailPage />} />
          <Route path="/category/:category" element={<ProductListPage />} />

          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </main>

      <Footer />
      <Toaster position="top-center" />
    </div>
  );
}

export default App;
