import React, { ReactNode } from "react";

interface H1Props {
  children: ReactNode;
  className?: string;
}

const H1: React.FC<H1Props> = ({ children, className = "" }) => {
  return <h1 className={`text-3xl font-bold ${className}`}>{children}</h1>;
};

// Can be extended with H2, H3...

export { H1 };
