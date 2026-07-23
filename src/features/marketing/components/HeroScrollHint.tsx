import { ChevronDown } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

export function HeroScrollHint() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="flex justify-center bg-background py-4">
      <motion.div
        aria-hidden
        animate={reduceMotion ? undefined : { y: [0, 6, 0] }}
        transition={reduceMotion ? undefined : { duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown size={20} className="text-muted-foreground" />
      </motion.div>
    </div>
  );
}
