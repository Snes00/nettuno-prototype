"use client";

import { NotificationsDialog } from "@/components/layout/NotificationsDialog";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full pointer-events-none md:left-72 lg:left-80">
      {/* Area Interattiva Solida - Only Notifications now on Desktop */}
      <div className="h-24 w-full pointer-events-auto flex items-center border-none transition-colors px-6 md:px-10 justify-end md:justify-end">
          {/* Action Icons - Mobile show nothing (logo is in BottomNav/Sidebar) */}
          <div className="flex items-center gap-3 md:bg-background/80 md:backdrop-blur-md md:p-2 md:rounded-2xl">
            <NotificationsDialog />
          </div>
      </div>
    </header>
  );
}
