"use client";

import { usePathname } from "next/navigation";
import { Header } from "./Header";
import { BottomNav } from "./BottomNav";
import { cn } from "@/lib/utils";

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isLandingPage = pathname === "/";
  const isLoginPage = pathname === "/login";

  if (isLandingPage || isLoginPage) {
    return <main className="min-h-screen">{children}</main>;
  }

  return (
    <div className="relative flex min-h-screen flex-col overflow-x-hidden">
      <Header />
      <div className={cn(
        "flex-1 transition-all",
        "md:pl-72 lg:pl-80" // Desktop sidebar space increased for breathing room
      )}>
        <main className="max-w-[1280px] mx-auto pb-32 pt-28 px-6 md:pb-12 md:px-10 md:pt-12">
          {children}
        </main>
      </div>
      <BottomNav />
    </div>
  );
}
