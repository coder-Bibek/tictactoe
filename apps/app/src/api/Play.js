import {
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
} from "firebase/firestore/lite";

import { db } from "../db/index";

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
    await setDoc(doc(db, "play", "play"), {
      host,
      code,
    });

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
  const docRef = doc(db, "play", "play");

  const play = await getDoc(docRef);

  if (play.data().host !== host) {
    return {
      message: "no host found",
      status: false,
    };
  }

  return {
    data: play.data(),
    status: true,
  };
}

export { createPlay, fetchPlays, fetchPlay };
