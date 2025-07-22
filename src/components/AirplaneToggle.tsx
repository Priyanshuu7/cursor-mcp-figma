import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

type AirplaneToggleProps = {
  airplane: boolean;
  setAirplane: (value: boolean) => void;
};

export function AirplaneToggle({ airplane, setAirplane }: AirplaneToggleProps) {
  return (
    <div className="flex items-center gap-4 mb-2">
      <Switch checked={airplane} onCheckedChange={setAirplane} id="airplane" className="scale-125 data-[state=checked]:bg-[#0f172a]" />
      <Label htmlFor="airplane" className="text-base text-zinc-900">Airplane mode</Label>
      <Button className="ml-4 px-6 py-2 h-10 bg-[#0f172a] text-white text-base font-semibold rounded-md shadow-none">Continue</Button>
    </div>
  );
} 