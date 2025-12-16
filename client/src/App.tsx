import React, { useState } from "react";
import { Button } from "./components";
import { OverviewScreen } from "./screens";

function App() {
  const [screen, setScreen] = useState<"overview">("overview");

  return (
    <div className="min-h-screen bg-gray-200 p-6 flex flex-col gap-12 items-center">
      <Button variant="primary">Switch Screen</Button>

      {screen === "overview" && <OverviewScreen />}
    </div>
  );
}

export default App;
