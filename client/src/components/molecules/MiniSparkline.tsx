import React, { useEffect, useState } from "react";

interface Props {
  data: number[];
  width?: number;
  height?: number;
  color?: string;
}

const MiniSparkline: React.FC<Props> = ({ data, width = 120 }) => {
  const max = Math.max(...data);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => setAnimate(true));
  }, []);

  return (
    <div className="flex flex-col gap-1 w-32">
      {data.map((value, i) => (
        <div key={i} className="bg-gray-300 rounded overflow-hidden h-2">
          <div
            className="h-full rounded transition-all duration-700 ease-out bg-blue-500"
            style={{
              width: animate ? `${(value / max) * 100}%` : "0%",
              transitionDelay: animate ? `${i * 100}ms` : "0ms",
            }}
          />
        </div>
      ))}
    </div>
  );
};

export { MiniSparkline };
