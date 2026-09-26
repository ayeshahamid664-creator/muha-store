import { motion } from "framer-motion";
import { Package, TrendingUp } from "lucide-react";
import { useProducts } from "../context/ProductContext";

export default function AdminDashboard() {
  const { products } = useProducts();

  const stats = [
    {
      label: "Total Products",
      value: products.length,
      icon: Package,
      color: "text-blue-400",
    },
    {
      label: "In Stock",
      value: products.filter((p) => p.inStock !== false).length,
      icon: TrendingUp,
      color: "text-green-400",
    },
    {
      label: "Out of Stock",
      value: products.filter((p) => p.inStock === false).length,
      icon: TrendingUp,
      color: "text-red-400",
    },
  ];

  return (
    <div>
      <div className="mb-10">
        <h1 className="font-serif text-4xl text-cream">Dashboard</h1>
        <p className="text-cream/50 text-sm mt-1">
          Welcome back to The Muha Co admin panel.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="bg-admin-card border border-admin-border rounded-xl p-6 hover:border-cream/20 transition"
          >
            <div className="flex items-center justify-between">
              <s.icon className={s.color} size={22} />
            </div>
            <p className="text-3xl font-serif mt-4 text-cream">{s.value}</p>
            <p className="text-xs uppercase tracking-widest text-cream/50 mt-1">
              {s.label}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Recent products preview */}
      <div className="bg-admin-card border border-admin-border rounded-xl p-6">
        <h2 className="font-serif text-2xl mb-5">Recent Products</h2>
        <div className="space-y-3">
          {products.slice(0, 5).map((p) => (
            <div
              key={p.id}
              className="flex items-center gap-4 p-3 rounded-lg hover:bg-admin-hover transition"
            >
              <img
                src={p.image}
                alt={p.name}
                className="w-12 h-12 rounded-lg object-cover"
              />
              <div className="flex-1">
                <p className="text-cream text-sm">{p.name}</p>
                <p className="text-xs text-cream/40 capitalize">
                  {p.category}
                </p>
              </div>
              <p className="text-cream/80 text-sm">${p.price}</p>
              <span
                className={`text-[10px] uppercase tracking-widest px-2 py-1 rounded-full ${
                  p.inStock !== false
                    ? "bg-green-500/10 text-green-400"
                    : "bg-red-500/10 text-red-400"
                }`}
              >
                {p.inStock !== false ? "In Stock" : "Out"}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}