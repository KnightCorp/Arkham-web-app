import { Link } from "react-router-dom";
import { Smile } from "lucide-react";

export function ComingSoon() {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center">
      <div className="text-center space-y-6">
        <Smile className="w-16 h-16 mx-auto animate-bounce" />
        <h1 className="text-4xl font-extrabold">Coming Soon</h1>
        <p className="text-lg max-w-md mx-auto">
          This feature is under development. We’re working hard to bring it to
          you soon! Stay tuned.
        </p>
        <Link
          to="/"
          className="mt-4 inline-block px-6 py-3 bg-white/90 text-black rounded-xl font-medium text-lg shadow-lg hover:shadow-xl transition-shadow"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
