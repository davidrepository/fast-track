export interface OverviewData {
  title: string;
  mainScore: number;
  status: "Critical" | "Average" | "Strong";
  comparative: string;
  trend: number[];
}
