"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import { MdDashboard, MdPeople, MdBuild, MdSchedule, MdAttachMoney, MdSettings } from "react-icons/md";

interface NavItem {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  href: string;
}

export const Sidebar = () => {
  const pathname = usePathname();
  const { data: session } = useSession();
  const isAdmin = session?.user?.isAdmin || false;

  const navigationItems: NavItem[] = [
    {
      id: "dashboard",
      label: "Dashboard",
      icon: MdDashboard,
      href: "/",
    },
    {
      id: "clients",
      label: "Clients",
      icon: MdPeople,
      href: "/clients",
    },
    {
      id: "projects",
      label: "Projects",
      icon: MdBuild,
      href: "#",
    },
    {
      id: "schedule",
      label: "Schedule",
      icon: MdSchedule,
      href: "#",
    },
    {
      id: "invoices",
      label: "Invoices",
      icon: MdAttachMoney,
      href: "#",
    },
    {
      id: "settings",
      label: "Settings",
      icon: MdSettings,
      href: "#",
    },
  ];

  return (
    <aside className="hidden md:block w-full md:w-64 bg-white border-r border-gray-200 md:h-[calc(100vh-4rem)] p-4">
      <nav className="space-y-1">
        {navigationItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.id}
              href={item.href}
              className={`flex items-center px-4 py-2 rounded-lg group transition duration-150 ${
                isActive
                  ? "text-blue-700 bg-blue-50"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <item.icon className="mr-3 h-5 w-5" />
              <span className="font-medium">{item.label}</span>
            </Link>
          );
        })}
      </nav>
      
      <div className="mt-8 pt-6 border-t border-gray-200">
        <div className="bg-blue-50 p-4 rounded-lg">
          <div className="flex items-center">
            <span className="text-blue-600">⭐</span>
            <h3 className="ml-2 font-medium text-blue-700">Pro Features</h3>
          </div>
          <p className="mt-2 text-sm text-gray-700">Upgrade to access advanced 3D rendering and collaboration tools.</p>
          <button className="mt-3 w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-150 text-sm font-medium">
            Upgrade Now
          </button>
        </div>
      </div>
    </aside>
  );
};
