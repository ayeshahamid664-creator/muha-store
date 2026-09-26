import { NavLink, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  Package,
  PlusCircle,
  Settings,
  LogOut,
  Home,
} from "lucide-react";
import { useAdminAuth } from "../context/AdminAuthContext";

export default function AdminSidebar() {
  const { logout } = useAdminAuth();
  const navigate = useNavigate();

  const links = [
    { to: "/admin", label: "Dashboard", icon: LayoutDashboard, end: true },
    { to: "/admin/products", label: "Products", icon: Package },
    { to: "/admin/products/add", label: "Add Product", icon: PlusCircle },
    { to: "/admin/settings", label: "Settings", icon: Settings },
  ];

  return (
    <aside className="fixed top-0 left-0 w-64 h-screen bg-admin-card border-r border-admin-border flex flex-col">
      {/* Logo */}
      <div className="flex items-center gap-3 px-6 py-5 border-b border-admin-border">
        <img src="/logo.png" alt="logo" className="w-10 h-10 rounded-full" />
        <div>
          <p className="font-script text-lg text-cream leading-none">
            the Muha Co
          </p>
          <p className="text-[10px] uppercase tracking-widest text-cream/40 mt-1">
            Admin
          </p>
        </div>
      </div>

      {/* Nav Links */}
      <nav className="flex-1 px-3 py-6 space-y-1">
        {links.map(({ to, label, icon: Icon, end }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-lg text-sm transition-all ${
                isActive
                  ? "bg-cream/10 text-cream border-l-2 border-cream"
                  : "text-cream/60 hover:bg-admin-hover hover:text-cream"
              }`
            }
          >
            <Icon size={18} />
            {label}
          </NavLink>
        ))}
      </nav>

      {/* Bottom Actions */}
      <div className="p-3 border-t border-admin-border space-y-1">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-3 w-full px-4 py-3 rounded-lg text-sm text-cream/60 hover:bg-admin-hover hover:text-cream transition"
        >
          <Home size={18} /> Back to Site
        </button>
        <button
          onClick={() => {
            logout();
            navigate("/admin/login");
          }}
          className="flex items-center gap-3 w-full px-4 py-3 rounded-lg text-sm text-red-400/80 hover:bg-red-500/10 hover:text-red-400 transition"
        >
          <LogOut size={18} /> Logout
        </button>
      </div>
    </aside>
  );
}