import React, { useEffect, useState } from "react";
import { OverviewData } from "../types";
import { fetchOverview } from "../services/api";
import {
  ScoreCard,
  StatusLabel,
  Loader,
  ErrorMessage,
  H1,
  OuterCard,
} from "../components";

const OverviewScreen: React.FC = () => {
  const [data, setData] = useState<OverviewData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchOverview()
      .then((res) => setData(res))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Loader />;
  if (!data) return <ErrorMessage message="Failed to load Overview" />;

  return (
    <OuterCard>
      <H1>{data.title}</H1>
      <div className="flex flex-col md:flex-row items-center gap-6">
        <ScoreCard score={data.mainScore} />
        <div className="flex flex-col gap-2">
          <StatusLabel status={data.status} />
          <p className="text-gray-500 whitespace-nowrap">{data.comparative}</p>
        </div>
      </div>
    </OuterCard>
  );
};

export { OverviewScreen };
