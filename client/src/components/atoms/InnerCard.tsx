import React, { ReactNode } from "react";

interface InnerCardProps {
  children: ReactNode;
  className?: string;
}

const InnerCard: React.FC<InnerCardProps> = ({ children, className = "" }) => {
  return (
    <div className={`flex gap-2 p-6 bg-gray-100 rounded ${className}`}>
      {children}
    </div>
  );
};

export { InnerCard };
