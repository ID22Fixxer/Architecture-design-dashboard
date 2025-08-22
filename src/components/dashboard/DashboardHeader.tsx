"use client";

import React, { useState } from "react";
import { MdSearch } from "react-icons/md";

interface DashboardHeaderProps {
  title?: string;
  description?: string;
}

export const DashboardHeader = ({ 
  title = "Dashboard",
  description = "Manage your architect projects and client information"
}: DashboardHeaderProps) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    
    // TODO: Implement search functionality for dashboard items
    // This could search through projects, recent activities, etc.
    console.log("Dashboard searching for:", query);
  };

  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
        <p className="text-gray-600 mt-1">{description}</p>
      </div>
      <div className="mt-4 md:mt-0 flex items-center space-x-3">
        <div className="relative">
          <input 
            type="text" 
            placeholder="Search projects, activities..." 
            value={searchQuery}
            onChange={handleSearch}
            className="pl-10 pr-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full md:w-64 text-sm text-black placeholder-gray-500"
          />
          <MdSearch className="absolute left-3 top-2.5 text-neutral-400 text-xl" />
        </div>
        <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150">
          <span className="mr-2">➕</span>
          New Project
        </button>
      </div>
    </div>
  );
};
