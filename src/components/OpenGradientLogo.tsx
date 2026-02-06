import { motion } from "framer-motion";

interface OpenGradientLogoProps {
  size?: number;
  showText?: boolean;
  className?: string;
}

export function OpenGradientLogo({ size = 48, showText = true, className = "" }: OpenGradientLogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative"
      >
        <svg
          width={size}
          height={size}
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="animate-float"
        >
          {/* Outer glow */}
          <defs>
            <radialGradient id="logoGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="hsl(164 100% 42%)" stopOpacity="0.4" />
              <stop offset="100%" stopColor="hsl(164 100% 42%)" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(164 100% 52%)" />
              <stop offset="100%" stopColor="hsl(164 100% 35%)" />
            </linearGradient>
          </defs>
          
          {/* Glow background */}
          <circle cx="24" cy="24" r="22" fill="url(#logoGlow)" />
          
          {/* Main hexagonal shape */}
          <path
            d="M24 4L42 14V34L24 44L6 34V14L24 4Z"
            stroke="url(#logoGradient)"
            strokeWidth="2"
            fill="none"
            opacity="0.8"
          />
          
          {/* Inner structure - network nodes */}
          <circle cx="24" cy="14" r="3" fill="hsl(164 100% 42%)" />
          <circle cx="14" cy="24" r="3" fill="hsl(164 100% 42%)" />
          <circle cx="34" cy="24" r="3" fill="hsl(164 100% 42%)" />
          <circle cx="24" cy="34" r="3" fill="hsl(164 100% 42%)" />
          <circle cx="24" cy="24" r="4" fill="hsl(164 100% 50%)" />
          
          {/* Connecting lines */}
          <line x1="24" y1="14" x2="24" y2="24" stroke="hsl(164 100% 42%)" strokeWidth="1.5" opacity="0.6" />
          <line x1="14" y1="24" x2="24" y2="24" stroke="hsl(164 100% 42%)" strokeWidth="1.5" opacity="0.6" />
          <line x1="34" y1="24" x2="24" y2="24" stroke="hsl(164 100% 42%)" strokeWidth="1.5" opacity="0.6" />
          <line x1="24" y1="34" x2="24" y2="24" stroke="hsl(164 100% 42%)" strokeWidth="1.5" opacity="0.6" />
        </svg>
        
        {/* Pulsing ring */}
        <motion.div
          className="absolute inset-0 rounded-full border border-primary/30"
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
      
      {showText && (
        <motion.span
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl font-semibold tracking-tight text-foreground"
        >
          <span className="text-primary">Open</span>Gradient
        </motion.span>
      )}
    </div>
  );
}
