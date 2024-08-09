// import { useState } from "react";
// import { Link } from "react-router-dom";
// import '../App.css'
// // const API = import.meta.env.VITE_BASE_URL;
// const Login = () => {
//   //   const [messages, setMessages] = useState([]);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log({ email, password });
//     setEmail("");
//     setPassword("");
//   };
//   // useEffect(() => {
//   //   fetch(`${API}/messages`)
//   //     .then((res) => res.json())
//   //     .then((res) => {
//   //       console.log(res);
//   //       setMessages(res);
//   //     })
//   //     .catch((err) => console.log(err));
//   // }, [])
//   return (
//     // <div className="login_container">
//     //   {messages.map((message) => (
//     //     <div key={message.id}>
//     //         <section>
//     //         {message.Date}
//     //         {message.Author}
//     //         {message.Content}
//     //         </section>
//     //         </div>
//     //   ))}
//     // </div>
//     <main className="login">
//       <h1 className="loginTitle">Log in to your account</h1>
//       <form className="loginForm" onSubmit={handleSubmit}>
//         <label htmlFor="email">Email Address</label>
//         <input
//           type="text"
//           name="email"
//           required
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <label htmlFor="password">Passowrd</label>
//         <input
//           type="password"
//           name="password"
//           required
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button className="loginBtn">SIGN IN</button>
//         <p>
//           Don't have an account? Create one <Link to="/register"> here</Link>
//         </p>
//       </form>
//     </main>
//   );
// };

// export default Login;

import React from "react";
import { initializeApp } from "firebase/app";
// const ui = new firebase.auth.AuthUI(firebase.auth());

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGE,
  messagingSenderId: import.meta.env.VITE_MESSAGEID,
  appId: import.meta.env.VITE_APP_ID,
  measurementId: import.meta.env.VITE_MEASUREMENT_ID
};


const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(mapp);

function Login() {
  const signInWithGoogle = async () => {
    const auth = firebase.auth();
    await auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  };

  return <button onClick={signInWithGoogle}>Sign in with Google</button>;
}

export default Login;
