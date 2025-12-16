import express, { Request, Response } from "express";
import cors from "cors";
import { insightsData, overviewData } from "./data";
import { InsightsData, OverviewData } from "./types";

const app = express();
app.use(cors());
app.use(express.json());

const PORT: number = 4000;
const ROUTES = {
  OVERVIEW: "/overview",
  INSIGHTS: "/insights",
} as const;

app.get(ROUTES.OVERVIEW, (_req: Request, res: Response<OverviewData>) => {
  res.json(overviewData);
});

app.get(ROUTES.INSIGHTS, (_req: Request, res: Response<InsightsData>) => {
  res.json(insightsData);
});

app.listen(PORT, () => {
  console.log(`BACKEND: http://localhost:${PORT}`);
});
