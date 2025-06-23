import { Navigate } from "react-router-dom";
import { useAuthStore } from "../../stores/auth.store";
import { useEffect } from "react";

export default function ProtectedRoute({ children, allowedRole }) {
  const { authUser,checkAuth, loading } = useAuthStore();

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <span className="text-lg font-semibold">Authenticating...</span>
      </div>
    );
  }
  

  if (!authUser) {
    return ;
  }else if (authUser?.role !== allowedRole) {
    <Navigate to='/' />
  }

  return children;
}
