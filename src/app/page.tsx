"use client";
import {useState} from "react";
import { Header } from "@/components/Header";
import { SidebarLeft } from "@/components/SidebarLeft";
import { AirplaneToggle } from "@/components/AirplaneToggle";
import { ProfileCard } from "@/components/ProfileCard";
import { AccountTabs } from "@/components/AccountTabs";
import { SidebarRight } from "@/components/SidebarRight";
import { BetaBadge } from "@/components/BetaBadge";
import {
    LogOut,
    User,
    CreditCard,
    Settings,
    Keyboard,
    Users,
    UserPlus,
    Github,
    LifeBuoy,
    Server,
} from "lucide-react";

const menuItems = [
    {
        icon: <User className="w-4 h-4"/>,
        label: "Profile",
        shortcut: "⌘⇧B"
    }, {
        icon: <CreditCard className="w-4 h-4"/>,
        label: "Billing",
        shortcut: "⌘⇧B"
    }, {
        icon: <Settings className="w-4 h-4"/>,
        label: "Settings",
        shortcut: "⌘⇧B"
    }, {
        icon: <Keyboard className="w-4 h-4"/>,
        label: "Keyboard shortcuts",
        shortcut: "⌘⇧B"
    }, {
        icon: <Users className="w-4 h-4"/>,
        label: "Team",
        shortcut: "⌘⇧B"
    }, {
        icon: <UserPlus className="w-4 h-4"/>,
        label: "Invite users",
        shortcut: "⌘⇧B"
    }, {
        icon: <Github className="w-4 h-4"/>,
        label: "Github",
        shortcut: "⌘⇧B"
    }, {
        icon: <LifeBuoy className="w-4 h-4"/>,
        label: "Support",
        shortcut: "⌘⇧B"
    }, {
        icon: <Server className="w-4 h-4"/>,
        label: "API",
        shortcut: "⌘⇧B"
    }, {
        icon: <LogOut className="w-4 h-4"/>,
        label: "Log out",
        shortcut: "⌘⇧B"
    }
];

export default function Home() {
    const [radio,
        setRadio] = useState("comfortable");
    const [airplane,
        setAirplane] = useState(false);
    const [dimensions,
        setDimensions] = useState({width: "100%", maxWidth: "300px", height: "25px", maxHeight: "none"});
    const [tab,
        setTab] = useState("account");

    return (
        <div className="min-h-screen bg-white font-sans">
            <Header />
            <main className="grid grid-cols-1 md:grid-cols-[320px_1fr_340px] gap-8 px-4 md:px-0 pt-12 items-start max-w-6xl mx-auto w-full">
                <SidebarLeft radio={radio} setRadio={setRadio} dimensions={dimensions} setDimensions={setDimensions} />
                <section className="flex flex-col items-center gap-6">
                    <AirplaneToggle airplane={airplane} setAirplane={setAirplane} />
                    <ProfileCard />
                    <AccountTabs tab={tab} setTab={setTab} />
                </section>
                <SidebarRight />
            </main>
            <BetaBadge />
        </div>
    );
}
