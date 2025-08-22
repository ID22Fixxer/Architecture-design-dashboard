"use client";

import React from "react";

interface StatsCardProps {
  icon: string;
  title: string;
  value: string | number;
  bgColor: string;
  iconColor: string;
}

export const StatsCard = ({ icon, title, value, bgColor, iconColor }: StatsCardProps) => {
  return (
    <div className="bg-white shadow-sm rounded-lg p-6 border border-gray-200 flex items-center hover:shadow-md transition duration-150">
      <div className={`p-3 rounded-full ${bgColor} mr-5`}>
        <span className={`${iconColor}`}>{icon}</span>
      </div>
      <div>
        <p className="text-sm font-medium text-gray-700">{title}</p>
        <p className="text-2xl font-semibold text-black">{value}</p>
      </div>
    </div>
  );
};
