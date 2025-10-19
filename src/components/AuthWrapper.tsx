"use client";

import { appConfig } from "@/lib/data/appConfig";
import { SignedIn, SignedOut, SignIn } from "@clerk/nextjs";
import React from "react";

interface AuthWrapperProps {
  children: React.ReactNode;
}

export const AuthWrapper: React.FC<AuthWrapperProps> = ({ children }) => {
  return (
    <>
      <SignedIn>{children}</SignedIn>

      <SignedOut>
        <div className="flex h-screen flex-col items-center justify-center">
          <h2 className="font-semibold">Welcome to Slate</h2>
          <p className="mb-6">
            Sign in to start creating and syncing your notes.
          </p>
          <SignIn routing="hash" signUpUrl={appConfig.links.signup} />
        </div>
      </SignedOut>
    </>
  );
};
