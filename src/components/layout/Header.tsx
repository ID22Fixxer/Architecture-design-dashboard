"use client";

import React, { useState } from "react";
import { MdDashboard, MdNotifications, MdSettings, MdMenu, MdClose } from "react-icons/md";
import { useSession, signOut } from "next-auth/react";

interface HeaderProps {
  onMobileMenuToggle?: () => void;
  isMobileMenuOpen?: boolean;
}

export const Header = ({ onMobileMenuToggle, isMobileMenuOpen }: HeaderProps) => {
  const { data: session } = useSession();

  const handleSignOut = () => {
    signOut({ callbackUrl: "/auth/signin" });
  };

  return (
    <header className="bg-white border-b border-neutral-200 shadow-sm sticky top-0 z-10">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          {/* Mobile menu button */}
          <button
            onClick={onMobileMenuToggle}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
          >
            {isMobileMenuOpen ? (
              <MdClose className="text-gray-700 text-2xl" />
            ) : (
              <MdMenu className="text-gray-700 text-2xl" />
            )}
          </button>
          <MdDashboard className="text-blue-600 text-2xl" />
          <h1 className="font-bold text-lg text-gray-900">Architect Dashboard</h1>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-3">
            {/* Mobile: Avatar with admin badge overlay */}
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-semibold text-sm shadow-sm">
                {(() => {
                  const name = session?.user?.name || "";
                  const parts = name.split(" ");
                  if (parts.length >= 2) {
                    return `${parts[0].charAt(0)}${parts[parts.length - 1].charAt(0)}`;
                  }
                  return name.charAt(0) || "U";
                })()}
              </div>
              {/* Mobile admin badge as overlay */}
              {session?.user?.isAdmin && (
                <div className="md:hidden absolute -top-1 -right-1">
                  <span className="w-4 h-4 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full shadow-sm flex items-center justify-center">
                    <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                  </span>
                </div>
              )}
            </div>
            
            {/* Desktop: Full user info with admin badge */}
            <div className="hidden md:block">
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
            
            <button
              onClick={handleSignOut}
              className="ml-2 px-3 py-1 text-sm text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-md transition-colors cursor-pointer"
            >
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
