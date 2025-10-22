import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function Home() {
  const user = await currentUser();
  if (!user) redirect("/sign-in");
  const name = user?.firstName || "Guest";

  return (
    <div className="mt-16 flex flex-col items-center justify-center p-4">
      <h1>Welcome {name}</h1>
      <p>This is the notes app</p>
    </div>
  );
}
