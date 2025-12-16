import React, { useEffect, useState } from "react";
import { fetchInsights } from "../services/api";
import {
  InsightBlock,
  ErrorMessage,
  Loader,
  Button,
  H1,
  OuterCard,
} from "../components";
import { Insight, InsightsData } from "../types";

const InsightsScreen: React.FC = () => {
  const [data, setData] = useState<InsightsData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchInsights()
      .then((res) => setData(res))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Loader />;
  if (!data) return <ErrorMessage message="Failed to load Insights" />;

  return (
    <OuterCard>
      <H1>{data.title}</H1>

      <div className="grid md:grid-cols-3 gap-6">
        {data.insights.map((insight: Insight) => (
          <InsightBlock key={insight.title} insight={insight} />
        ))}
      </div>

      <div className="flex justify-between">
        <Button variant="secondary">Previous</Button>
        <Button variant="primary">Next</Button>
      </div>
    </OuterCard>
  );
};

export { InsightsScreen };
