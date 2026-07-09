import { useCallback } from "react";

export function useScrollTo(onNavigate?: () => void) {
  return useCallback(
    (id: string) => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      onNavigate?.();
    },
    [onNavigate],
  );
}
