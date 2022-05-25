import { useState } from "react";

const useVisualMode = (initial) => {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  const transition = (mode, replace) => {
    setMode(mode);
    setHistory((prev) => [...(replace ? prev.slice(0, -1) : prev), mode]);
  };

  const back = () => {
    if (history.length <= 1) return; // always keep at least one mode
    setMode(history[history.length - 2]);
    setHistory((prev) => [...prev].slice(0, -1));
  };

  return { mode, transition, back };
};

export default useVisualMode;