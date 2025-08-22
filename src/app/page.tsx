"use client";
//deploy test
import React from "react";
import {
  DashboardLayout,
  StatsSection,
  ClientForm,
  FileUpload,
  ActionButtons,
  DashboardHeader
} from "../components";
import { ProtectedRoute } from "../components/ProtectedRoute";

export default function Home() {
  return (
    <ProtectedRoute>
      <DashboardLayout>
        <DashboardHeader />
        <StatsSection />
        <ClientForm />
        <FileUpload />
        <ActionButtons />
      </DashboardLayout>
    </ProtectedRoute>
  );
}
