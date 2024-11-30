import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useState } from "react";
import { Outlet } from "react-router-dom";

export function Auth() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="relative w-full h-screen flex items-center justify-center">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover filter blur-sm"
        autoPlay
        loop
        muted
        playsInline
        onLoadedMetadata={(e) => {
          e.currentTarget.playbackRate = 0.5;
        }}
        onCanPlay={(e) => {
          e.currentTarget.play();
          setIsLoading(false);
        }}
      >
        <source src="/login_page.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* <img
        src="logo.jpeg"
        alt="App Logo"
        className="absolute top-4 right-4 w-16 h-16 md:w-24 md:h-24 object-contain z-10 rounded-full"
      /> */}

      <Avatar className="absolute top-4 right-4 w-16 h-16 md:w-24 md:h-24 object-contain z-10 rounded-full">
        <AvatarImage src="/logo.jpeg" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>

      {/* Loading Spinner */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-white"></div>
        </div>
      )}
      <Outlet />
    </div>
  );
}
