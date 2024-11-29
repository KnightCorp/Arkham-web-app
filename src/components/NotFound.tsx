import { AlertTriangle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center  px-6 text-gray-500">
      <AlertTriangle className="mb-4 h-16 w-16 text-red-500" />
      <h1 className="text-4xl font-bold">404</h1>
      <p className="mt-2 text-xl font-semibold">Page Not Found</p>
      <p className="mt-4 text-center text-gray-700">
        Sorry, the page you're looking for doesn't exist or has been moved.
      </p>
    </div>
  );
}
