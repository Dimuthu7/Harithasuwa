import { ChevronDown } from "lucide-react";

export function HeroScrollHint() {
  return (
    <div className="flex justify-center py-4 bg-background">
      <ChevronDown size={20} className="text-muted-foreground animate-bounce" />
    </div>
  );
}
