import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "./config";

/**
 * Reads the announcement settings from Firestore.
 * Returns { active, message } or null on error.
 * Must only be called in a browser context (not during SSR).
 */
export async function getAnnouncement() {
  const ref = doc(db, "settings", "announcement");
  const snap = await getDoc(ref);
  if (!snap.exists()) return null;
  return snap.data();
}

/**
 * Writes announcement settings to Firestore using merge so partial
 * updates don't overwrite unrelated fields.
 * @param {{ active?: boolean, message?: string }} data
 */
export async function updateAnnouncement(data) {
  const ref = doc(db, "settings", "announcement");
  await setDoc(ref, data, { merge: true });
}
