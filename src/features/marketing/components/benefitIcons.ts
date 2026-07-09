import { Heart, Leaf, Shield, Sprout, type LucideIcon } from "lucide-react";
import type { BenefitIconId } from "@/content/types";

export const benefitIconMap: Record<BenefitIconId, LucideIcon> = {
  leaf: Leaf,
  sprout: Sprout,
  heart: Heart,
  shield: Shield,
};
