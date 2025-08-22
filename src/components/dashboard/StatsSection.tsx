"use client";

import React from "react";
import { StatsCard } from "./StatsCard";

export const StatsSection = () => {
  const stats = [
    {
      icon: "🏗️",
      title: "Active Projects",
      value: "12",
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600"
    },
    {
      icon: "👥",
      title: "Total Clients",
      value: "24",
      bgColor: "bg-green-100",
      iconColor: "text-green-600"
    },
    {
      icon: "✅",
      title: "Completed Designs",
      value: "37",
      bgColor: "bg-purple-100",
      iconColor: "text-purple-600"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
      {stats.map((stat, index) => (
        <StatsCard
          key={index}
          icon={stat.icon}
          title={stat.title}
          value={stat.value}
          bgColor={stat.bgColor}
          iconColor={stat.iconColor}
        />
      ))}
    </div>
  );
};
