import { useState } from "react";

export const useTypeChange = () => {
  const [type, setType] = useState<string>("");

  const handleTypeChange = (newType: string) => {
    setType(newType);
  };

  return { type, handleTypeChange };
};
