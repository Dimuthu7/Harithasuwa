import { useEffect } from "react";

const MIN_VISIBLE_MS = 900;
const FADE_MS = 420;

/**
 * Dismisses the #hs-boot-splash markup from index.html after first load.
 * Keeps a single splash (no duplicate React overlay).
 */
export function InitialLoader() {
  useEffect(() => {
    const splash = document.getElementById("hs-boot-splash");
    if (!splash) return;

    document.documentElement.classList.add("hs-loading");
    const started = performance.now();
    let fadeTimer: number | undefined;
    let removeTimer: number | undefined;

    const dismiss = () => {
      const wait = Math.max(0, MIN_VISIBLE_MS - (performance.now() - started));
      fadeTimer = window.setTimeout(() => {
        splash.classList.add("hs-boot-splash--hide");
        document.documentElement.classList.remove("hs-loading");
        removeTimer = window.setTimeout(() => splash.remove(), FADE_MS);
      }, wait);
    };

    if (document.readyState === "complete") {
      dismiss();
    } else {
      window.addEventListener("load", dismiss, { once: true });
    }

    return () => {
      window.removeEventListener("load", dismiss);
      if (fadeTimer) window.clearTimeout(fadeTimer);
      if (removeTimer) window.clearTimeout(removeTimer);
      document.documentElement.classList.remove("hs-loading");
    };
  }, []);

  return null;
}
