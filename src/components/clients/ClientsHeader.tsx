"use client";

import React, { useState } from "react";
import { MdSearch, MdAdd } from "react-icons/md";

interface ClientsHeaderProps {
  onSearch?: (query: string) => void;
  onAddClient?: () => void;
}

export const ClientsHeader = ({ 
  onSearch,
  onAddClient 
}: ClientsHeaderProps) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    
    // Call the parent's search handler if provided
    if (onSearch) {
      onSearch(query);
    } else {
      // Default search behavior
      console.log("Clients searching for:", query);
    }
  };

  const handleAddClient = () => {
    if (onAddClient) {
      onAddClient();
    } else {
      console.log("Add client clicked");
    }
  };

  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Clients</h2>
        <p className="text-gray-600 mt-1">Manage your client relationships and project details</p>
      </div>
      <div className="mt-4 md:mt-0 flex items-center space-x-3">
        <div className="relative">
          <input 
            type="text" 
            placeholder="Search clients..." 
            value={searchQuery}
            onChange={handleSearch}
            className="pl-10 pr-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full md:w-64 text-sm text-black placeholder-gray-500"
          />
          <MdSearch className="absolute left-3 top-2.5 text-neutral-400 text-xl" />
        </div>
        <button 
          onClick={handleAddClient}
          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-150 text-sm font-medium"
        >
          <MdAdd className="mr-2 text-base" />
          Add Client
        </button>
      </div>
    </div>
  );
};
