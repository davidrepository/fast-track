export interface OverviewData {
  title: string;
  mainScore: number;
  status: "Critical" | "Average" | "Strong";
  comparative: string;
  trend: number[];
}

interface Insight {
  title: string;
  value: number;
  trend: number[];
}

export interface InsightsData {
  title: string;
  insights: Insight[];
}
