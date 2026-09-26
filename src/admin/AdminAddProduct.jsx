import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../context/ProductContext";

export default function AdminAddProduct() {
  const { addProduct } = useProducts();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    price: "",
    category: "bossy",
    tag: "",
    image: "",
    description: "",
  });

  const [preview, setPreview] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.price || !form.image) return;
    addProduct({ ...form, price: Number(form.price) });
    navigate("/admin/products");
  };

  const categories = [
    { key: "bossy", label: "Bossy" },
    { key: "casual", label: "Casual" },
    { key: "cool", label: "Cool" },
  ];

  return (
    <div>
      <div className="mb-8 sm:mb-10">
        <h1 className="font-serif text-3xl sm:text-4xl text-cream">
          Add Product
        </h1>
        <p className="text-cream/50 text-sm mt-1">
          Fill the details to add a new product.
        </p>
      </div>

      <motion.form
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        onSubmit={handleSubmit}
        className="grid lg:grid-cols-3 gap-6 sm:gap-8"
      >
        {/* Left: Form */}
        <div className="lg:col-span-2 bg-admin-card border border-admin-border rounded-xl p-5 sm:p-8 space-y-5 sm:space-y-6">
          <div>
            <label className="text-xs uppercase tracking-widest text-cream/50">
              Product Name
            </label>
            <input
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full mt-2 bg-admin-bg border border-admin-border rounded-lg px-4 py-3 text-cream focus:outline-none focus:border-cream/50 transition text-sm"
              placeholder="e.g. Midnight Blazer"
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
            <div>
              <label className="text-xs uppercase tracking-widest text-cream/50">
                Price ($)
              </label>
              <input
                required
                type="number"
                value={form.price}
                onChange={(e) => setForm({ ...form, price: e.target.value })}
                className="w-full mt-2 bg-admin-bg border border-admin-border rounded-lg px-4 py-3 text-cream focus:outline-none focus:border-cream/50 transition text-sm"
                placeholder="189"
              />
            </div>
            <div>
              <label className="text-xs uppercase tracking-widest text-cream/50">
                Tag (optional)
              </label>
              <input
                value={form.tag}
                onChange={(e) => setForm({ ...form, tag: e.target.value })}
                className="w-full mt-2 bg-admin-bg border border-admin-border rounded-lg px-4 py-3 text-cream focus:outline-none focus:border-cream/50 transition text-sm"
                placeholder="New / Limited"
              />
            </div>
          </div>

          <div>
            <label className="text-xs uppercase tracking-widest text-cream/50 mb-3 block">
              Category / Section
            </label>
            <div className="grid grid-cols-3 gap-2 sm:gap-3">
              {categories.map((c) => (
                <button
                  type="button"
                  key={c.key}
                  onClick={() => setForm({ ...form, category: c.key })}
                  className={`py-3 sm:py-4 rounded-lg text-xs sm:text-sm uppercase tracking-widest border transition ${
                    form.category === c.key
                      ? "border-cream text-cream"
                      : "border-admin-border text-cream/50 hover:border-cream/30"
                  }`}
                >
                  {c.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="text-xs uppercase tracking-widest text-cream/50">
              Image URL
            </label>
            <input
              required
              value={form.image}
              onChange={(e) => {
                setForm({ ...form, image: e.target.value });
                setPreview(e.target.value);
              }}
              className="w-full mt-2 bg-admin-bg border border-admin-border rounded-lg px-4 py-3 text-cream focus:outline-none focus:border-cream/50 transition text-sm"
              placeholder="https://..."
            />
          </div>

          <div>
            <label className="text-xs uppercase tracking-widest text-cream/50">
              Description (optional)
            </label>
            <textarea
              rows="3"
              value={form.description}
              onChange={(e) =>
                setForm({ ...form, description: e.target.value })
              }
              className="w-full mt-2 bg-admin-bg border border-admin-border rounded-lg px-4 py-3 text-cream focus:outline-none focus:border-cream/50 transition resize-none text-sm"
              placeholder="Short description..."
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <button
              type="submit"
              className="flex-1 bg-cream text-maroon py-3 rounded-lg uppercase tracking-widest text-xs font-medium hover:bg-cream-dark transition"
            >
              Add Product
            </button>
            <button
              type="button"
              onClick={() => navigate("/admin/products")}
              className="px-6 py-3 border border-admin-border text-cream/70 rounded-lg uppercase tracking-widest text-xs hover:border-cream/40 transition"
            >
              Cancel
            </button>
          </div>
        </div>

        {/* Right: Preview */}
        <div className="bg-admin-card border border-admin-border rounded-xl p-5 sm:p-6 h-fit lg:sticky lg:top-8">
          <p className="text-xs uppercase tracking-widest text-cream/50 mb-4">
            Preview
          </p>
          {preview ? (
            <img
              src={preview}
              alt="preview"
              className="w-full h-56 sm:h-72 object-cover rounded-lg"
              onError={(e) => (e.target.style.display = "none")}
            />
          ) : (
            <div className="w-full h-56 sm:h-72 bg-admin-bg rounded-lg flex items-center justify-center text-cream/30 text-sm">
              Image preview
            </div>
          )}
          <h3 className="font-serif text-lg sm:text-xl mt-4 text-cream">
            {form.name || "Product Name"}
          </h3>
          <p className="text-xs uppercase tracking-widest text-cream/40 mt-1 capitalize">
            {form.category}
          </p>
          <p className="text-cream font-medium mt-2">
            ${form.price || "0"}
          </p>
        </div>
      </motion.form>
    </div>
  );
}