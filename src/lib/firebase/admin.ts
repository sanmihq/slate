import * as admin from "firebase-admin";

const serviceAccountBase64 = process.env.FIREBASE_ADMIN_SDK_CONFIG_BASE64;

if (!serviceAccountBase64) {
  throw new Error("FIREBASE_ADMIN_SDK_CONFIG_BASE64 is not set in .env");
}

const serviceAccountJson = Buffer.from(serviceAccountBase64, "base64").toString(
  "utf8",
);
const serviceAccount = JSON.parse(serviceAccountJson);

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

const db = admin.firestore();

export { admin, db };
