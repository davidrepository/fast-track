import React, { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

const OuterCard: React.FC<CardProps> = ({ children, className = "" }) => {
  return (
    <div
      className={`max-w-4xl mx-auto p-6 bg-white shadow rounded-xl flex flex-col gap-6 ${className}`}
    >
      {children}
    </div>
  );
};

export { OuterCard };
