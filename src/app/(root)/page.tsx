"use client";

import { Button } from "@/components/ui/button";
import { APP_ROUTES } from "@/lib/routes";
import Link from "next/link";
import { SignInButton } from "@clerk/nextjs";
import { useCurrentUser } from "@/lib/hooks/useCurrentUser";

export default function Home() {
  const { user, loading } = useCurrentUser();

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center space-y-2 text-center">
      {!user ? (
        <>
          <h1>Welcome to the App 👋</h1>
          <p className="text-muted-foreground">
            Sign in to get started with your notes.
          </p>
          <Button asChild className="cursor-pointer">
            <SignInButton>Get Started</SignInButton>
          </Button>
        </>
      ) : (
        <>
          <h1>Hello, {user.firstName || "there"} 👋</h1>
          <p className="text-muted-foreground">Email: {user.email}</p>
          <Button asChild>
            <Link href={APP_ROUTES.notes}>Go to Notes</Link>
          </Button>
        </>
      )}
    </div>
  );
}
