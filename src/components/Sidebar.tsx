import { menuItems } from "@/constants";
import { cn } from "@/lib/utils";
import {
  Bell,
  ChevronLeft,
  ChevronRight,
  Lock,
  Moon,
  Search,
  Settings,
  Sun,
} from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "./ThemeProvider";

// interface SidebarProps {
//   activeSection: string;
//   onSectionChange: (section: string) => void;
// }

export function Sidebar() {
  const location = useLocation();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [expandedSections, setExpandedSections] = useState<string[]>([
    "journal",
  ]);
  const [showOptions, setShowOptions] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const toggleSection = (sectionId: string) => {
    setExpandedSections((prev) =>
      prev.includes(sectionId)
        ? prev.filter((id) => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  return (
    <div
      className={cn(
        "h-full bg-white/60 dark:bg-black/60 backdrop-blur-xl border-r border-black/20 dark:border-red-900/20 relative overflow-hidden transition-all duration-300",
        isCollapsed ? "w-20" : "w-64"
      )}
    >
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/5 dark:from-red-900/10 dark:via-transparent dark:to-red-900/5" />

      {/* Content */}
      <div className="relative z-10 p-6 h-full flex flex-col">
        <div className="flex items-center justify-between mb-8">
          <h1
            className={cn(
              "font-metacopy text-2xl text-black/90 dark:text-white/90 transition-opacity duration-300",
              isCollapsed && "opacity-0"
            )}
          >
            The Archives
          </h1>
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-2 hover:bg-black/5 dark:hover:bg-white/5 rounded-lg transition-colors"
          >
            {isCollapsed ? (
              <ChevronRight className="w-5 h-5 text-black/70 dark:text-white/70" />
            ) : (
              <ChevronLeft className="w-5 h-5 text-black/70 dark:text-white/70" />
            )}
          </button>
        </div>

        {!isCollapsed && (
          <div className="h-px bg-gradient-to-r from-black/50 via-black/50 to-transparent dark:from-red-800/50 dark:via-red-500/50 dark:to-transparent mt-2 mb-8" />
        )}

        {/* Main Navigation */}
        <nav className="flex-1 space-y-2 overflow-y-auto">
          {menuItems.map((item) => (
            <div key={item.id}>
              {item.children ? (
                <div className="space-y-2">
                  <button
                    onClick={() => !item.locked && toggleSection(item.id)}
                    className={cn(
                      "flex w-full items-center gap-3 px-4 py-3 text-sm",
                      "rounded-lg transition-all duration-300",
                      "hover:bg-black/30 dark:hover:bg-red-950/30",
                      item.locked
                        ? "cursor-not-allowed text-gray-500"
                        : "hover:text-black dark:hover:text-red-100 text-black/70 dark:text-white/70"
                    )}
                  >
                    <item.icon className="w-5 h-5 flex-shrink-0" />
                    <span
                      className={cn(
                        "font-medium whitespace-nowrap transition-opacity duration-300 flex-1",
                        isCollapsed && "opacity-0 w-0"
                      )}
                    >
                      {item.label}
                    </span>
                    {item.locked ? (
                      <Lock className="w-4 h-4 text-gray-500" />
                    ) : (
                      <ChevronRight
                        className={cn(
                          "w-4 h-4 transition-transform",
                          expandedSections.includes(item.id) && "rotate-90"
                        )}
                      />
                    )}
                  </button>

                  {!item.locked &&
                    expandedSections.includes(item.id) &&
                    !isCollapsed && (
                      <div className="pl-4 space-y-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.id}
                            to={child.href}
                            className={cn(
                              "flex w-full items-center gap-3 px-4 py-3 text-sm",
                              "rounded-lg transition-all duration-300",
                              "hover:bg-black/30 dark:hover:bg-red-950/30",
                              "relative overflow-hidden group",
                              location.pathname === child.href
                                ? "text-black dark:text-red-100 bg-black/30 dark:bg-red-950/30"
                                : "text-black/70 dark:text-white/70"
                            )}
                          >
                            <child.icon className="w-5 h-5 flex-shrink-0" />
                            <span className="font-medium whitespace-nowrap">
                              {child.label}
                            </span>
                            {location.pathname === child.href && (
                              <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-black/50 via-black/50 to-black/50 dark:from-red-500/50 dark:via-red-600/50 dark:to-red-500/50" />
                            )}
                          </Link>
                        ))}
                      </div>
                    )}
                </div>
              ) : (
                <Link
                  to={item.locked ? "/coming-soon" : item.href}
                  className={cn(
                    "flex w-full items-center gap-3 px-4 py-3 text-sm",
                    "rounded-lg transition-all duration-300",
                    "relative overflow-hidden group",
                    "hover:bg-black/30 dark:hover:bg-red-950/30",
                    location.pathname === item.href
                      ? "text-black dark:text-red-100 bg-black/30 dark:bg-red-950/30"
                      : "text-black/70 dark:text-white/70",
                    item.locked && "cursor-pointer text-gray-500"
                  )}
                >
                  <item.icon className="w-5 h-5 flex-shrink-0" />
                  <span
                    className={cn(
                      "font-medium whitespace-nowrap transition-opacity duration-300",
                      isCollapsed && "opacity-0 w-0"
                    )}
                  >
                    {item.label}
                  </span>
                  {item.locked && <Lock className="w-4 h-4 text-gray-500" />}
                  {location.pathname === item.href && (
                    <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-black/50 via-black/50 to-black/50 dark:from-red-500/50 dark:via-red-600/50 dark:to-red-500/50" />
                  )}
                </Link>
              )}
            </div>
          ))}
        </nav>

        {/* Options Panel */}
        <div
          className={cn(
            "absolute bottom-0 left-0 right-0 bg-white/80 dark:bg-black/80 backdrop-blur-sm transition-transform duration-300 border-t border-black/20 dark:border-red-900/20",
            showOptions ? "translate-y-0" : "translate-y-[calc(100%-2.5rem)]"
          )}
        >
          {/* Handle */}
          <button
            onClick={() => setShowOptions(!showOptions)}
            className="w-full h-10 flex items-center justify-center hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
          >
            <div className="w-10 h-1 rounded-full bg-black/20 dark:bg-white/20" />
          </button>

          {/* Options Content */}
          <div className="p-4 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-black/70 dark:text-white/70">
                {theme === "dark" ? (
                  <Moon className="w-4 h-4" />
                ) : (
                  <Sun className="w-4 h-4" />
                )}
                <span className="text-sm">Dark Mode</span>
              </div>
              <button
                onClick={toggleTheme}
                className="w-12 h-6 bg-black/10 dark:bg-white/10 rounded-full relative"
              >
                <div
                  className={cn(
                    "absolute top-1 w-4 h-4 rounded-full bg-black/90 dark:bg-white/90 transition-all",
                    theme === "dark" ? "right-1" : "left-1"
                  )}
                />
              </button>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-black/70 dark:text-white/70">
                <Bell className="w-4 h-4" />
                <span className="text-sm">Notifications</span>
              </div>
              <button className="w-12 h-6 bg-black/20 dark:bg-red-900/20 rounded-full relative">
                <div className="absolute right-1 top-1 w-4 h-4 rounded-full bg-black/90 dark:bg-red-500/90" />
              </button>
            </div>

            <button className="w-full p-2 flex items-center gap-2 text-black/70 dark:text-white/70 hover:bg-black/5 dark:hover:bg-white/5 rounded-lg transition-colors">
              <Settings className="w-4 h-4" />
              <span className="text-sm">Settings</span>
            </button>

            <button className="w-full p-2 flex items-center gap-2 text-black/70 dark:text-white/70 hover:bg-black/5 dark:hover:bg-white/5 rounded-lg transition-colors">
              <Search className="w-4 h-4" />
              <span className="text-sm">Search Archives</span>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/20 to-transparent dark:from-red-950/20 dark:to-transparent pointer-events-none" />
    </div>
  );
}
