import React from "react";

interface Props {
  status: "Critical" | "Average" | "Strong";
}

const colors = {
  Critical: "bg-red-500",
  Average: "bg-yellow-500",
  Strong: "bg-green-500",
};

const StatusLabel: React.FC<Props> = ({ status }) => (
  <span className={`px-3 py-1 text-white rounded-full ${colors[status]}`}>
    {status}
  </span>
);

export { StatusLabel };
