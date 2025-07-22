import { Badge } from "@/components/ui/badge";

export function BetaBadge() {
  return (
    <div className="fixed bottom-8 right-8 flex items-center gap-2 z-50">
      <Badge className="bg-[#0f172a] text-white px-4 py-1 rounded-lg text-base font-semibold">Beta</Badge>
      <span className="text-zinc-400 text-base font-semibold">v1.0.0</span>
    </div>
  );
} 