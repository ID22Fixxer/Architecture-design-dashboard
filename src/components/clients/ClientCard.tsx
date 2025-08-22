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

interface ClientCardProps {
  client: Client;
}

export const ClientCard = ({ client }: ClientCardProps) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800";
      case "inactive":
        return "bg-gray-100 text-gray-800";
      case "completed":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "active":
        return "🟢";
      case "inactive":
        return "⚪";
      case "completed":
        return "✅";
      default:
        return "⚪";
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition duration-150">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center">
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
            <span className="text-blue-600 font-semibold text-lg">
              {client.name.charAt(0).toUpperCase()}
            </span>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{client.name}</h3>
            <p className="text-sm text-gray-500">{client.company}</p>
          </div>
        </div>
        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(client.status)}`}>
          <span className="mr-1">{getStatusIcon(client.status)}</span>
          {client.status.charAt(0).toUpperCase() + client.status.slice(1)}
        </span>
      </div>
      
      <div className="space-y-3 mb-4">
        <div className="flex items-center text-sm text-gray-600">
          <span className="mr-2">📧</span>
          <span>{client.email}</span>
        </div>
        <div className="flex items-center text-sm text-gray-600">
          <span className="mr-2">📞</span>
          <span>{client.phone}</span>
        </div>
        <div className="flex items-center text-sm text-gray-600">
          <span className="mr-2">🏗️</span>
          <span>{client.projectType}</span>
        </div>
        <div className="flex items-center text-sm text-gray-600">
          <span className="mr-2">📅</span>
          <span>Last contact: {client.lastContact}</span>
        </div>
      </div>
      
      <div className="flex space-x-2 pt-4 border-t border-gray-100">
        <button className="flex-1 px-3 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-md hover:bg-blue-100 transition duration-150">
          View Details
        </button>
        <button className="flex-1 px-3 py-2 text-sm font-medium text-gray-600 bg-gray-50 rounded-md hover:bg-gray-100 transition duration-150">
          Edit
        </button>
        <button className="px-3 py-2 text-sm font-medium text-gray-400 hover:text-red-600 transition duration-150">
          ⋯
        </button>
      </div>
    </div>
  );
};
