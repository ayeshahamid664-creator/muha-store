import { Navigate, Outlet, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import AdminSidebar from "./AdminSidebar";
import { useAdminAuth } from "../context/AdminAuthContext";

export default function AdminLayout() {
  const { isAdmin } = useAdminAuth();
  const location = useLocation();

  if (!isAdmin) {
    return <Navigate to="/admin/login" state={{ from: location }} replace />;
  }

  return (
    <div className="min-h-screen flex bg-admin-bg text-cream">
      <AdminSidebar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="flex-1 ml-64 p-8 overflow-y-auto"
      >
        <Outlet />
      </motion.div>
    </div>
  );
}