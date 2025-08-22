"use client";

import React from "react";
import { MdDashboard, MdPeople, MdBuild, MdSchedule, MdAttachMoney, MdSettings, MdClose } from "react-icons/md";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";

interface MobileSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileSidebar: React.FC<MobileSidebarProps> = ({ isOpen, onClose }) => {
  const pathname = usePathname();
  const { data: session } = useSession();
  const isAdmin = session?.user?.isAdmin || false;
  
  const navItems = [
    { href: "/", icon: MdDashboard, label: "Dashboard", adminOnly: false, hideForAdmin: false },
    { href: "/clients", icon: MdPeople, label: "Clients", adminOnly: false, hideForAdmin: false },
    { href: "#", icon: MdBuild, label: "Projects", adminOnly: false, hideForAdmin: false },
    { href: "#", icon: MdSchedule, label: "Schedule", adminOnly: false, hideForAdmin: false },
    { href: "#", icon: MdAttachMoney, label: "Invoices", adminOnly: false, hideForAdmin: false },
    { href: "#", icon: MdSettings, label: "Settings", adminOnly: false, hideForAdmin: false },
  ];

  const filteredNavItems = navItems.filter((item) => {
    const showForAdminStatus = !item.adminOnly || isAdmin;
    const hideForAdmin = item.hideForAdmin && isAdmin;
    return showForAdminStatus && !hideForAdmin;
  });

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40 md:hidden"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
          onClick={onClose}
        />
      )}
      
      {/* Mobile Sidebar */}
      <div className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 md:hidden ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="p-4">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900">Menu</h2>
            <button
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
            >
              <MdClose className="text-gray-700 text-2xl" />
            </button>
          </div>
          
          {/* User Info Section */}
          <div className="mb-6 p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-semibold text-lg shadow-sm">
                {(() => {
                  const name = session?.user?.name || "";
                  const parts = name.split(" ");
                  if (parts.length >= 2) {
                    return `${parts[0].charAt(0)}${parts[parts.length - 1].charAt(0)}`;
                  }
                  return name.charAt(0) || "U";
                })()}
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-semibold text-gray-900">
                    {session?.user?.name || "User"}
                  </span>
                  {session?.user?.isAdmin && (
                    <span className="px-2 py-1 bg-gradient-to-r from-purple-500 to-purple-600 text-white text-xs font-medium rounded-full shadow-sm flex items-center">
                      <span className="w-1.5 h-1.5 bg-white rounded-full mr-1.5"></span>
                      Admin
                    </span>
                  )}
                </div>
                <div className="text-xs text-gray-500 mt-0.5">
                  {session?.user?.email}
                </div>
              </div>
            </div>
          </div>
          
          <nav className="space-y-2">
            {filteredNavItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={onClose}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                    isActive
                      ? "bg-blue-50 text-blue-700"
                      : "hover:bg-gray-100 text-gray-900"
                  }`}
                >
                  <item.icon className="text-2xl" />
                  <span className="font-medium">{item.label}</span>
                </Link>
              );
            })}
          </nav>
          
          {/* Pro Features Section */}
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
        </div>
      </div>
    </>
  );
};
