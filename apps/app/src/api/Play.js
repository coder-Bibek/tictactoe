import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  setDoc,
} from "firebase/firestore/lite";

import { db } from "../db/index";
import { Storage } from "../storage";

async function createPlay(host) {
  const code = Math.floor(100000 + Math.random() * 900000);

  const play = await fetchPlay(host);

  if (play.status) {
    return {
      message: "host exists",
      status: false,
    };
  }

  try {
    await setDoc(doc(db, "play", host), {
      code,
      timestamp: new Date().getHours(),
      host,
      team: "",
    });

    Storage.setItem("host", true);

    return {
      message: "success",
      status: true,
    };
  } catch (error) {
    return {
      message: error,
      status: false,
    };
  }
}

async function fetchPlays() {
  const playColumns = collection(db, "play");
  const playSnapshot = await getDocs(playColumns);

  const plays = playSnapshot.docs.map((doc) => doc.data());

  return plays;
}


async function fetchPlay(host) {
  const docRef = doc(db, "play", host);

  try {
    const play = await getDoc(docRef);

    if (!play.exists()) {
      return {
        message: "no host found",
        status: false,
      };
    }

    return {
      data: play.data(),
      status: true,
    };
  } catch (err) {
    return {
      message: err,
      status: false,
    };
  }
}

async function deletePlay() {
  const user = Storage.getItem("user");

  try {
    const docRef = doc(db, "play", user);

    await deleteDoc(docRef);

    Storage.removeItem("host");

    return {
      message: "success",
      status: true,
    };
  } catch (error) {
    return {
      message: error,
      status: false,
    };
  }
}

export { createPlay, deletePlay, fetchPlays, fetchPlay };
