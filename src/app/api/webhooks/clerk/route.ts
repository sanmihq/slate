import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";
import { Webhook } from "svix";
import { WebhookEvent } from "@clerk/nextjs/server";
import { admin, db } from "@/lib/firebase/admin";

export async function POST(req: NextRequest) {
  const WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET;

  if (!WEBHOOK_SECRET) {
    return NextResponse.json(
      { message: "Webhook secret not found." },
      { status: 400 },
    );
  }

  // Get the headers and payload from the request
  const payload = await req.text();
  const headerPayload = await headers();
  const svixId = headerPayload.get("svix-id") as string;
  const svixTimestamp = headerPayload.get("svix-timestamp") as string;
  const svixSignature = headerPayload.get("svix-signature") as string;

  // Verify the payload using the signature, ID, and timestamp
  let evt: WebhookEvent;
  try {
    const wh = new Webhook(WEBHOOK_SECRET);
    evt = wh.verify(payload, {
      "svix-id": svixId,
      "svix-timestamp": svixTimestamp,
      "svix-signature": svixSignature,
    }) as WebhookEvent;
  } catch (err) {
    console.error("Error verifying webhook:", err);
    return NextResponse.json(
      { message: "Webhook verification failed." },
      { status: 400 },
    );
  }

  // Handle the event based on its type
  switch (evt.type) {
    case "user.created":
      const {
        id,
        first_name,
        last_name,
        username,
        email_addresses,
        image_url,
      } = evt.data;

      const createdEmail = email_addresses?.[0]?.email_address ?? null;

      try {
        await db
          .collection("users")
          .doc(id)
          .set({
            id,
            firstName: first_name ?? null,
            lastName: last_name ?? null,
            username: username ?? null,
            email: createdEmail,
            profilePicture: image_url ?? null,
            createdAt: admin.firestore.FieldValue.serverTimestamp(),
          });
        console.log(`User created: ${id}`);
      } catch (error) {
        console.error("Failed to create user in Firestore:", error);
        return NextResponse.json(
          { message: "Database error." },
          { status: 500 },
        );
      }
      break;

    case "user.updated":
      const updatedUser = evt.data;

      const updatedEmail =
        updatedUser.email_addresses?.[0]?.email_address ?? null;

      try {
        await db
          .collection("users")
          .doc(updatedUser.id)
          .update({
            firstName: updatedUser.first_name ?? null,
            lastName: updatedUser.last_name ?? null,
            username: updatedUser.username ?? null,
            profilePicture: updatedUser.image_url ?? null,
            email: updatedEmail,
            updatedAt: admin.firestore.FieldValue.serverTimestamp(),
          });
        console.log(`User updated: ${updatedUser.id}`);
      } catch (error) {
        console.error("Failed to update user in Firestore:", error);
        return NextResponse.json(
          { message: "Database error." },
          { status: 500 },
        );
      }
      break;

    case "user.deleted":
      const deletedUser = evt.data;
      if (deletedUser.id) {
        try {
          await db.collection("users").doc(deletedUser.id).delete();
          console.log(`User deleted: ${deletedUser.id}`);
        } catch (error) {
          console.error("Failed to delete user from Firestore:", error);
          return NextResponse.json(
            {
              message:
                "User deleted event processed, but database error occurred.",
            },
            { status: 202 },
          );
        }
      }
      break;

    default:
      console.log(`Unhandled event type: ${evt.type}`);
      return NextResponse.json(
        { message: "Unhandled event type." },
        { status: 400 },
      );
  }

  return NextResponse.json({ message: "Webhook received." }, { status: 200 });
}
