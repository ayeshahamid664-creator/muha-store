import { motion } from "framer-motion";
import { useProducts } from "../context/ProductContext";
import FeatureProduct from "../components/FeatureProduct";
import BubblePop from "../components/BubblePop";
import CollectionHero from "../components/CollectionHero";

export default function Bossy() {
  const { products } = useProducts();
  const items = products.filter((p) => p.category === "bossy");

  return (
    <div className="min-h-screen bg-bossy text-cream pt-32 pb-24 px-6 relative overflow-hidden">
      {/* Grain texture */}
      <div className="absolute inset-0 grain opacity-30 pointer-events-none" />

      {/* Bubbles */}
      <BubblePop count={16} />

      {/* Ambient glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-900/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <CollectionHero
          scriptText="the collection no. 01"
          title="Bossy"
          description="Sharp tailoring. Bold silhouettes. For the ones who don't ask — they command. Every stitch is a statement, every cut a decision."
          number="01"
          image="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200"
        />

        {/* Divider */}
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