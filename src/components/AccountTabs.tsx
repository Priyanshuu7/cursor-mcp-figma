import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

type AccountTabsProps = {
  tab: string;
  setTab: (value: string) => void;
};

export function AccountTabs({ tab, setTab }: AccountTabsProps) {
  return (
    <Tabs value={tab} onValueChange={setTab} className="w-full max-w-md mt-2">
      <TabsList className="w-full grid grid-cols-2 bg-zinc-100 border rounded-lg">
        <TabsTrigger value="account" className="text-base">Account</TabsTrigger>
        <TabsTrigger value="password" className="text-base">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account" className="pt-4 text-base text-zinc-500">Account tab content</TabsContent>
      <TabsContent value="password" className="pt-4 text-base text-zinc-500">Password tab content</TabsContent>
    </Tabs>
  );
} 