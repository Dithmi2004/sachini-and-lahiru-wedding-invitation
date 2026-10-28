import { useEffect, useState } from "react";
import { getCountdown, type CountdownState } from "../utils/countdown";

/**
 * Client-only countdown. Starts as "pending" so server and first client
 * render match (no hydration mismatch in Next.js), then ticks every second.
 */
export function useCountdown(startMs: number, endMs: number): CountdownState {
  const [state, setState] = useState<CountdownState>({ status: "pending" });

  useEffect(() => {
    let id: number | undefined;
    const tick = () => {
      const next = getCountdown(startMs, endMs, Date.now());
      setState(next);
      if (next.status === "passed" && id !== undefined) window.clearInterval(id);
    };
    tick();
    id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, [startMs, endMs]);

  return state;
}