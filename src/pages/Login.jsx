import { useEffect, useState } from "react";

const API = import.meta.env.VITE_BASE_URL;
const Login = () => {
  const [messages, setMessages] = useState([]);
useEffect(() => {
  fetch(`${API}/messages`)
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      setMessages(res);
    })
    .catch((err) => console.log(err));
}, [])
  return (
    <div className="login_container">
      {messages.map((message) => (
        <div key={message.id}>
            <section>
            {message.Date}
            {message.Author}
            {message.Content}
            </section>
            </div>
      ))}
    </div>
  );
};

export default Login;
