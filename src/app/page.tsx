"use client";

import { useUser } from "@clerk/nextjs";

export default function Home() {
  const { user } = useUser();
  const name = user?.firstName || "Guest";
  ``;
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <h1>Welcome {name}</h1>
      <p>This is the notes app</p>
    </div>
  );
}
