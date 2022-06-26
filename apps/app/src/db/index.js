import { getFirestore } from "firebase/firestore/lite";

import app from "../app/firebase/config";

export const db = getFirestore(app);
