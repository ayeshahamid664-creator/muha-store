import { motion } from "framer-motion";

export default function FeatureProduct({ product, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
    >
      <div className="overflow-hidden rounded-2xl bg-cream/5 relative border border-cream/10 group-hover:border-cream/30 transition-all duration-500">
        {/* Image */}
        <div className="relative overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-56 sm:h-72 md:h-80 object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
          />

          {/* Gradient overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Quick view on hover */}
          <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
            <span className="glass-strong px-3 sm:px-5 py-1.5 sm:py-2 rounded-full text-[9px] sm:text-[10px] uppercase tracking-widest text-cream whitespace-nowrap">
              View Piece
            </span>
          </div>

          {/* Out of stock */}
          {product.inStock === false && (
            <div className="absolute top-2 sm:top-3 left-2 sm:left-3 bg-red-500/90 backdrop-blur text-white text-[9px] sm:text-[10px] uppercase tracking-widest px-2 sm:px-3 py-1 rounded-full">
              Out of Stock
            </div>
          )}

          {/* Tag */}
          {product.inStock !== false && product.tag && (
            <div className="absolute top-2 sm:top-3 left-2 sm:left-3 glass-strong text-cream text-[9px] sm:text-[10px] uppercase tracking-widest px-2 sm:px-3 py-1 rounded-full">
              {product.tag}
            </div>
          )}
        </div>
      </div>

      <div className="mt-3 sm:mt-5 flex justify-between items-start gap-2">
        <div className="min-w-0 flex-1">
          <h4 className="font-serif text-base sm:text-xl text-cream group-hover:text-cream/80 transition truncate">
            {product.name}
          </h4>
          <p className="text-[9px] sm:text-[10px] text-cream/50 uppercase tracking-[0.25em] mt-1 capitalize truncate">
            {product.category}
          </p>
        </div>
        <span className="text-cream font-medium font-serif text-sm sm:text-lg whitespace-nowrap">
          ${product.price}
        </span>
      </div>
    </motion.div>
  );
}