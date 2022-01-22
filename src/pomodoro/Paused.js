import React from "react";

function Paused({ session, isTimerRunning }) {
  if (!session || isTimerRunning) return null;
  return (
    <div className="row mb-2">
      <div className="col">
        <h2>PAUSED</h2>
      </div>
    </div>
  );
}

export default Paused;