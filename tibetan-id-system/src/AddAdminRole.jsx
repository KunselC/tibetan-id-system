import { getFirestore, doc, setDoc } from "firebase/firestore";

const db = getFirestore();

const addAdminRole = async (uid) => {
  try {
    await setDoc(doc(db, "users", uid), { role: "admin" }, { merge: true });
    console.log("Admin role added successfully");
  } catch (error) {
    console.error("Error adding admin role:", error);
  }
};

// Note to self: Example usage
// addAdminRole("user-uid");
