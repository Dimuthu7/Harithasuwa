import { Star } from "lucide-react";

interface StarRowProps {
  count: number;
}

export function StarRow({ count }: StarRowProps) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={14} className="fill-[#E9C46A] text-[#E9C46A]" />
      ))}
    </div>
  );
}
