import { motion } from "framer-motion";
import { featureHighlights } from "@/data/knowledgeBase";

export function FeatureHighlights() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="flex items-center justify-center gap-6 md:gap-10"
    >
      {featureHighlights.map((feature, index) => (
        <motion.div
          key={feature.label}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
          className="text-center"
        >
          <span className="block text-lg font-semibold text-primary text-glow">
            {feature.label}
          </span>
          <span className="block text-sm text-muted-foreground">
            {feature.description}
          </span>
        </motion.div>
      ))}
    </motion.div>
  );
}
