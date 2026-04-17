import { useEffect, useState } from "react";

export function ScrollProgress() {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const scrolled = h.scrollTop;
      const total = h.scrollHeight - h.clientHeight;
      setPct(total > 0 ? (scrolled / total) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      aria-hidden
      className="fixed left-0 top-0 z-[70] h-[2px] w-full bg-transparent"
    >
      <div
        className="h-full origin-left"
        style={{
          width: `${pct}%`,
          background: "linear-gradient(90deg, var(--teal), var(--violet))",
          boxShadow: "0 0 12px var(--teal)",
        }}
      />
    </div>
  );
}
