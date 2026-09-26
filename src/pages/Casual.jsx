import { motion } from "framer-motion";
import { useProducts } from "../context/ProductContext";
import FeatureProduct from "../components/FeatureProduct";
import BubblePop from "../components/BubblePop";
import CollectionHero from "../components/CollectionHero";

export default function Casual() {
  const { products } = useProducts();
  const items = products.filter((p) => p.category === "casual");

  return (
    <div className="min-h-screen bg-casual text-cream pt-24 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-6 relative overflow-hidden">
      <div className="absolute inset-0 grain opacity-30 pointer-events-none" />

      <BubblePop count={18} />

      <div className="absolute top-0 left-1/4 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-amber-800/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-orange-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <CollectionHero
          scriptText="the collection no. 02"
          title="Casual"
          description="Soft fabrics. Earthy tones. Comfort that never compromises on style. Made for slow mornings and golden hours."
          number="02"
          image="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1200"
        />

        <div className="mt-16 sm:mt-24 mb-10 sm:mb-14 flex items-center gap-3 sm:gap-6">
          <span className="w-8 sm:w-12 h-[1px] bg-cream/40" />
          <p className="text-[9px] sm:text-[10px] uppercase tracking-[0.4em] text-cream/50 whitespace-nowrap">
            The Pieces
          </p>
          <span className="flex-1 h-[1px] bg-cream/15" />
          <p className="text-[9px] sm:text-[10px] uppercase tracking-[0.4em] text-cream/40 whitespace-nowrap">
            {items.length} Items
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
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