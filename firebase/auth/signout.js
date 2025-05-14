import firebase_app from "../firebase";
import { getAuth, signOut } from "firebase/auth";

const auth = getAuth(firebase_app);

export default async function signOutUser() {
    let error = null;
    try {
        await signOut(auth);
    } catch (e) {
        error = e;
    }
    return { error };
}