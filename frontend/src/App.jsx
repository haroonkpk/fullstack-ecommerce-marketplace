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

function App() {
  const { authUser, checkAuth, loader } = useAuthStore();
  const { getFeaturedFroducts, getAllProducts, loading } = useProductStore();

  useEffect(() => {
    checkAuth();
    getFeaturedFroducts();
    getAllProducts();
  }, []);

  const isAppLoading = loader || loading;

  if (isAppLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <span className="text-lg font-semibold">Loading...</span>
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
          <Route
            path="/admin"
            element={authUser ? <AdminPage /> : <Navigate to="/" />}
          />
          <Route path="/category/:category" element={<ProductListPage />} />
          <Route path="/product/:id" element={<DetailPage />} />
          <Route
            path="/profile"
            element={authUser ? <Profile /> : <Navigate to="/" />}
          />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </main>

      <Footer />
      <Toaster position="top-center" />
    </div>
  );
}

export default App;
