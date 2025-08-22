"use client";

import React from "react";
import { DashboardLayout } from "../../components/layout/DashboardLayout";
import { ClientsPage } from "../../components/clients/ClientsPage";
import { ProtectedRoute } from "../../components/ProtectedRoute";

export default function Clients() {
  return (
    <ProtectedRoute>
      <DashboardLayout>
        <ClientsPage />
      </DashboardLayout>
    </ProtectedRoute>
  );
}
