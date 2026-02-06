import { featureHighlights } from "@/data/knowledgeBase";

export function FeatureHighlights() {
  return (
    <div className="flex items-center justify-center gap-6 md:gap-10">
      {featureHighlights.map((feature) => (
        <div key={feature.label} className="text-center">
          <span className="block text-lg font-semibold text-primary text-glow">
            {feature.label}
          </span>
          <span className="block text-sm text-muted-foreground">
            {feature.description}
          </span>
        </div>
      ))}
    </div>
  );
}
