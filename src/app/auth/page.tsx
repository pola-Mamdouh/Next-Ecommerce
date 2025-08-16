"use client";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useState } from "react";
const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  const router = useRouter();
  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };
  return (
    <div className="min-h-screen w-full flex mt-7 ">
      <div className="w-full max-w-3xl mx-auto flex flex-col lg:flex-row p-3">
        <div>
          <div
            className="mb-8 lg:mb-12 cursor-pointer "
            onClick={() => router.push("/")}
          >
            <ChevronLeft className="text-gray-500 w-7 h-7 p-1 rounded-full border-solid border-2" />
          </div>
          {/* Form  */}
          <div className="">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-6 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-transparent bg-clip-text pb-3">
              {isSignUp ? "Sign Up" : "Sign In"}
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-400 mb-6 sm:mb-8">
              {isSignUp
                ? "Join SahndStore today and discover exclusive deals on your favorite products!"
                : "Welcome back to ShandStore! Login to continue Your shopping journey"}
            </p>

          </div>
          <div className="mt-4 sm:mt-5 flex items-center justify-center">
              <p className="text-base sm:text-lg lg:text-xl text-gray-600">
                {isSignUp? "Already a member" : "Don't have an account"}
              </p>
                          <Button
              variant="link"
              className="text-lg sm:text-xl lg:text-2xl text-gray-500 cursor-pointer"
              onClick={toggleForm}
            >
              {isSignUp ? "Sign Up" : "Sign In"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
