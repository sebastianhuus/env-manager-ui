import { useMemo } from "react";
import "./Starfield.css";

interface StarfieldProps {
  starCount?: number;
  minOpacity?: number;
  maxOpacity?: number;
  minSize?: number;
  maxSize?: number;
}

export function Starfield({
  starCount = 100,
  minOpacity = 0.3,
  maxOpacity = 0.95,
  minSize = 1,
  maxSize = 2,
}: StarfieldProps) {
  const stars = useMemo(() => {
    return Array.from({ length: starCount }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * (maxSize - minSize) + minSize,
      opacity: Math.random() * (maxOpacity - minOpacity) + minOpacity,
    }));
  }, [starCount, minOpacity, maxOpacity, minSize, maxSize]);

  return (
    <div className="starfield">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
          }}
        />
      ))}
    </div>
  );
}
