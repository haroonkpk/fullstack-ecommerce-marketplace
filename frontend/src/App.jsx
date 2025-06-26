import { Navigate, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { useAuthStore } from "./stores/auth.store";
import { useProductStore } from "./stores/product.store";
import { useLocation } from "react-router-dom";

// Layout Components
import Header from "./components/navbar/header";
import HeaderForMobile from "./components/navbar/HeaderForMobile";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/Footer/Footer";

// Pages
import HomePage from "./pages/HomePage";
import ProductListPage from "./pages/ProductListPage";
import DetailPage from "./pages/DetailPage";
import AdminPage from "./pages/AdminPage";

// Misc
import { Toaster } from "react-hot-toast";
import CartPage from "./pages/CartPage";
import FingerprintScan from "./components/CartCompo.jsx/FingerprintScan";
import PaymentSuccess from "./components/CartCompo.jsx/PaymentSuccess";

function App() {
  const location = useLocation();
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
      {location.pathname !== "/success" &&
      location.pathname !== "/fingerprint" ? (
        <Header />
      ) : (
        ""
      )}
      {location.pathname !== "/cart" &&
      location.pathname !== "/fingerprint" &&
      location.pathname !== "/success" ? (
        <Navbar />
      ) : (
        ""
      )}

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/cart"
            element={authUser ? <CartPage /> : <Navigate to={"/"} />}
          />
          <Route
            path="/admin"
            element={
              authUser?.role === "admin" ? <AdminPage /> : <Navigate to="/" />
            }
          />
          <Route path="/product/:id?" element={<DetailPage />} />
          <Route path="/category/:category?" element={<ProductListPage />} />
          <Route path="/search/:keyword?" element={<ProductListPage />} />
          <Route path="/fingerprint" element={<FingerprintScan />} />
          <Route path="/success" element={<PaymentSuccess />} />

        </Routes>
      </main>

      {/* Footer */}
      {location.pathname !== "/success" &&
      location.pathname !== "/fingerprint" ? (
        <Footer />
      ) : (
        ""
      )}
      <Toaster position="top-center" />
    </div>
  );
}

export default App;
