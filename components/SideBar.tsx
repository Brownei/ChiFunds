"use client";
import SidebarItem from "./SidebarItem";
import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";

interface ISidebarItem {
    name: string;
    path: string;
    icon: JSX.Element;
    items?: ISubItem[];
}

interface ISubItem {
    name: string;
    path: string;
}

const items: ISidebarItem[] = [
    {
        name: "Overview",
        path: "/dashboard/overview",
        icon: <Icon icon={'lucide:layout-dashboard'}/>,
    },
    {
        name: "Transaction",
        path: "/dashboard/transaction",
        icon: <Icon icon={'ph:money'}/>,
    },
    {
        name: "Payment",
        path: "/dashboard/payment",
        icon: <Icon icon={'solar:wallet-money-linear'}/>,
    },
    {
        name: "Accounts",
        path: "/dashboard/accounts",
        icon: <Icon icon={'iconamoon:profile'}/>,
    },
    {
        name: "Settings",
        path: "/dashboard/settings",
        icon: <Icon icon={'tabler:settings'}/>,
        items: [
        {
            name: "General",
            path: "/dashboard/settings",
        },
        {
            name: "Security",
            path: "/dashboard/settings/security",
        },
        {
            name: "Notifications",
            path: "/dashboard/settings/notifications",
        },
        ],
    },
];

const Sidebar = () => {
    return (
        <nav className="hidden top-0 left-0 h-screen w-64 bg-white shadow-lg z-10 p-4 md:fixed">
            <div className="flex flex-col space-y-10 w-full">
                <Image className="h-10 w-fit" src="/logo-expanded.png" alt="Logo" width={100} height={100}/>
                <div className="flex flex-col space-y-2">
                {items.map((item, index) => (
                    <SidebarItem key={index} item={item} />
                ))}
                </div>
            </div>
        </nav>
    );
};

export default Sidebar;