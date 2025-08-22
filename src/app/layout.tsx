import type { Metadata } from "next";
import { Providers } from "../components/Providers";
import "./globals.css";

export const metadata: Metadata = {
  title: "Architect Dashboard",
  description: "Professional architect project management dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
