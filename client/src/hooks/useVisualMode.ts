import { useState } from "react";

// = type definitions =
type Mode = string;

// = main function =
const useVisualMode = (initial: Mode) => {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  /**
   * @param {string} mode name of new mode
   * @param {boolean} replace if true, will replace last mode in history instead of appending
   * */
  const transition = (mode: Mode, replace: boolean = false) => {
    setMode(mode);
    setHistory((prev) => (replace ? prev.slice(0, -1) : prev).concat(mode));
  };

  const back = () => {
    if (history.length <= 1) return; // always keep at least one mode
    setMode(history[history.length - 2]);
    setHistory((prev) => prev.slice(0, -1));
  };

  return { mode, transition, back };
};

export default useVisualMode;