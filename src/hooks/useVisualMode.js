import { useState } from "react";

export default (initial) => {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  const transition = (mode, replace) => {
    setMode(mode);
    setHistory((prev) => [...(replace ? prev.slice(0, -1) : prev), mode]);
  };

  const back = () => {
    setMode(history[history.length - 2]);
    setHistory((prev) => [...prev].slice(0, -1));
  };

  return { mode, transition, back };
};