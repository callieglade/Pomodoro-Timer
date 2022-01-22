import React from "react";

function Paused({ session, isTimerRunning }) {
  if (!session || isTimerRunning) return null;
  return (
    <div className="row mb-2">
      <h2>Paused</h2>
    </div>
  );
}

export default Paused;