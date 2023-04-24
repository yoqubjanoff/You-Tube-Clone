import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyDmtH3GMR240zshtWOgBpaSidyd8zJTZOc",
//   authDomain: "yt-clone-5c9a8.firebaseapp.com",
//   projectId: "yt-clone-5c9a8",
//   storageBucket: "yt-clone-5c9a8.appspot.com",
//   messagingSenderId: "249959283851",
//   appId: "1:249959283851:web:72e9ee9e4cd9fe73a9a88e",
// };

// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);

// const provider = new GoogleAuthProvider();

// export { auth, provider };

// import { initializeApp } from "firebase/app";
// import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDmtH3GMR240zshtWOgBpaSidyd8zJTZOc",
  authDomain: "yt-clone-5c9a8.firebaseapp.com",
  projectId: "yt-clone-5c9a8",
  storageBucket: "yt-clone-5c9a8.appspot.com",
  messagingSenderId: "249959283851",
  appId: "1:249959283851:web:72e9ee9e4cd9fe73a9a88e"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const provider = new GoogleAuthProvider();

// Foydalanuvchi kirish tugmasi bosilganda ishlaydigan funktsiya
const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    console.log(user);
  } catch (error) {
    console.error(error);
  }
}

export { auth, provider, signInWithGoogle };
