import React from "react";
import { MiniSparkline, InnerCard } from "..";
import { Insight } from "../../types";

interface Props {
  insight: Insight;
}

const InsightBlock: React.FC<Props> = ({ insight }) => (
  <InnerCard className="justify-between">
    <div>
      <h3 className="font-semibold">{insight.title}</h3>
      <p className="text-gray-600">{insight.value}%</p>
    </div>
    <MiniSparkline data={insight.trend} />
  </InnerCard>
);

export { InsightBlock };
