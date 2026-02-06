import openGradientLogo from "@/assets/opengradient-logo.png";

interface OpenGradientLogoProps {
  size?: number;
  showText?: boolean;
  className?: string;
}

export function OpenGradientLogo({ size = 36, showText = true, className = "" }: OpenGradientLogoProps) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <img 
        src={openGradientLogo} 
        alt="OpenGradient" 
        width={size} 
        height={size}
        className="object-contain"
      />
      {showText && (
        <span className="text-lg font-semibold tracking-tight text-foreground">
          <span className="text-primary">Open</span>Gradient
        </span>
      )}
    </div>
  );
}
