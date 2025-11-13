"use client";

import { useUser } from "@clerk/nextjs";
import { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase/firebase";

export function useCurrentUser() {
  const { user: authUser, isLoaded } = useUser();
  const [fireUser, setFireUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFirestoreUser = async () => {
      if (!authUser?.id) {
        setLoading(false);
        return;
      }

      try {
        const ref = doc(db, "users", authUser.id);
        const snap = await getDoc(ref);
        if (snap.exists()) setFireUser(snap.data());
      } catch (err) {
        console.error("Error fetching Firestore user:", err);
      } finally {
        setLoading(false);
      }
    };

    if (isLoaded) fetchFirestoreUser();
  }, [authUser, isLoaded]);

  const combinedUser = fireUser ?? authUser;

  const firstName = combinedUser?.firstName ?? "";
  const lastName = combinedUser?.lastName ?? "";
  const initials =
    (firstName?.[0]?.toUpperCase() ?? "") +
    (lastName?.[0]?.toUpperCase() ?? "");

  const appUser = combinedUser
    ? {
        id: authUser?.id,
        firstName,
        lastName,
        email:
          combinedUser?.email ??
          authUser?.emailAddresses?.[0]?.emailAddress ??
          "",
        imageUrl: authUser?.imageUrl ?? "",
        initials: initials || "U",
        fireData: fireUser,
      }
    : null;

  return { user: appUser, loading, isLoaded };
}
