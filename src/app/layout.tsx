import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { getNavigation } from "@/lib/content";
import { ReduxProvider } from "@/store/provider";
import { TooltipProvider } from "@/components/ui/tooltip";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Recall",
  description: "Interview Prep Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navItems = getNavigation();

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ReduxProvider>
          <TooltipProvider>
            <SidebarProvider>
              <AppSidebar items={navItems} />
              <main className="w-full">
                <SidebarTrigger />
                {children}
              </main>
            </SidebarProvider>
          </TooltipProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
