"use client";

import { NotificationsDialog } from "@/components/layout/NotificationsDialog";
import { Sparkles } from "lucide-react";
import Link from "next/link";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full pointer-events-none">
      <div className="h-24 w-full pointer-events-none flex items-center border-none transition-colors px-6 md:px-12 justify-between">

          {/* Logo - Solo Mobile (su desktop è nella sidebar floating) */}
          <div className="flex items-center md:hidden pointer-events-auto">
            <Link href="/" className="flex items-center gap-4 group">
              <div className="h-12 w-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center transition-transform group-hover:rotate-12 shadow-none shrink-0">
                 <Sparkles className="h-6 w-6" />
              </div>
            </Link>
          </div>

          {/* Action Icons - Visible everywhere */}
          <div className="flex items-center gap-3 ml-auto pointer-events-auto">
            <NotificationsDialog />
          </div>
      </div>
    </header>
  );
}
