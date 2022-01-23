import React from "react";
import { minutesToDuration } from "../utils/duration";

function BreakDuration({ breakDuration, changeBreakDuration, session }) {
    return (
      <div className="input-group input-group-lg mb-2">
        <span className="input-group-text" data-testid="duration-break">
          {/* TODO: Update this text to display the current break session duration */}
          Break Duration: {minutesToDuration(breakDuration)}
        </span>
        <div className="input-group-append">
          {/* TODO: Implement decreasing break duration and disable during a focus or break session */}
          <button
            type="button"
            className="btn btn-secondary decrease-break"
            data-testid="decrease-break"
            onClick={changeBreakDuration}
            disabled={session}
          >
            <span className="oi oi-minus decrease-break" />
          </button>
          {/* TODO: Implement increasing break duration and disable during a focus or break session */}
          <button
            type="button"
            className="btn btn-secondary increase-break"
            data-testid="increase-break"
            onClick={changeBreakDuration}
            disabled={session}
          >
            <span className="oi oi-plus increase-break" />
          </button>
        </div>
      </div>
    );
}

export default BreakDuration;