"use client";

import React from "react";
import { ClientCard } from "./ClientCard";
import { ClientsHeader } from "./ClientsHeader";
import { ClientsStats } from "./ClientsStats";

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

export const ClientsPage = () => {
  const sampleClients: Client[] = [
    {
      id: "1",
      name: "John Smith",
      email: "john.smith@techcorp.com",
      phone: "(555) 123-4567",
      company: "TechCorp Industries",
      projectType: "Commercial Office",
      status: "active",
      avatar: "JS",
      lastContact: "2 days ago"
    },
    {
      id: "2",
      name: "Sarah Johnson",
      email: "sarah.j@greenliving.com",
      phone: "(555) 234-5678",
      company: "Green Living Homes",
      projectType: "Residential",
      status: "active",
      avatar: "SJ",
      lastContact: "1 week ago"
    },
    {
      id: "3",
      name: "Michael Chen",
      email: "mchen@innovate.com",
      phone: "(555) 345-6789",
      company: "Innovate Solutions",
      projectType: "Industrial",
      status: "completed",
      avatar: "MC",
      lastContact: "3 weeks ago"
    },
    {
      id: "4",
      name: "Emily Davis",
      email: "emily.davis@luxury.com",
      phone: "(555) 456-7890",
      company: "Luxury Estates",
      projectType: "Residential",
      status: "active",
      avatar: "ED",
      lastContact: "5 days ago"
    },
    {
      id: "5",
      name: "Robert Wilson",
      email: "r.wilson@startup.com",
      phone: "(555) 567-8901",
      company: "Startup Ventures",
      projectType: "Commercial Retail",
      status: "inactive",
      avatar: "RW",
      lastContact: "1 month ago"
    },
    {
      id: "6",
      name: "Lisa Anderson",
      email: "lisa.anderson@healthcare.com",
      phone: "(555) 678-9012",
      company: "Healthcare Plus",
      projectType: "Healthcare Facility",
      status: "active",
      avatar: "LA",
      lastContact: "3 days ago"
    },
    {
      id: "7",
      name: "David Brown",
      email: "david.brown@education.com",
      phone: "(555) 789-0123",
      company: "Education First",
      projectType: "Educational",
      status: "completed",
      avatar: "DB",
      lastContact: "2 weeks ago"
    },
    {
      id: "8",
      name: "Jennifer Lee",
      email: "jennifer.lee@hospitality.com",
      phone: "(555) 890-1234",
      company: "Hospitality Group",
      projectType: "Hotel & Resort",
      status: "active",
      avatar: "JL",
      lastContact: "1 day ago"
    }
  ];

  return (
    <div>
      <ClientsHeader />
      <ClientsStats clients={sampleClients} />
      
      {/* Clients Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {sampleClients.map((client) => (
          <ClientCard key={client.id} client={client} />
        ))}
      </div>
    </div>
  );
};
