"use client";

import React from "react";

interface Client {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  projectType: string;
  status: "active" | "inactive" | "completed";
  avatar: string;
  lastContact: string;
}

interface ClientsStatsProps {
  clients: Client[];
}

export const ClientsStats = ({ clients }: ClientsStatsProps) => {
  const totalClients = clients.length;
  const activeClients = clients.filter(c => c.status === 'active').length;
  const completedClients = clients.filter(c => c.status === 'completed').length;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
      <div className="bg-white shadow-sm rounded-lg p-6 border border-gray-200 flex items-center hover:shadow-md transition duration-150">
        <div className="p-3 rounded-full bg-green-100 mr-5">
          <span className="text-green-600">👥</span>
        </div>
        <div>
          <p className="text-sm font-medium text-gray-700">Total Clients</p>
          <p className="text-2xl font-semibold text-black">{totalClients}</p>
        </div>
      </div>
      <div className="bg-white shadow-sm rounded-lg p-6 border border-gray-200 flex items-center hover:shadow-md transition duration-150">
        <div className="p-3 rounded-full bg-blue-100 mr-5">
          <span className="text-blue-600">🟢</span>
        </div>
        <div>
          <p className="text-sm font-medium text-gray-700">Active Projects</p>
          <p className="text-2xl font-semibold text-black">{activeClients}</p>
        </div>
      </div>
      <div className="bg-white shadow-sm rounded-lg p-6 border border-gray-200 flex items-center hover:shadow-md transition duration-150">
        <div className="p-3 rounded-full bg-purple-100 mr-5">
          <span className="text-purple-600">✅</span>
        </div>
        <div>
          <p className="text-sm font-medium text-gray-700">Completed</p>
          <p className="text-2xl font-semibold text-black">{completedClients}</p>
        </div>
      </div>
    </div>
  );
};
