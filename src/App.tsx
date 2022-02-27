import { useState, useEffect } from "react";

const COUNTDOWN_INITIAL_TIME_IN_SECONDS = 25 * 60; // minutes

function App() {
  const [secondsAmount, setSecondsAmount] = useState(
    COUNTDOWN_INITIAL_TIME_IN_SECONDS
  );

  useEffect(() => {
    if (secondsAmount > 0) {
      setTimeout(() => {
        setSecondsAmount((secondsAmount) => secondsAmount - 1);
      }, 1000);
    } else {
      alert("Chegou ao fim!");
    }
  }, [secondsAmount]);

  // Math.ceil, Math.round e Math.floor
  const minutes = Math.floor(secondsAmount / 60);
  const seconds = secondsAmount % 60;

  return (
    <div>
      <span>{String(minutes).padStart(2, "0")}</span>
      <span>:</span>
      <span>{String(seconds).padStart(2, "0")}</span>
    </div>
  );
}

export default App;
