import express, { Request, Response } from "express";
import cors from "cors";
import { overviewData } from "./data";
import { OverviewData } from "./types";

const app = express();
app.use(cors());
app.use(express.json());

const PORT: number = 4000;
const ROUTES = {
  OVERVIEW: "/overview",
} as const;

app.get(ROUTES.OVERVIEW, (_req: Request, res: Response<OverviewData>) => {
  res.json(overviewData);
});

app.listen(PORT, () => {
  console.log(`SERVER: http://localhost:${PORT}`);
});
