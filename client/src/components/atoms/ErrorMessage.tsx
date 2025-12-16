import React from "react";

const ErrorMessage = ({ message = "Something went wrong" }) => {
  return <p className="text-red-500 p-6">{message}</p>;
};

export { ErrorMessage };
