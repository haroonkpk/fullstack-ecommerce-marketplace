import { Navigate } from "react-router-dom";
import { useAuthStore } from "../../stores/auth.store";
import { useEffect } from "react";

export default function ProtectedRoute({ children, allowedRole }) {
  const { authUser,checkAuth, loading } = useAuthStore();
  console.log("Loading:", loading);
  console.log("Auth User:", authUser);
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <span className="text-lg font-semibold">Authenticating...</span>
      </div>
    );
  }
  

  if (!authUser || authUser?.role !== allowedRole) {
    return <Navigate to="/" />;
  }

  return children;
}
