import React, { useState } from "react";
import { Button } from "./components";
import { OverviewScreen, InsightsScreen } from "./screens";

function App() {
  const [screen, setScreen] = useState<"overview" | "insights">("overview");

  return (
    <div className="min-h-screen bg-gray-200 p-6 flex flex-col gap-12 items-center">
      <Button
        variant="primary"
        onClick={() =>
          setScreen(screen === "overview" ? "insights" : "overview")
        }
      >
        Switch Screen
      </Button>

      {screen === "overview" && <OverviewScreen />}
      {screen === "insights" && <InsightsScreen />}
    </div>
  );
}

export default App;
