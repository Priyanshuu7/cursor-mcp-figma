import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { RadioGroup } from "@radix-ui/react-radio-group";
import React from "react";

type SidebarLeftProps = {
  radio: string;
  setRadio: (value: string) => void;
  dimensions: { width: string; maxWidth: string; height: string; maxHeight: string };
  setDimensions: (d: { width: string; maxWidth: string; height: string; maxHeight: string }) => void;
};

export function SidebarLeft({ radio, setRadio, dimensions, setDimensions }: SidebarLeftProps) {
  return (
    <section className="flex flex-col gap-8">
      {/* Radio group */}
      <div className="space-y-2">
        <RadioGroup value={radio} onValueChange={setRadio} className="flex flex-col gap-2">
          <label className="flex items-center gap-2 text-zinc-900 text-base font-normal">
            <input type="radio" checked={radio === "default"} onChange={() => setRadio("default")} className="accent-[#0f172a] w-4 h-4" />
            Default
          </label>
          <label className="flex items-center gap-2 text-zinc-900 text-base font-normal">
            <input type="radio" checked={radio === "comfortable"} onChange={() => setRadio("comfortable")} className="accent-[#0f172a] w-4 h-4" />
            Comfortable
          </label>
          <label className="flex items-center gap-2 text-zinc-900 text-base font-normal">
            <input type="radio" checked={radio === "compact"} onChange={() => setRadio("compact")} className="accent-[#0f172a] w-4 h-4" />
            Compact
          </label>
        </RadioGroup>
      </div>
      {/* Dimensions panel */}
      <Card className="shadow-md rounded-xl p-6 w-full max-w-[340px]">
        <CardHeader className="p-0 mb-2">
          <CardTitle className="text-lg font-bold text-zinc-900 mb-0">Dimensions</CardTitle>
          <CardDescription className="text-sm text-blue-500 mt-1 font-normal">Set the dimensions for the layer.</CardDescription>
        </CardHeader>
        <CardContent className="p-0 mt-2 grid grid-cols-2 gap-3">
          <div>
            <Label htmlFor="width" className="text-base text-zinc-900">Width</Label>
            <Input id="width" value={dimensions.width} onChange={e => setDimensions({ ...dimensions, width: e.target.value })} className="mt-1 text-base px-3 py-2 border-zinc-200" />
          </div>
          <div>
            <Label htmlFor="maxWidth" className="text-base text-zinc-900">Max. width</Label>
            <Input id="maxWidth" value={dimensions.maxWidth} onChange={e => setDimensions({ ...dimensions, maxWidth: e.target.value })} className="mt-1 text-base px-3 py-2 border-zinc-200" />
          </div>
          <div>
            <Label htmlFor="height" className="text-base text-zinc-900">Heigh</Label>
            <Input id="height" value={dimensions.height} onChange={e => setDimensions({ ...dimensions, height: e.target.value })} className="mt-1 text-base px-3 py-2 border-zinc-200" />
          </div>
          <div>
            <Label htmlFor="maxHeight" className="text-base text-zinc-900">Max. height</Label>
            <Input id="maxHeight" value={dimensions.maxHeight} onChange={e => setDimensions({ ...dimensions, maxHeight: e.target.value })} className="mt-1 text-base px-3 py-2 border-zinc-200" />
          </div>
        </CardContent>
      </Card>
      <div className="text-base text-blue-400 mt-2">This figma file was made with love by <a href="#" className="underline">@skirano</a></div>
    </section>
  );
} 