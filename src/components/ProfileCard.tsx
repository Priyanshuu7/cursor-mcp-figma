import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Calendar } from "lucide-react";

export function ProfileCard() {
  return (
    <Card className="shadow-md rounded-xl p-4 w-full max-w-md min-h-[120px] flex flex-col justify-center">
      <CardHeader className="flex flex-col items-center gap-2 p-0 mb-2">
        <div className="w-14 h-14 rounded-full bg-black mb-2" />
        <CardTitle className="text-center text-lg font-bold text-zinc-900">@nextjs</CardTitle>
        <CardDescription className="text-center text-zinc-700 text-base">The React Framework - created and maintained by @vercel</CardDescription>
      </CardHeader>
      <CardContent className="flex items-center justify-center gap-2 text-zinc-500 text-sm p-0">
        <Calendar className="w-4 h-4 mr-1" />
        Joined December 2021
      </CardContent>
    </Card>
  );
} 