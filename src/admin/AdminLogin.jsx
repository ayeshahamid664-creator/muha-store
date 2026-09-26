import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useAdminAuth } from "../context/AdminAuthContext";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAdminAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const ok = login(email, password);
    if (ok) navigate("/admin");
    else setError("Invalid credentials. Try admin@muha.co / admin123");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-admin-bg px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md bg-admin-card border border-admin-border rounded-2xl p-10"
      >
        <div className="text-center mb-8">
          <img
            src="/logo.png"
            alt="The Muha Co"
            className="w-16 h-16 rounded-full mx-auto"
          />
          <h1 className="font-serif text-3xl text-cream mt-4">Admin Panel</h1>
          <p className="font-script text-xl text-cream/60 mt-1">the Muha Co</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="text-xs uppercase tracking-widest text-cream/50">
              Email
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-2 bg-admin-bg border border-admin-border rounded-lg px-4 py-3 text-cream focus:outline-none focus:border-cream/50 transition"
              placeholder="admin@muha.co"
            />
          </div>
          <div>
            <label className="text-xs uppercase tracking-widest text-cream/50">
              Password
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mt-2 bg-admin-bg border border-admin-border rounded-lg px-4 py-3 text-cream focus:outline-none focus:border-cream/50 transition"
              placeholder="••••••••"
            />
          </div>

          {error && (
            <p className="text-red-400 text-sm text-center">{error}</p>
          )}

          <button
            type="submit"
            className="w-full bg-cream text-maroon py-3 rounded-lg uppercase tracking-widest text-xs font-medium hover:bg-cream-dark transition"
          >
            Login
          </button>
        </form>

        <p className="text-center text-xs text-cream/40 mt-6">
          Demo: admin@muha.co / admin123
        </p>
      </motion.div>
    </div>
  );
}