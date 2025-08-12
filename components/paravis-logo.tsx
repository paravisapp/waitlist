import Image from "next/image";

interface ParavisLogoProps {
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
}

export default function ParavisLogo({ 
  className = "", 
  width = 120, 
  height = 30,
  priority = false 
}: ParavisLogoProps) {
  return (
    <Image
      src="/Paravis Inverted Color Transparent bg.svg"
      alt="Paravis Logo - Banking Without Borders"
      width={width}
      height={height}
      className={className}
      priority={priority}
      style={{
        width: 'auto',
        height: 'auto',
        maxWidth: width,
        maxHeight: height,
      }}
    />
  );
}
