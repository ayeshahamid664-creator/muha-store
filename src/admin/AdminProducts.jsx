import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Plus, Trash2, PackageX, PackageCheck } from "lucide-react";
import { useProducts } from "../context/ProductContext";

export default function AdminProducts() {
  const { products, removeProduct, toggleStock } = useProducts();
  const [filter, setFilter] = useState("all");
  const navigate = useNavigate();

  const filtered =
    filter === "all" ? products : products.filter((p) => p.category === filter);

  const filters = ["all", "bossy", "casual", "cool"];

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-8 sm:mb-10 flex-wrap gap-4">
        <div>
          <h1 className="font-serif text-3xl sm:text-4xl text-cream">
            Products
          </h1>
          <p className="text-cream/50 text-sm mt-1">
            Manage all your products here.
          </p>
        </div>
        <button
          onClick={() => navigate("/admin/products/add")}
          className="flex items-center gap-2 bg-cream text-maroon px-4 sm:px-5 py-2.5 sm:py-3 rounded-lg text-[10px] sm:text-xs uppercase tracking-widest hover:bg-cream-dark transition"
        >
          <Plus size={16} /> Add Product
        </button>
      </div>

      {/* Filters */}
      <div className="flex gap-2 mb-6 flex-wrap">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-3 sm:px-4 py-2 rounded-lg text-[10px] sm:text-xs uppercase tracking-widest border transition ${
              filter === f
                ? "bg-cream text-maroon border-cream"
                : "border-admin-border text-cream/60 hover:border-cream/40"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Table — scroll on mobile */}
      <div className="bg-admin-card border border-admin-border rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px]">
            <thead className="bg-admin-hover text-xs uppercase tracking-widest text-cream/60">
              <tr>
                <th className="text-left px-4 sm:px-5 py-4">Product</th>
                <th className="text-left px-4 sm:px-5 py-4">Category</th>
                <th className="text-left px-4 sm:px-5 py-4">Price</th>
                <th className="text-left px-4 sm:px-5 py-4">Status</th>
                <th className="text-right px-4 sm:px-5 py-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((p, i) => (
                <motion.tr
                  key={p.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="border-t border-admin-border hover:bg-admin-hover transition"
                >
                  <td className="px-4 sm:px-5 py-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={p.image}
                        alt={p.name}
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg object-cover"
                      />
                      <span className="text-sm text-cream whitespace-nowrap">
                        {p.name}
                      </span>
                    </div>
                  </td>
                  <td className="px-4 sm:px-5 py-4">
                    <span className="text-xs uppercase tracking-widest text-cream/70 capitalize">
                      {p.category}
                    </span>
                  </td>
                  <td className="px-4 sm:px-5 py-4 text-sm text-cream">
                    ${p.price}
                  </td>
                  <td className="px-4 sm:px-5 py-4">
                    <span
                      className={`text-[10px] uppercase tracking-widest px-3 py-1 rounded-full whitespace-nowrap ${
                        p.inStock
                          ? "bg-green-500/10 text-green-400"
                          : "bg-red-500/10 text-red-400"
                      }`}
                    >
                      {p.inStock ? "In Stock" : "Out"}
                    </span>
                  </td>
                  <td className="px-4 sm:px-5 py-4">
                    <div className="flex justify-end gap-2">
                      <button
                        onClick={() => toggleStock(p.id)}
                        title={
                          p.inStock ? "Mark Out of Stock" : "Mark In Stock"
                        }
                        className="p-2 rounded-lg text-cream/60 hover:bg-admin-border hover:text-cream transition"
                      >
                        {p.inStock ? (
                          <PackageX size={16} />
                        ) : (
                          <PackageCheck size={16} />
                        )}
                      </button>
                      <button
                        onClick={() => {
                          if (window.confirm("Remove this product?"))
                            removeProduct(p.id);
                        }}
                        title="Remove"
                        className="p-2 rounded-lg text-red-400/70 hover:bg-red-500/10 hover:text-red-400 transition"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </motion.tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan="5" className="text-center py-10 text-cream/40">
                    No products found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}