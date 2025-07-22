import { Card } from "@/components/ui/card";
import { LogOut, User, CreditCard, Settings, Keyboard, Users, UserPlus, Github, LifeBuoy, Server, ChevronRight } from "lucide-react";

export function SidebarRight() {
  return (
    <section className="w-full max-w-[340px]">
      <Card className="shadow-md rounded-xl p-0 overflow-hidden">
        <div className="px-6 pt-5 pb-2 border-b">
          <div className="font-bold text-lg text-zinc-900 mb-2">My Account</div>
        </div>
        <nav className="divide-y divide-zinc-100">
          <div className="px-6 py-2 flex items-center gap-3 hover:bg-zinc-50 cursor-pointer">
            <User className="w-5 h-5 text-zinc-700" />
            <span className="flex-1 text-base text-zinc-900">Profile Item</span>
            <span className="text-xs text-zinc-400 font-mono">⌘⇧B</span>
          </div>
          <div className="px-6 py-2 flex items-center gap-3 hover:bg-zinc-50 cursor-pointer">
            <CreditCard className="w-5 h-5 text-zinc-700" />
            <span className="flex-1 text-base text-zinc-900">Billing</span>
            <span className="text-xs text-zinc-400 font-mono">⌘⇧B</span>
          </div>
          <div className="px-6 py-2 flex items-center gap-3 hover:bg-zinc-50 cursor-pointer">
            <Settings className="w-5 h-5 text-zinc-700" />
            <span className="flex-1 text-base text-zinc-900">Settings</span>
            <span className="text-xs text-zinc-400 font-mono">⌘⇧B</span>
          </div>
          <div className="px-6 py-2 flex items-center gap-3 hover:bg-zinc-50 cursor-pointer">
            <Keyboard className="w-5 h-5 text-zinc-700" />
            <span className="flex-1 text-base text-zinc-900">Keyboard shortcuts</span>
            <span className="text-xs text-zinc-400 font-mono">⌘⇧B</span>
          </div>
          <div className="px-6 py-2 flex items-center gap-3 hover:bg-zinc-50 cursor-pointer">
            <Users className="w-5 h-5 text-zinc-700" />
            <span className="flex-1 text-base text-zinc-900">Team</span>
            <span className="text-xs text-zinc-400 font-mono">⌘⇧B</span>
          </div>
          <div className="px-6 py-2 flex items-center gap-3 hover:bg-zinc-50 cursor-pointer">
            <UserPlus className="w-5 h-5 text-zinc-700" />
            <span className="flex-1 text-base text-zinc-900">Invite users</span>
            <ChevronRight className="w-4 h-4 text-zinc-400" />
          </div>
          <div className="px-6 py-2 flex items-center gap-3 hover:bg-zinc-50 cursor-pointer">
            <Users className="w-5 h-5 text-zinc-700" />
            <span className="flex-1 text-base text-zinc-900">New team</span>
            <span className="text-xs text-zinc-400 font-mono">⌘⇧B</span>
          </div>
          <div className="px-6 py-2 flex items-center gap-3 hover:bg-zinc-50 cursor-pointer">
            <Github className="w-5 h-5 text-zinc-700" />
            <span className="flex-1 text-base text-zinc-900">Github</span>
            <span className="text-xs text-zinc-400 font-mono">⌘⇧B</span>
          </div>
          <div className="px-6 py-2 flex items-center gap-3 hover:bg-zinc-50 cursor-pointer">
            <LifeBuoy className="w-5 h-5 text-zinc-700" />
            <span className="flex-1 text-base text-zinc-900">Suppor</span>
            <span className="text-xs text-zinc-400 font-mono">⌘⇧B</span>
          </div>
          <div className="px-6 py-2 flex items-center gap-3 opacity-50 cursor-not-allowed">
            <Server className="w-5 h-5 text-zinc-400" />
            <span className="flex-1 text-base text-zinc-400">API</span>
            <span className="text-xs text-zinc-300 font-mono">⌘⇧B</span>
          </div>
        </nav>
        <div className="border-t px-6 py-2 flex items-center gap-3 hover:bg-zinc-50 cursor-pointer">
          <LogOut className="w-5 h-5 text-zinc-700" />
          <span className="flex-1 text-base text-zinc-900">Log out</span>
          <span className="text-xs text-zinc-400 font-mono">⌘⇧B</span>
        </div>
      </Card>
    </section>
  );
} 