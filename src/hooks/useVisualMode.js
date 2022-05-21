import { useState, useEffect } from "react";

export default (initial) => {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  useEffect(() => {

  }, []);

  const transition = (newMode, replace) => {
    setMode(newMode);
    setHistory((prev) => [...(replace ? prev.slice(0, -1) : prev), newMode]);
  };

  const back = () => {
    setMode(history[history.length - 2]);
    setHistory((prev) => [...prev].slice(0, -1));
  };

  return { mode, transition, back };
};

