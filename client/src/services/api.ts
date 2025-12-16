import axios from "axios";
import { OverviewData } from "../types";

const API_BASE = "http://localhost:4000";
const ROUTES = {
  OVERVIEW: "/overview",
  INSIGHTS: "/insights",
};

export const fetchOverview = async (): Promise<OverviewData> => {
  const response = await axios.get<OverviewData>(
    `${API_BASE}${ROUTES.OVERVIEW}`
  );
  return response.data;
};
