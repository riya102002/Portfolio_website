import { useEffect, useState } from "react";

export function LiveClock() {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  if (!now) {
    return (
      <span className="font-mono text-xs text-muted-foreground">
        --:--:-- IST
      </span>
    );
  }

  const time = now.toLocaleTimeString("en-IN", {
    hour12: false,
    timeZone: "Asia/Kolkata",
  });
  return (
    <span className="font-mono text-xs text-muted-foreground">
      <span className="mr-2 inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-teal align-middle shadow-[0_0_8px_var(--teal)]" />
      {time} IST
    </span>
  );
}
