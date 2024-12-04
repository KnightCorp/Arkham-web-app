import { Navigate, Outlet } from "react-router-dom";
import { Sidebar } from "./components/Sidebar";

export default function AppLayout() {
  const isAuthenticated = localStorage.getItem("entityId");

  if (!isAuthenticated) {
    return <Navigate to="/sign-in" />;
  }

  return (
    <div className="flex h-screen bg-white dark:bg-black relative">
      {/* Background layers */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Base noir texture */}
        <div
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1617957718614-8c23f060c2d0')] bg-cover bg-center opacity-[0.03] grayscale"
          style={{ backgroundPosition: "50% 50%" }}
        />
        {/* Film grain effect */}
        <div className="absolute inset-0 bg-[url('/grain.png')] opacity-[0.08] mix-blend-overlay" />
        {/* Vignette effect */}
        <div className="absolute inset-0 bg-radial-gradient opacity-80" />
        {/* Subtle grid texture */}
        <div className="absolute inset-0 bg-[url('/grid.png')] opacity-[0.02]" />
      </div>

      {/* Main content */}
      <div className="flex w-full relative z-10">
        <Sidebar />
        <main className="flex-1 p-8 overflow-y-auto bg-gradient-to-br from-white via-white/95 to-white/90 dark:from-black dark:via-black/95 dark:to-black/90">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
