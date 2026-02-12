import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import { ReduxProvider } from "@/store/provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { SiteHeader } from "@/components/site-header";
import { getNavigation } from "@/lib/content";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "Recall",
  description: "Interview Prep Dashboard",
};

const instrumentSans = localFont({
  src: "../fonts/Instrument_Sans/InstrumentSans-VariableFont_wdth,wght.ttf",
  variable: "--font-instrument-sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navItems = getNavigation();

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${instrumentSans.className} antialiased`}
      >
        <ReduxProvider>
          <TooltipProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <SidebarProvider>
                <AppSidebar navItems={navItems} />
                <SidebarInset>
                  <SiteHeader />
                  <div className="flex flex-1 flex-col gap-4 p-4">
                    {children}
                  </div>
                </SidebarInset>
              </SidebarProvider>
            </ThemeProvider>
          </TooltipProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
