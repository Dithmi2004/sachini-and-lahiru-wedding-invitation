export type CountdownState =
{status: "pending";} |
{status: "upcoming";days: number;hours: number;minutes: number;seconds: number;} |
{status: "inProgress";} |
{status: "passed";};

export function getCountdown(startMs: number, endMs: number, nowMs: number): CountdownState {
  if (nowMs >= endMs) return { status: "passed" };
  if (nowMs >= startMs) return { status: "inProgress" };
  const total = Math.floor((startMs - nowMs) / 1000);
  return {
    status: "upcoming",
    days: Math.floor(total / 86400),
    hours: Math.floor(total % 86400 / 3600),
    minutes: Math.floor(total % 3600 / 60),
    seconds: total % 60
  };
}