import { createContext, useContext, useEffect, useState } from "react";
import { products as initialProducts } from "../data/products";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(() => {
    const saved = localStorage.getItem("muha_products");
    if (!saved) return initialProducts;

    try {
      const parsed = JSON.parse(saved);
      // ✅ Purane products mein inStock missing ho to true set karein
      return parsed.map((p) => ({
        ...p,
        inStock: p.inStock !== undefined ? p.inStock : true,
      }));
    } catch {
      return initialProducts;
    }
  });

  useEffect(() => {
    localStorage.setItem("muha_products", JSON.stringify(products));
  }, [products]);

  const addProduct = (product) => {
    const newProduct = {
      ...product,
      id: Date.now(),
      inStock: true,
    };
    setProducts([newProduct, ...products]);
    return newProduct;
  };

  const removeProduct = (id) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  const toggleStock = (id) => {
    setProducts(
      products.map((p) =>
        p.id === id ? { ...p, inStock: !p.inStock } : p
      )
    );
  };

  const updateProduct = (id, updates) => {
    setProducts(
      products.map((p) => (p.id === id ? { ...p, ...updates } : p))
    );
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        addProduct,
        removeProduct,
        toggleStock,
        updateProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => useContext(ProductContext);