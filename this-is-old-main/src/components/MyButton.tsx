import { useState } from "react";
import type { MouseEvent } from "react";

type MyButtonProps = {
  label: string;
  onClick?: () => void;
  className?: string;
};

export default function MyButton({ label, onClick, className }: MyButtonProps) {
  const [ripples, setRipples] = useState<{ x: number; y: number; size: number }[]>([]);

  const createRipple = (event: MouseEvent<HTMLButtonElement>) => {
    const button = event.currentTarget;
    const rect = button.getBoundingClientRect();
    const size = Math.max(button.clientWidth, button.clientHeight);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    const newRipple = { x, y, size };
    setRipples((prev) => [...prev, newRipple]);

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
      className={`
        relative overflow-hidden px-6 py-3 rounded-lg font-semibold 
        text-brandSilver bg-brandBlack border-2 border-brandBlack
        hover:text-brandBlack hover:bg-brandSilver hover:border-brandBlack
        transition-colors duration-300 focus:outline-none
        ${className}
      `}
    >
      {ripples.map((ripple, index) => (
        <span
          key={index}
          className="absolute rounded-full bg-white opacity-30 animate-ripple"
          style={{
            width: ripple.size,
            height: ripple.size,
            left: ripple.x,
            top: ripple.y,
          }}
        ></span>
      ))}
      <span className="relative">{label}</span>

      {ripples.map((ripple, index) => (
  <span
    key={index}
    className="absolute rounded-full bg-white opacity-30 animate-ripple"
    style={{
      width: ripple.size,
      height: ripple.size,
      left: ripple.x,
      top: ripple.y,
    }}
  ></span>
))}
    </button>
  );
}