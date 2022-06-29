import { doc, getDoc } from "firebase/firestore/lite";

import { db } from "../db/index";

async function findRoom(code, host) {
  const docRef = doc(db, "play", host);

  try {
    const play = await getDoc(docRef);

    if (!play.exists()) {
      return {
        message: "No host found",
        status: false,
      };
    }

    if (play.data().code === code) {
      return {
        data: play.data(),
        status: true,
      };
    }

    return play.data();
  } catch (err) {
    return {
      message: err,
      status: false,
    };
  }
}

export { findRoom };
