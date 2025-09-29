import React from "react";

type MyButtonProps = {
  label: string;
  onClick?: () => void;
  className?: string;
};

export default function MyButton({ label, onClick, className }: MyButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded text-white font-semibold hover:opacity-90 transition ${className}`}
    >
      {label}
    </button>
  );
}