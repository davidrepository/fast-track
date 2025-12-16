import React, { useEffect, useState } from "react";
import { InnerCard } from "../";

interface Props {
  score: number;
  duration?: number;
}

const ScoreCard: React.FC<Props> = ({ score, duration = 1000 }) => {
  const [animatedScore, setAnimatedScore] = useState(0);

  useEffect(() => {
    let start: number | null = null;

    const animate = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const newScore = Math.min((progress / duration) * score, score);
      setAnimatedScore(newScore);

      if (progress < duration) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [score, duration]);

  const barColor =
    score >= 75 ? "bg-green-500" : score >= 50 ? "bg-yellow-500" : "bg-red-500";

  return (
    <InnerCard className="w-48 flex-col items-center">
      <span className="text-xl font-semibold">Score</span>
      <div className="w-full bg-gray-300 rounded-full h-3 overflow-hidden">
        <div
          className={`h-3 ${barColor} rounded-full`}
          style={{ width: `${animatedScore}%` }}
        />
      </div>

      <span className="text-2xl font-bold">{Math.round(animatedScore)}%</span>
    </InnerCard>
  );
};

export { ScoreCard };
