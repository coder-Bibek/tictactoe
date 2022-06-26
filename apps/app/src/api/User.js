import { deleteDoc, doc, getDoc, setDoc } from "firebase/firestore/lite";
import { db } from "../db";
import { Storage } from "../storage";

async function createUser(host) {
  const user = await fetchUser(host);

  if (user.status) {
    return {
      message: "host exists",
      status: false,
    };
  }

  try {
    await setDoc(doc(db, "users", host), {
      status: 0,
    });

    Storage.setItem("user", host);

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

async function fetchUser(host) {
  const docRef = doc(db, "users", host);

  try {
    const user = await getDoc(docRef);

    if (!user.exists()) {
      return {
        message: "no host found",
        status: false,
      };
    }

    return {
      data: user.data(),
      status: true,
    };
  } catch (err) {
    return {
      message: err,
      status: false,
    };
  }
}

async function deleteUser() {
  const user = Storage.getItem("user");

  try {
    const docRef = doc(db, "users", user);

    await deleteDoc(docRef);

    Storage.removeItem("user");

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

export { createUser, fetchUser, deleteUser };
