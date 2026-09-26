import { motion } from "framer-motion";
import { useProducts } from "../context/ProductContext";
import FeatureProduct from "../components/FeatureProduct";
import BubblePop from "../components/BubblePop";
import CollectionHero from "../components/CollectionHero";

export default function Casual() {
  const { products } = useProducts();
  const items = products.filter((p) => p.category === "casual");

  return (
    <div className="min-h-screen bg-casual text-cream pt-32 pb-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 grain opacity-30 pointer-events-none" />

      <BubblePop count={18} />

      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-amber-800/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-orange-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <CollectionHero
          scriptText="the collection no. 02"
          title="Casual"
          description="Soft fabrics. Earthy tones. Comfort that never compromises on style. Made for slow mornings and golden hours."
          number="02"
          image="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1200"
        />

        <div className="mt-24 mb-14 flex items-center gap-6">
          <span className="w-12 h-[1px] bg-cream/40" />
          <p className="text-[10px] uppercase tracking-[0.4em] text-cream/50">
            The Pieces
          </p>
          <span className="flex-1 h-[1px] bg-cream/15" />
          <p className="text-[10px] uppercase tracking-[0.4em] text-cream/40">
            {items.length} Items
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((p, i) => (
            <FeatureProduct key={p.id} product={p} index={i} />
          ))}
        </div>

        {items.length === 0 && (
          <p className="text-center text-cream/50 mt-20">
            No products available in this collection yet.
          </p>
        )}
      </div>
    </div>
  );
}