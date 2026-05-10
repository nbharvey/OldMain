import { useState } from "react";
import type { MouseEvent } from "react";
import { colors } from "../utils/colors";

type MyButtonProps = {
  label: string;
  onClick?: () => void;
  className?: string;
};

export default function MyButton({ label, onClick, className = "" }: MyButtonProps) {
  const [ripples, setRipples] = useState<{ x: number; y: number; size: number }[]>([]);
  const [isHovered, setIsHovered] = useState(false);

  const createRipple = (event: MouseEvent<HTMLButtonElement>) => {
    const button = event.currentTarget;
    const rect = button.getBoundingClientRect();
    const size = Math.max(button.clientWidth, button.clientHeight);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    setRipples((prev) => [...prev, { x, y, size }]);

    setTimeout(() => {
      setRipples((prev) => prev.slice(1));
    }, 600);
  };

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    createRipple(event);
    onClick?.();
  };

  return (
    <button
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative overflow-hidden px-6 py-3 rounded-xl font-semibold transition-colors duration-300 focus:outline-none ${className}`}
      style={{
        backgroundColor: isHovered ? colors.burnished_copper : colors.antique_gold,
        color: colors.espresso_black,
        border: `1px solid ${colors.antique_gold}`,
      }}
    >
      {ripples.map((ripple, index) => (
        <span
          key={index}
          className="absolute rounded-full opacity-30 animate-ripple"
          style={{
            width: ripple.size,
            height: ripple.size,
            left: ripple.x,
            top: ripple.y,
            backgroundColor: colors.vintage_linen,
          }}
        />
      ))}

      <span className="relative">{label}</span>
    </button>
  );
}